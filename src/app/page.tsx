"use client";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table/Table";
import Sidebar from "@/components/SideBar";
import { useState } from "react";
import SidebarOpen from "@/components/SideBar/sideBar";
import ProjectCard from "@/components/ProjectCard";
import ProjectInformationForm from "@/components/ProjectInformationForm";
import {  useSelector } from "react-redux";
import { RootState } from "@/store/store";
  
export default function Home() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const {sideBarValue}  = useSelector((state: RootState) => state.sideBar);
  return (
    <>
      <Navbar />
      <div className="mt-36 flex">
        <SidebarOpen openSideBar={openSideBar} />
        <div className="flex-grow flex flex-col">
          <Table setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
          {openSideBar && <ProjectCard />}
          {sideBarValue === "Origination" && <ProjectInformationForm />}
        </div>
      </div>
    </>
  );
}
