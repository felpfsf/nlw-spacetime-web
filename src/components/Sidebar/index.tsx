import { cookies } from "next/headers";
import Profile from "../Profile";
import SignIn from "../SignIn";
import Hero from "../Hero";
import Copyright from "../Copyright";

const Sidebar = () => {
  const isAuthenticated = cookies().has("spacetimeToken");

  return (
    <aside className="relative flex flex-col overflow-hidden border-r border-white/10  bg-[url(../assets/stars.svg)] bg-cover  px-[120px] py-16">
      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-70 blur-full" />
      <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

      <div className="flex flex-1 flex-col items-start justify-between">
        {isAuthenticated ? <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </div>
    </aside>
  );
};

export default Sidebar;
