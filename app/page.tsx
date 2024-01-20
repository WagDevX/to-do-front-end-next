import { Suspense } from "react";
import { getNotes } from "./lib/actions";
import HomeWrapper from "./ui/notes/homeWrapper";
import CreateNoteTaskBox from "./ui/taskBox/createTaskBox";
import Header from "./ui/notes/header";
import Loading from "./ui/notes/loading";

export default  function Home() {
  return (
    <main className="flex min-h-[100vh] flex-col bg-gray-100">
      <Header />
      <div className="mt-10 flex justify-center sm:px-12">
        <CreateNoteTaskBox />
      </div>
      <Suspense fallback={<Loading />}>
      <HomeWrapper />
      </Suspense>
    </main>
  );
}
