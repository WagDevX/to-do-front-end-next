import CloseIcon from "../icons/close";
import EditIcon from "../icons/edit";
import FavoritedIcon from "../icons/favoritedIcon";
import TintIcon from "../icons/tint";

export default function TaskBox() {
  return (
    <>
      <div className="aspect-[6.5/7.3] flex-col rounded-3xl bg-white shadow-lg">
        <div className="flex justify-between border-b-2 px-6 pb-1 pt-5">
          <h1 className="font-bold text-neutral-600">Título</h1>
          <FavoritedIcon />
        </div>
        <div className="flex h-full flex-col justify-between px-6 py-5">
          <p className="text-xs text-neutral-600 ">
            Clique ou arraste o arquivo para esta área para fazer upload
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <EditIcon />
              <TintIcon />
            </div>
            <CloseIcon />
          </div>
        </div>
      </div>
    </>
  );
}
