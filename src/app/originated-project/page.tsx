"use client";
import ProjectInformationForm from "@/components/ProjectInformationForm";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProjectInformationForm isEditable={true} isNewProject={true}  />
    </>
  );
}