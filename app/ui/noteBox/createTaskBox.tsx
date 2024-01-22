"use client";
import { createNote } from "@/app/lib/actions";
import FavoriteIcon from "../icons/favorite";
import React, { useRef, useState } from "react";
import AddIcon from "../icons/add";
import { useFormStatus } from "react-dom";
import SpinnerLoader from "../loader/spinner-loader";
import FavoritedIcon from "../icons/favoritedIcon";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      about="Criar tarefa"
      type="submit"
      disabled={pending}
      className="flex gap-2 text-neutral-600"
    >
      {pending ? <SpinnerLoader size={20} /> : <AddIcon />}
    </button>
  );
}

export default function CreateNoteTaskBox() {
  // eslint-disable-next-line no-unused-vars
  const { pending } = useFormStatus();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const ref = useRef<HTMLFormElement>(null);

  const handleFavorite = (ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          await createNote(formData, isFavorite);
          ref.current?.reset();
        }}
        className="flex w-full flex-col border-zinc-300 bg-white shadow transition-all duration-100 sm:max-w-full sm:rounded-3xl md:aspect-[3.9/1.1] lg:aspect-[5.2/1.1] lg:max-w-[40vw] lg:rounded-sm"
      >
        <div className="flex justify-between border-b-2 px-6 pb-2 pt-5">
          <input
            placeholder="Título"
            name="title"
            className="mr-5 w-full truncate font-bold text-neutral-600 focus:outline-none"
          />
          <button
            className="flex items-center"
            onClick={(ev) => handleFavorite(ev)}
          >
            {isFavorite ? <FavoritedIcon /> : <FavoriteIcon />}
          </button>
        </div>
        <div className="px-4 pb-4 pt-3">
          <textarea
            placeholder="Criar nota..."
            name="description"
            className="w-full p-2 text-xs text-neutral-600"
          />
        </div>
        <div className="flex justify-end px-6 pb-6">
          <Submit />
        </div>
      </form>
    </>
  );
}
