import { Suspense } from "react";
import NotesWrapper from "./ui/wrapper/notesWrapper";
import CreateNoteTaskBox from "./ui/noteBox/createTaskBox";
import Header from "./ui/header/header";
import Loading from "./ui/wrapper/loading";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    color?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const color = searchParams?.color || "";
  const keyString = `search=${query}?color=${color}`;
  return (
    <main className="flex min-h-[100vh] flex-col bg-gray-100">
      <Header />
      <div className="mt-10 flex justify-center sm:px-12">
        <CreateNoteTaskBox />
      </div>
      <Suspense key={keyString} fallback={<Loading />}>
        <NotesWrapper query={query} color={color} />
      </Suspense>
    </main>
  );
}
