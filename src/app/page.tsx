"use client";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table/Table";
import Sidebar from "@/components/SideBar";
import { useState } from "react";
import SidebarOpen from "@/components/SideBar/sideBar";
import ProjectCard from "@/components/ProjectCard";
import ProjectInformationForm from "@/components/ProjectInformationForm";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ButtonGroup from "@/components/ModifyView";
import ProjectCharter from "@/components/ProjectCharter";
import { ButtonGroupDisplay } from "@/utils";

type ButtonGroupType = {
  type: string;
  buttonDisplay: string[];
};

type ButtonGroupDisplayType = {
  origination: ButtonGroupType;
  projectCharter: ButtonGroupType;
};

export default function Home() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const { sideBarValue } = useSelector((state: RootState) => state.sideBar);
  const [isEditable, setIsEditable] = useState(false);
  const [isOtherSideBarContentVisible, setIsOtherSideBarContentVisible] =
    useState<boolean>(false);

  return (
    <>
      <Navbar />
      <div className="mt-12 flex">
        <SidebarOpen
          openSideBar={openSideBar}
          isOtherSideBarContentVisible={isOtherSideBarContentVisible}
        />
        <div className="flex-grow flex flex-col">
          <Table
            setOpenSideBar={setOpenSideBar}
            openSideBar={openSideBar}
            setIsOtherSideBarContentVisible={setIsOtherSideBarContentVisible}
          />

          {openSideBar && <ProjectCard />}
          {ButtonGroupDisplay[sideBarValue as keyof ButtonGroupDisplayType] && (
            <ButtonGroup
              setIsEditable={setIsEditable}
              isEditable={isEditable}
              buttonDisplay={
                ButtonGroupDisplay[sideBarValue as keyof ButtonGroupDisplayType]
                  .buttonDisplay
              }
            />
          )}
          {sideBarValue === "origination" && (
            <ProjectInformationForm isEditable={isEditable} />
          )}
          {sideBarValue === "projectCharter" && <ProjectCharter />}
        </div>
      </div>
    </>
  );
}
