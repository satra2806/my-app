import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Disclosure } from "@headlessui/react";
import ChevronDownIcon from "@/icons/ChevronDown";
import ChevronUpIcon from "@/icons/ChevronUp";

interface IProjectInformationFormProps {
  isEditable?: boolean;
}

const ProjectInformationForm = (
  { isEditable }: IProjectInformationFormProps
) => {
  const [processType, setProcessType] = useState("F&E");
  const [projectName, setProjectName] = useState(
    "WR# AWA-3386 1000015 Repair Resurface Access Road, QSA ARSR (linked)"
  );
  const [description, setDescription] = useState(
    "1000015 Repair Resurface Access Road, QSA ARSR"
  );
  const [problemStatement, setProblemStatement] = useState(
    "The existing entrance road consists of destabilized asphalt. The road has several potholes and loose rock due to the deterioration of the binding agent of the asphalt. The road is approximately 400 yards long by 15 feet wide."
  );
  const [proposedSolution, setProposedSolution] = useState(
    "Resurface the existing asphalt road."
  );
  const [impacts, setImpacts] = useState("");
  const [assumptions, setAssumptions] = useState("");
  const [constraints, setConstraints] = useState("");
  const [benefits, setBenefits] = useState("");
  const [cip, setCip] = useState(
    "S04.02-03 Long Range Radar (LRR) Infrastructure Sustainment"
  );
  const [projectCode, setProjectCode] = useState("");
  const [originatorRom, setOriginatorRom] = useState("$30,000.00");

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 text-left text-lg font-medium text-white bg-blue-700 rounded-t-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            {open ? (
              <ChevronUpIcon className="w-5 h-5 text-white mr-2" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-white mr-2" />
            )}
            <span>Project Information</span>
          </Disclosure.Button>
          <Disclosure.Panel>
            <Card className="max-w-3xl mx-auto my-8 p-4">
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Process Type
                    </label>
                    <Select>
                      <SelectTrigger>
                        <Input
                          value={processType}
                          onChange={(e) => setProcessType(e.target.value)}
                          readOnly={!isEditable}
                          placeholder="F&E"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="F&E">F&E</SelectItem>
                        {/* Add more options as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Project Name
                    </label>
                    <Input
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Description
                    </label>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Problem Statement
                    </label>
                    <Textarea
                      value={problemStatement}
                      onChange={(e) => setProblemStatement(e.target.value)}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Proposed Solution
                    </label>
                    <Textarea
                      value={proposedSolution}
                      onChange={(e) => setProposedSolution(e.target.value)}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium">Impacts</label>
                    <Textarea
                      value={impacts}
                      onChange={(e) => setImpacts(e.target.value)}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium">
                      Assumptions
                    </label>
                    <Textarea
                      value={assumptions}
                      onChange={(e) => setAssumptions(e.target.value)}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium">
                      Constraints
                    </label>
                    <Textarea
                      value={constraints}
                      onChange={(e) => setConstraints(e.target.value)}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium">
                      Benefits
                    </label>
                    <Textarea
                      value={benefits}
                      onChange={(e) => setBenefits(e.target.value)}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">CIP</label>
                    <Select>
                      <SelectTrigger>
                        <Input
                          value={cip}
                          onChange={(e) => setCip(e.target.value)}
                          readOnly={!isEditable}
                          placeholder="S04.02-03 Long Range Radar (LRR) Infrastructure Sustainment"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="S04.02-03 Long Range Radar (LRR) Infrastructure Sustainment">
                          S04.02-03 Long Range Radar (LRR) Infrastructure
                          Sustainment
                        </SelectItem>
                        {/* Add more options as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Project Code
                    </label>
                    <Input
                      value={projectCode}
                      onChange={(e) => setProjectCode(e.target.value)}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Originator ROM
                    </label>
                    <Input
                      value={originatorRom}
                      onChange={(e) => setOriginatorRom(e.target.value)}
                      readOnly={!isEditable}
                    />
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <Button>Preview Origination PDF</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ProjectInformationForm;
