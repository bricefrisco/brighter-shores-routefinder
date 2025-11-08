import { bounties } from "../algorithm/bounties.js";
import { useMemo } from "react";
import ChevronUp from "../icons/ChevronUp.jsx";
import ChevronDown from "../icons/ChevronDown.jsx";
import CheckCircle from "../icons/CheckCircle.jsx";

const UpButton = ({ bountyKey, count, setCount }) => {
  return (
    <button
      className="group-hover:block border-200 dark:border-zinc-700 border rounded p-[4px] absolute right-1 top-[4px] bg-white dark:bg-zinc-800 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
      onClick={(e) => {
        e.stopPropagation();
        setCount(bountyKey, count + 1);
      }}
    >
      <ChevronUp className="w-3 h-3 text-black dark:text-white" />
    </button>
  );
};

const DownButton = ({ bountyKey, count, setCount }) => {
  return (
    <button
      className="group-hover:block border-200 dark:border-zinc-700 border rounded p-[4px] absolute right-1 bottom-[4px] bg-white dark:bg-zinc-800 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
      onClick={(e) => {
        e.stopPropagation();
        setCount(bountyKey, count - 1);
      }}
    >
      <ChevronDown className="w-3 h-3 text-black dark:text-white" />
    </button>
  );
};

const BountyCount = ({ value, canSelectMoreThanOne }) => {
  if (!canSelectMoreThanOne) {
    return (
      <CheckCircle className="absolute right-2 top-4 w-6 h-6 text-green-600" />
    );
  }

  return (
    <div className="right-8 w-[20px] h-[20px] rounded-full border-2 border-green-600 absolute top-[20px] text-center dark:bg-zinc-900">
      <div className="ml-[0.5px] text-green-600 text-xs font-bold">{value}</div>
    </div>
  );
};

const SelectableBounty = ({
  bountyKey,
  count,
  setCount,
  canSelectMoreThanOne = true,
}) => {
  const bounty = useMemo(() => {
    return bounties[bountyKey];
  }, [bountyKey]);

  if (!bounty) {
    return null;
  }

  const handleBountyClick = (e) => {
    if (e.type === "click") {
      if (count === 0 || !canSelectMoreThanOne) {
        setCount(bountyKey, 1);
      } else {
        setCount(bountyKey, count + 1);
      }
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      if (count > 0) {
        setCount(bountyKey, count - 1);
      }
    }
  };

  return (
    <div
      className={`cursor-pointer group relative w-full min-h-[60px] border dark:border-zinc-700 dark:text-zinc-200 p-2 rounded block hover:text-blue-500 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-zinc-800 select-none`}
      onClick={handleBountyClick}
      onContextMenu={handleBountyClick}
    >
      <div className="flex items-center h-full text-right">
        <img
          width={42}
          height={42}
          src={`https://brightershoreswiki.org/images/${bounty.name.replace(/ /g, "_")}.png`}
          onError={(e) => (e.currentTarget.src = "/unknown-transparent.png")}
          alt="carrots"
          className="rounded-md"
        />
        <div className="ml-4 text-lg">{bounty.name}</div>
        {count > 0 && canSelectMoreThanOne ? (
          <>
            <UpButton bountyKey={bountyKey} count={count} setCount={setCount} />
            <DownButton
              bountyKey={bountyKey}
              count={count}
              setCount={setCount}
            />
          </>
        ) : null}
        {count > 0 ? (
          <BountyCount
            value={count}
            canSelectMoreThanOne={canSelectMoreThanOne}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SelectableBounty;
