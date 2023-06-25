import { NavLink, Outlet } from "react-router-dom";
import { PiDevices } from "react-icons/pi";
function HomePage() {
  return (
    <main className="grid grid-cols-12 grid-rows-6 max-h-full grow dark:bg-slate-950">
      <div className="dark:text-purple-400 col-span-2 row-span-full pl-2 pt-3 flex flex-col gap-6 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="signup">signup</NavLink>
        <NavLink to="devices">
          <PiDevices />
        </NavLink>
      </div>
      <section className="col-span-10 row-span-full">
        <Outlet />
      </section>
    </main>
  );
}

export default HomePage;
