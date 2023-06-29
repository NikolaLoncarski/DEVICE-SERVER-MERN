import { NavLink, Outlet } from "react-router-dom";
import { PiDevices, PiHouseBold, PiPersonBold } from "react-icons/pi";
function HomePage() {
  return (
    <main className="grid grid-cols-12 grid-rows-6 max-h-full grow dark:bg-slate-950">
      <div className="dark:text-purple-400 col-span-2 row-span-full pl-2 pt-3 flex flex-col gap-6  ">
        <NavLink className="flex justify-center" to="signup">
          <button className="rounded-l-lg h-12 cursor-pointer  hover:scale-110 dark:text-purple-400 border-2 p-2 border-purple-400 ">
            Login/Signup
          </button>
        </NavLink>
        <NavLink className="flex justify-center" to="/">
          <PiHouseBold className=" hover:scale-110 h-12 w-12" />
        </NavLink>
        <NavLink className="flex justify-center" to="devices">
          <PiDevices className=" hover:scale-110 h-12 w-12 " />
        </NavLink>
      </div>
      <section className="col-span-10 row-span-full">
        <Outlet />
      </section>
    </main>
  );
}

export default HomePage;
