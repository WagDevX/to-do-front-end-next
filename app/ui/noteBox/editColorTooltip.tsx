"use client";
import { setColor } from "@/app/lib/actions";
import { useState, useTransition } from "react";
import SpinnerLoader from "../loader/spinner-loader";

type Props = {
  id: string;
};

export default function EditColorToolip({ id }: Props) {
  const [colorChanging, setColorChanging] = useState<string>("");
  const [ispending, startTransition] = useTransition();
  const colors = [
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
      <div className="z-50 w-full items-center justify-center gap-3 rounded-lg border-[1px] border-zinc-300 bg-white p-2 shadow-sm sm:grid sm:grid-cols-6 lg:flex ">
        {colors.map((color, index) => (
          <button
            about="Editar cor da nota"
            disabled={ispending}
            onClick={(ev) => handleChangeColor(ev, id!, color)}
            key={index}
            style={
              ispending && colorChanging === color
                ? {}
                : { backgroundColor: color }
            }
            className="size-8 rounded-full"
          >
            {ispending && colorChanging === color && (
              <SpinnerLoader size={30} />
            )}
          </button>
        ))}
      </div>
    </>
  );
}
