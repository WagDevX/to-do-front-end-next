import { Suspense } from "react";
import NotesWrapper from "./ui/notes/notesWrapper";
import CreateNoteTaskBox from "./ui/taskBox/createTaskBox";
import Header from "./ui/notes/header";
import Loading from "./ui/notes/loading";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <main className="flex min-h-[100vh] flex-col bg-gray-100">
      <Header />
      <div className="mt-10 flex justify-center sm:px-12">
        <CreateNoteTaskBox />
      </div>
      <Suspense fallback={<Loading />}>
        <NotesWrapper query={query} />
      </Suspense>
    </main>
  );
}
