"use client";
import { setColor } from "@/app/lib/actions";
import { useState, useTransition } from "react";
import SpinnerLoader from "../loader/spinner-loader";
import { NoteType } from "@/app/lib/definitions";

type Props = {
  note: NoteType;
};

export default function EditColorToolip({ note }: Props) {
  const [colorChanging, setColorChanging] = useState<string>("");
  const [ispending, startTransition] = useTransition();
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

  const handleChangeColor = (ev: any, id: string, color: string) => {
    setColorChanging(color);
    ev.preventDefault();
    startTransition(async () => await setColor(id, color));
  };

  return (
    <>
      <div className="z-50 w-full items-center justify-center gap-3 rounded-lg border-[1px] border-zinc-300 bg-white p-2 shadow-sm sm:grid sm:grid-cols-7 lg:flex ">
        {colors.map((color, index) => (
          <button
            about="Editar cor da nota"
            disabled={ispending}
            onClick={(ev) => handleChangeColor(ev, note._id!, color)}
            key={index}
            style={
              ispending && colorChanging === color
                ? {}
                : { backgroundColor: color }
            }
            className={`flex size-8 items-center justify-center rounded-full ${note?.color !== "" && note?.color === color ? "border-2 border-slate-600" : ""}`}
          >
            {ispending && colorChanging === color && (
              <SpinnerLoader size={30} />
            )}
            {color === "" && (!ispending || colorChanging !== "") && (
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
            {note.color !== "" && note.color === color && (
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
