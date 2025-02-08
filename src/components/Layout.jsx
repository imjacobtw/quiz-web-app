import { Outlet } from "react-router";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-center items-center bg-navy-blue relative font-medium text-white">
      <Outlet />
      <Footer />
    </div>
  )
}
