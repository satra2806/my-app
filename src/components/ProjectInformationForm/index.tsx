import React from "react";
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

const ProjectInformationForm = () => {
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
                        <Input readOnly placeholder="F&E" />
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
                      readOnly
                      value="WR# AWA-3386 1000015 Repair Resurface Access Road, QSA ARSR (linked)"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Description
                    </label>
                    <Textarea
                      readOnly
                      value="1000015 Repair Resurface Access Road, QSA ARSR"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Problem Statement
                    </label>
                    <Textarea
                      readOnly
                      value="The existing entrance road consists of destabilized asphalt. The road has several potholes and loose rock due to the deterioration of the binding agent of the asphalt. The road is approximately 400 yards long by 15 feet wide."
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Proposed Solution
                    </label>
                    <Textarea
                      readOnly
                      value="Resurface the existing asphalt road."
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium">Impacts</label>
                    <Textarea readOnly />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium">
                      Assumptions
                    </label>
                    <Textarea readOnly />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium">
                      Constraints
                    </label>
                    <Textarea readOnly />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium">
                      Benefits
                    </label>
                    <Textarea readOnly />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">CIP</label>
                    <Select>
                      <SelectTrigger>
                        <Input
                          readOnly
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
                    <Input readOnly />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium">
                      Originator ROM
                    </label>
                    <Input readOnly value="$30,000.00" />
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
