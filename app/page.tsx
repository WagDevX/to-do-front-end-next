import { getNotes } from "./lib/actions";
import { NoteType } from "./lib/definitions";
import Logo from "./ui/logo/logo";
import HomeWrapper from "./ui/notes/homeWrapper";
import CreateNoteTaskBox from "./ui/taskBox/createTaskBox";

export default async function Home() {
  const notes = await getNotes();
  return (
    <main className="flex min-h-[100vh] flex-col bg-gray-100">
      <HomeWrapper notes={notes} />
    </main>
  );
}
