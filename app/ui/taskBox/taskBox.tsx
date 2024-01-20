"use client";
import { NoteType } from "@/app/lib/definitions";
import EditIcon from "../icons/edit";
import FavoritedIcon from "../icons/favoritedIcon";
import TintIcon from "../icons/tint";
import DeleteIcon from "../icons/close";
import { deleteNote, favoriteNote } from "@/app/lib/actions";
import { useState, useTransition } from "react";
import FavoriteIcon from "../icons/favorite";
import TaskBoxForm from "./taskBoxForm";

interface Props {
  note: NoteType;
}

export default function TaskBox({ note }: Props) {
  // eslint-disable-next-line no-unused-vars
  const [isPending, startTransition] = useTransition();
  const [editNote, setEditNote] = useState<boolean>(false);

  const handleEditNote = (ev: any) => {
    ev.preventDefault();
    setEditNote(!editNote);
  };

  const handleSetBacktoDefault = () => {
    setEditNote(!editNote);
  };

  return (
    <>
      {editNote ? (
        <TaskBoxForm note={note} setBackToDefault={handleSetBacktoDefault} />
      ) : (
        <div style={{backgroundColor : note.color}} className={`aspect-[6.5/7.3] flex-col rounded-3xl bg-white ${note.favorited && "shadow-lg"} `}>
          <div className={`flex justify-between border-b-2 ${note.color ? "border-white" : ""} px-6 pb-2 pt-5`}>
            <h1 className="font-bold text-neutral-600">{note.title}</h1>
            <button
              onClick={() =>
                startTransition(() => favoriteNote(note._id, !note.favorited))
              }
            >
              {note.favorited ? <FavoritedIcon /> : <FavoriteIcon />}
            </button>
          </div>
          <div className="flex h-full flex-col justify-between px-6 py-5">
            <p className="mb-4 overflow-auto whitespace-pre-line	text-xs text-neutral-600">
              {note.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={(ev) => handleEditNote(ev)}
                  className="rounded-full p-1 transition-all duration-150 hover:bg-orange-400/50"
                >
                  <EditIcon />
                </button>
                <button className="rounded-full p-1.5 transition-all duration-150 hover:bg-orange-400/50">
                  <TintIcon />
                </button>
              </div>
              <button
                onClick={() => startTransition(() => deleteNote(note._id))}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
