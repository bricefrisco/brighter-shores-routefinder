import Page from "../components/Page.jsx";
import Paragraph from "../components/Paragraph.jsx";
import Subheading from "../components/Subheading.jsx";
import SelectableBounty from "../components/SelectableBounty.jsx";
import useBounties from "../hooks/useBounties.js";
import useSettings from "../hooks/useSettings.js";

import { bounties as bountyData } from "../algorithm/bounties.js";
import InternalLink from "../components/InternalLink.jsx";
import ExternalLink from "../components/ExternalLink.jsx";

const SelectBounties = () => {
  const {
    bounties,
    selectedBountiesCount,
    setCount,
    reset: resetBounties,
  } = useBounties("bountiesV2");

  const {
    bounties: availableBounties,
    selectedBountiesCount: selectedAvailableBountiesCount,
    setCount: setCountAvailable,
    reset: resetAvailableBounties,
  } = useBounties("availableBountiesV2");

  const { merchantingLevel } = useSettings();

  return (
    <Page
      title="Bounty Selection"
      meta="Select from current and available bounties."
    >
      <Subheading>Your bounties</Subheading>
      <Paragraph className="mb-2 dark:text-zinc-300">
        Select bounties you currently have <span className="font-bold">(up to 6 total).</span> To see or hide relevant bounties, change your merchanting level
        on the <InternalLink to="/configuration">configuration page</InternalLink>. Left click to increase the count, right click to decrease the count.
      </Paragraph>
      <Paragraph className="mb-2 dark:text-zinc-300">
        {" "}
        Not all bounties have been discovered yet, so higher level ones may be missing. Please help contribute by providing details about these bounties in our{" "}
        <ExternalLink to="https://discord.gg/fcSYv9GPwJ">Discord</ExternalLink>, and we will get them added.
      </Paragraph>
      <button
        className={`text-blue-600 dark:text-blue-500 hover:underline font-medium text-sm mb-3 ${selectedBountiesCount === 0 ? "invisible" : ""}`}
        onClick={resetBounties}
      >
        Clear selections
      </button>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-7">
        {bounties
          .filter(
            (bounty) =>
              merchantingLevel === 0 ||
              bountyData[bounty.key].level <= merchantingLevel,
          )
          .map((bounty) => (
            <SelectableBounty
              key={bounty.key}
              bountyKey={bounty.key}
              count={bounty.selectedCount}
              setCount={setCount}
            />
          ))}
      </div>

      <Subheading>Bounty board (optional)</Subheading>
      <Paragraph className="mb-2 dark:text-zinc-300">
        If you only want to find the best route for your current bounties, you
        can skip these. Otherwise, you can wait for more bounties to be
        available and select them here. The tool will calculate the best route
        from all possible bounties and let you know which ones to abandon and
        which ones to pick up.
      </Paragraph>
      <button
        className={`text-blue-600 dark:text-blue-500 hover:underline font-medium text-sm mb-3 ${selectedAvailableBountiesCount === 0 ? "invisible" : ""}`}
        onClick={resetAvailableBounties}
      >
        Clear selections
      </button>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-5">
        {availableBounties
          .filter(
            (bounty) =>
              merchantingLevel === 0 ||
              bountyData[bounty.key].level <= merchantingLevel,
          )
          .map((bounty) => (
            <SelectableBounty
              key={bounty.key}
              bountyKey={bounty.key}
              count={bounty.selectedCount}
              setCount={setCountAvailable}
              canSelectMoreThanOne={false}
            />
          ))}
      </div>
      <Paragraph className="mt-10">
        After making your selections, continue to the next page to see the best
        route.
      </Paragraph>
    </Page>
  );
};

export default SelectBounties;
