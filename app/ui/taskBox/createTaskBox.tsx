"use client";
import { createNote } from "@/app/lib/actions";
import FavoriteIcon from "../icons/favorite";
import { useRef } from "react";
import AddIcon from "../icons/add";

export default function CreateNoteTaskBox() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();
          await createNote(formData);
        }}
        className="flex w-full flex-col border-zinc-300 bg-white shadow transition-all duration-100 sm:max-w-full sm:rounded-3xl md:aspect-[3.9/1.1] lg:aspect-[5.2/1.1] lg:max-w-[40vw] lg:rounded-sm"
      >
        <div className="flex justify-between border-b-2 px-6 pb-1 pt-5">
          <input
            placeholder="Título"
            name="title"
            className="mr-5 w-full truncate font-bold text-neutral-600 focus:outline-none"
          />
          <FavoriteIcon />
        </div>
        <div className="px-4 pb-4 pt-3">
          <textarea
            placeholder="Criar nota..."
            name="description"
            className="w-full p-2 text-xs text-neutral-600"
          />
        </div>
        <div className="flex justify-end px-6 pb-6">
          <button className="flex gap-2 text-neutral-600">
            <AddIcon />
          </button>
        </div>
      </form>
    </>
  );
}
