"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchColorToolip() {
  // eslint-disable-next-line no-unused-vars
  const [selectedColor, setSelectedColor] = useState<string>("");
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const colors = [
    "",
    "#BAE2FF",
    "#B9FFDD",
    "#FFE8AC",
    "#FFCAB9",
    "#F99494",
    "#9DD6FF",
    "#ECA1FF",
    "#DAFF8B",
    "#FFA285",
    "#CDCDCD",
    "#979797",
    "#A99A7C",
  ];
  const params = new URLSearchParams(searchParams);

  const handleSearchColor = (color: string) => {
    setSelectedColor(color);
    if (color) {
      params.set("color", color);
    } else {
      params.delete("color");
    }
    replace(`${pathName}?${params.toString()}`);
    params.get("color");
  };

  const colorParam = params.get("color");

  return (
    <>
      <div className="z-50 w-full items-center justify-center gap-3 rounded-lg border-[1px] border-zinc-300 bg-white p-2 shadow-sm sm:grid sm:grid-cols-6 lg:flex ">
        {colors.map((color, index) => (
          <button
            about="Procuar nota pela cor"
            onClick={(ev) => handleSearchColor(color)}
            key={index}
            style={{ backgroundColor: color }}
            className={`flex size-8 items-center justify-center rounded-full ${colorParam !== "" && colorParam === color ? "border-2 border-slate-600" : ""}`}
          >
            {color === "" && (
              <div className=" text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                  />
                </svg>
              </div>
            )}
            {colorParam !== "" && colorParam === color && (
              <div className=" text-slate-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </>
  );
}
