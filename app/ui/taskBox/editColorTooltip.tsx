import { setColor } from "@/app/lib/actions";

interface Props {
  id: string
  setBackToDefault: () => void;
}


export default function EditColorToolip({id, setBackToDefault} : Props) {
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

  const handleChangeColor = async (ev : any, id: string, color: string) => {
    ev.preventDefault();
    await setColor(id, color);
    setBackToDefault();
  }

  return (
    <>
      <div className="flex w-full gap-3 rounded-lg border-[1px] border-zinc-300 bg-white p-2 shadow-sm z-100">
        {colors.map((color, index) => (
          <button
            onClick={(ev) => handleChangeColor(ev,id, color)}
            key={index}
            style={{ backgroundColor: color }}
            // eslint-disable-next-line tailwindcss/no-custom-classname, tailwindcss/classnames-order
            className={`size-8 rounded-full`}
          ></button>
        ))}
      </div>
    </>
  );
}
