import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <main className="grid grid-cols-12 grid-rows-6 max-h-full grow dark:bg-slate-950">
      <nav className="col-span-2 row-span-full pl-2 pt-3 flex flex-col gap-6 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="signup">signup</NavLink>
      </nav>
      <section className="col-span-10 row-span-full">
        <Outlet />
      </section>
    </main>
  );
}

export default NavBar;
