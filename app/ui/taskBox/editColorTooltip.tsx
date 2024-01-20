export default function EditColorToolip() {
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

  return (
    <>
      <div className="flex w-full gap-3 rounded-lg border-[1px] border-zinc-300 bg-white p-2 shadow-sm">
        {colors.map((color, index) => (
          <button
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
