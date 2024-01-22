"use client";
import { NoteType } from "@/app/lib/definitions";
import EditIcon from "../icons/edit";
import FavoritedIcon from "../icons/favoritedIcon";
import TintIcon from "../icons/tint";
import { editNote, favoriteNote } from "@/app/lib/actions";
import { useState, useTransition } from "react";
import FavoriteIcon from "../icons/favorite";
import DoneButton from "../icons/done";
import { Tooltip } from "react-tooltip";
import EditColorToolip from "./editColorTooltip";
import { useFormStatus } from "react-dom";
import SpinnerLoader from "../loader/spinner-loader";

type Props = {
  note: NoteType;
  setBackToDefault: () => void;
};

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      about="Salvar alterações"
      type="submit"
      disabled={pending}
      className="flex gap-2 text-neutral-600"
    >
      {pending ? <SpinnerLoader size={20} /> : <DoneButton />}
    </button>
  );
}

export default function NoteBoxForm({ note, setBackToDefault }: Props) {
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition();
  const [title, setTitle] = useState<string>(note.title);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>(note.description);

  const handleOpenTooltip = (ev: any) => {
    ev.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <form
        style={{ backgroundColor: note.color }}
        action={(formData) => {
          editNote(formData);
          setBackToDefault();
        }}
        className="aspect-[6.5/7.3] flex-col rounded-3xl bg-white shadow-lg"
      >
        <div className="flex justify-between border-b-2 px-6 pb-2 pt-5">
          <input type="hidden" name="_id" value={note._id} />
          <input
            style={{ backgroundColor: note.color }}
            type="text"
            name="title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            className="font-bold text-neutral-600"
          ></input>
          <button
            onClick={() =>
              startTransition(() => favoriteNote(note._id, !note.favorited))
            }
          >
            {note.favorited ? <FavoritedIcon /> : <FavoriteIcon />}
          </button>
        </div>
        <div className="flex h-full flex-col justify-between px-6 py-5">
          <textarea
            style={{ backgroundColor: note.color }}
            name="description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            className="mb-4 h-full text-xs text-neutral-600"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                disabled
                className="rounded-full p-1 transition-all duration-150 "
              >
                <EditIcon />
              </button>
              <button
                onClick={(ev) => handleOpenTooltip(ev)}
                data-tooltip-id={`${note._id}`}
                className="rounded-full p-1.5 transition-all duration-150 "
              >
                {isPending ? <SpinnerLoader size={20} /> : <TintIcon />}
              </button>
              <Tooltip
                id={`${note._id}`}
                isOpen={isOpen}
                clickable={true}
                positionStrategy="absolute"
                offset={0}
                place="bottom-start"
                disableStyleInjection={true}
              >
                <EditColorToolip
                  id={note._id}
                  setBackToDefault={setBackToDefault}
                />
              </Tooltip>
            </div>
            <Submit />
          </div>
        </div>
      </form>
    </>
  );
}
