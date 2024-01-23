import Logo from "../logo/logo";
import Search from "../search/search";
import ColorFilter from "../searchByColor/colorFilter";

export default function Header() {
  return (
    <header className="fixed h-14 w-full gap-4 bg-white px-6 py-3 shadow-md">
      <Logo />
      <div className="absolute left-20 w-full items-center justify-between sm:top-4 lg:top-3">
        <div className="flex items-center gap-4 border-zinc-300 ">
          <h2 className="text-slate-600 sm:text-xs lg:text-sm">CoreNotes</h2>
          <Search />
          <ColorFilter />
        </div>
      </div>
    </header>
  );
}
