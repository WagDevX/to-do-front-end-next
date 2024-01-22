"use client";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import SearchColorToolip from "./searchColorTooltip";

export default function ColorFilter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenTooltip = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        data-tooltip-id="search-color"
        onClick={() => handleOpenTooltip()}
        about="Filtrar notas por cor"
        className="flex gap-2 text-sm text-slate-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
          />
        </svg>
      </button>
      <Tooltip
        id="search-color"
        isOpen={isOpen}
        clickable={true}
        positionStrategy="absolute"
        offset={5}
        place="bottom-start"
        disableStyleInjection={true}
      >
        <SearchColorToolip />
      </Tooltip>
    </>
  );
}
