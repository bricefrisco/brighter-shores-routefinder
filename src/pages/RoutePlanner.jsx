import useBounties from "../hooks/useBounties.js";
import Page from "../components/Page.jsx";
import { useEffect, useMemo, useState } from "react";
import Subheading from "../components/Subheading.jsx";
import useSettings from "../hooks/useSettings.js";
import Paragraph from "../components/Paragraph.jsx";
import InternalLink from "../components/InternalLink.jsx";
import Bounty from "../components/Bounty.jsx";

const worker = new Worker(new URL("../algorithm/worker.js", import.meta.url), {
  type: "module",
});

const formatTime = (input) => {
  let seconds = parseInt(input, 10);
  if (isNaN(seconds)) {
    return input; // In case the input is not a valid number.
  }

  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  if (minutes > 0) {
    return `${minutes}m${seconds}s`;
  } else {
    return `${seconds}s`;
  }
};

const RoutePlanner = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});
  const [completedActions, setCompletedActions] = useState(new Set());

  const toggleActionCompletion = (index) => {
    setCompletedActions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const { selectedBounties: bounties } = useBounties("bountiesV2");
  const { selectedBounties: availableBounties } = useBounties(
    "availableBountiesV2",
  );

  const { detectiveLevel, battleOfFortuneholdCompleted, roundTrip } =
    useSettings();

  useEffect(() => {
    worker.onmessage = (event) => {
      console.log("result", event.data);
      setResult(event.data);
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    if (bounties.length + availableBounties.length === 0) {
      return;
    }

    setResult({});
    setLoading(true);

    const currentBountyKeys = [];
    bounties.forEach((bounty) => {
      for (let i = 0; i < bounty.selectedCount; i++) {
        currentBountyKeys.push(bounty.key);
      }
    });

    const availableBountyKeys = [];
    availableBounties.forEach((bounty) => {
      for (let i = 0; i < bounty.selectedCount; i++) {
        availableBountyKeys.push(bounty.key);
      }
    });

    const message = {
      currentBounties: currentBountyKeys,
      availableBounties: availableBountyKeys,
      detectiveLevel: detectiveLevel === "" ? 0 : detectiveLevel,
      battleOfFortuneholdCompleted,
      roundTrip,
    };

    console.log("message", message);

    worker.postMessage(message);
  }, [
    bounties,
    availableBounties,
    detectiveLevel,
    battleOfFortuneholdCompleted,
    roundTrip,
  ]);

  const bountiesToAbandon = useMemo(() => {
    if (Object.keys(result).length === 0) {
      return null;
    }

    // Bounties we need
    const need = {};
    result.bounties.forEach((key) => {
      if (!need[key]) {
        need[key] = 1;
      } else {
        need[key]++;
      }
    });

    // Check for bounties we have selected that we don't need
    const abandon = [];
    bounties.forEach((bounty) => {
      if (need[bounty.key]) {
        for (let i = 0; i < bounty.selectedCount; i++) {
          if (need[bounty.key] > 0) {
            need[bounty.key]--;
          } else {
            abandon.push(bounty.key);
          }
        }
      } else {
        for (let i = 0; i < bounty.selectedCount; i++) {
          abandon.push(bounty.key);
        }
      }
    });

    console.log("bountiesToAbandon", abandon);
    return abandon;
  }, [bounties, result]);

  const bountiesToPickup = useMemo(() => {
    if (Object.keys(result).length === 0) {
      return null;
    }

    // Bounties we need
    const need = {};
    result.bounties.forEach((key) => {
      if (!need[key]) {
        need[key] = 1;
      } else {
        need[key]++;
      }
    });

    // Subtract the bounties we already have
    bounties.forEach((bounty) => {
      if (need[bounty.key]) {
        need[bounty.key] -= bounty.selectedCount;
      }
    });

    // And check which bounties we still need to pick up
    const pickup = [];
    availableBounties.forEach((bounty) => {
      if (need[bounty.key]) {
        for (let i = 0; i < bounty.selectedCount; i++) {
          if (need[bounty.key] > 0) {
            pickup.push(bounty.key);
            need[bounty.key]--;
          }
        }
      }
    });

    console.log("bountiesToPickup", pickup);
    return pickup;
  }, [bounties, availableBounties, result]);

  return (
    <Page title="Bounty Plan" meta="The best route based on your selections. (Click on an action to mark it as completed)">
      {!bounties.length && !availableBounties.length ? (
        <div>
          <Paragraph>
            You have not selected any bounties yet. Please{" "}
            <InternalLink to="/select-bounties">select bounties</InternalLink>{" "}
            to get started.
          </Paragraph>
        </div>
      ) : null}

      {(bounties.length || availableBounties.length) && loading ? (
        <div className="h-[325px] flex items-center place-content-center mb-6">
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">
            Calculating best route...
          </div>
        </div>
      ) : null}

      {bountiesToAbandon?.length ? (
        <>
          <Subheading>Abandon</Subheading>
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-5">
            {bountiesToAbandon.map((key, index) => (
              <Bounty key={`${key}-${index}`} bountyKey={key} />
            ))}
          </div>
        </>
      ) : null}

      {bountiesToPickup?.length ? (
        <>
          <Subheading>Pickup</Subheading>
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-5 mb-5">
            {bountiesToPickup.map((key) => (
              <Bounty key={key} bountyKey={key} />
            ))}
          </div>
        </>
      ) : null}

      {result?.actions?.length ? (
        <div className="relative overflow-x-auto my-7 whitespace-nowrap">
          <table className="w-full text-left rtl:text-right">
            <thead className="text-gray-900 dark:text-zinc-200 uppercase">
              <tr className="border-b border-gray-100 dark:border-zinc-700">
                <th scope="col" className="py-3 min-w-[100px]">
                  Action
                </th>
                <th scope="col" className="py-3 min-w-[100px]">
                  Item
                </th>
                <th scope="col" className="py-3 text-right min-w-[100px]">
                  Location
                </th>
                <th scope="col" className="py-3 text-right min-w-[50px]">
                  Est. Time
                </th>
              </tr>
            </thead>
            <tbody>
              {result.actions.map((action, index) => {
                const isCompleted = completedActions.has(index);
                return (
                  <tr
                    key={index}
                    onClick={() => toggleActionCompletion(index)}
                    className={`border-b border-gray-100 dark:border-zinc-700 last:border-none dark:text-zinc-200 cursor-pointer transition-all duration-200 hover:bg-gray-50 dark:hover:bg-zinc-800 ${
                      isCompleted 
                        ? 'bg-gray-100 dark:bg-zinc-800 opacity-60' 
                        : ''
                    }`}
                  >
                    <td className="py-3 capitalize flex items-center gap-2">
                      {action.type}
                    </td>
                    <td className="py-3">
                      {action.item ? <Bounty bountyKey={action.item} /> : "-"}
                    </td>
                    <td className="py-3 text-right">{action.location}</td>
                    <td className="py-3 text-right">
                      {formatTime(Math.round(action.distance))}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}

      {result?.actions?.length && (
        <Paragraph className="mt-10">
          To modify your selections, you can go back to the previous page.
        </Paragraph>
      )}
    </Page>
  );
};

export default RoutePlanner;
