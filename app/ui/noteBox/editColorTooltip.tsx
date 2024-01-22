"use client";
import { setColor } from "@/app/lib/actions";
import { useTransition } from "react";

type Props = {
  id: string;
  setBackToDefault: () => void;
};

export default function EditColorToolip({ id, setBackToDefault }: Props) {
  // eslint-disable-next-line no-unused-vars
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

  const handleChangeColor = async (ev: any, id: string, color: string) => {
    ev.preventDefault();
    await setColor(id, color);
    setBackToDefault();
  };

  return (
    <>
      <div className="z-50 w-full gap-3 rounded-lg border-[1px] border-zinc-300 bg-white p-2 shadow-sm sm:grid sm:grid-cols-6 lg:flex ">
        {colors.map((color, index) => (
          <button
            about="Editar cor da nota"
            onClick={(ev) =>
              startTransition(() => handleChangeColor(ev, id!, color))
            }
            key={index}
            style={{ backgroundColor: color }}
            className={`size-8 rounded-full`}
          ></button>
        ))}
      </div>
    </>
  );
}
