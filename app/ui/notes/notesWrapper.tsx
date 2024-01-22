import { NoteType } from "@/app/lib/definitions";
import TaskBox from "../taskBox/noteBox";
import { getFilteredNotes } from "@/app/lib/actions";

export default async function NotesWrapper({ query }: { query: string }) {
  const notes = await getFilteredNotes(query);
  const nonFavoriteNotes = notes.filter(
    (note: NoteType) => note.favorited === false
  );
  const favoriteNotes = notes.filter(
    (note: NoteType) => note.favorited === true
  );

  return (
    <>
      {" "}
      {notes.length === 0 && (
        <>
          <div className="mt-10 flex flex-col items-center gap-10 ">
            <h1 className="text-center text-xl font-bold text-zinc-300">
              Nenhum resultado encontrado
            </h1>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="250px"
                height="250px"
                viewBox="0 0 14 14"
                className="rounded-full bg-zinc-300 text-zinc-300"
                fill={`rgb(212 212 216 / var(--tw-text-opacity))`}
              >
                <g fill-rule="evenodd">
                  <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />

                  <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF" />

                  <path d="M6 3.5c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v4c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-4m0 6c0-.3.2-.5.5-.5h1c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5h-1c-.3 0-.5-.2-.5-.5v-1" />
                </g>
              </svg>
            </div>
          </div>
        </>
      )}
      {notes.length > 0 && (
        <>
          <h1 className="mt-10 pl-6 text-base text-zinc-700 sm:mx-12 lg:mx-24">
            Favoritas
          </h1>
          <div className="mt-2 grid h-full gap-10 sm:mx-12 sm:grid-cols-1 md:grid-cols-2 lg:mx-24 lg:grid-cols-3">
            {favoriteNotes.map((note: NoteType) => {
              return <TaskBox key={note._id} note={note} />;
            })}
          </div>
          <h1 className="mt-10 pl-6 text-base text-zinc-700 sm:mx-12 lg:mx-24">
            Outras
          </h1>
          <div className="mb-20 mt-2 grid gap-10 sm:mx-12 sm:grid-cols-1 md:grid-cols-2 lg:mx-24 lg:grid-cols-3">
            {nonFavoriteNotes.map((note: NoteType) => {
              return <TaskBox key={note._id} note={note} />;
            })}
          </div>
        </>
      )}
    </>
  );
}
