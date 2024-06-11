"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table/Table";
import Sidebar from "@/components/SideBar";
import { useState } from "react";
import SidebarOpen from "@/components/SideBar/sideBar";

export default function Home() {
  const [openSideBar , setOpenSideBar] = useState(false);
  return (
    <>
      <Navbar />
      <div className="mt-36 flex">
        {openSideBar ? <SidebarOpen />  : <Sidebar />}
        <div className="flex-grow flex justify-center">
          <Table setOpenSideBar={setOpenSideBar}  openSideBar={openSideBar}/>
        </div>
      </div>
    </>
  );
}