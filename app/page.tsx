import { getNotes } from "./lib/actions";
import { NoteType } from "./lib/definitions";
import Header from "./ui/header/header";
import CreateNoteTaskBox from "./ui/taskBox/createTaskBox";
import TaskBox from "./ui/taskBox/taskBox";

export default async function Home() {
  const notes = await getNotes();
  const nonFavoriteNotes = notes.filter((note : NoteType) => note.favorited === false)
  const favoriteNotes = notes.filter((note : NoteType) => note.favorited === true)
  return (
    <main className="flex min-h-[100vh] flex-col bg-gray-100">
      <Header />
      <div className="mt-10 flex justify-center sm:px-12">
        <CreateNoteTaskBox />
      </div>
      <div className="mt-10 grid gap-10 mb-20 sm:mx-12 sm:grid-cols-1 md:grid-cols-2 lg:mx-24 lg:grid-cols-3">
      {favoriteNotes.map((note: NoteType) => {
          return <TaskBox key={note._id} note={note} />;
        })}
        {nonFavoriteNotes.map((note: NoteType) => {
          return <TaskBox key={note._id} note={note} />;
        })}
      </div>
    </main>
  );
}
