import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Disclosure } from "@headlessui/react";
import ChevronDownIcon from '@/icons/ChevronDown';
import ChevronUpIcon from '@/icons/ChevronUp';

const ProjectCard = () => {
  return (
    <Disclosure defaultOpen={true}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 text-left text-lg font-medium text-white bg-blue-700 rounded-t-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            {open ? (
              <ChevronUpIcon className="w-5 h-5 text-white mr-2" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-white mr-2" />
            )}
            <span>Disposition</span>
          </Disclosure.Button>
          <Disclosure.Panel>
            <Card className="p-4 border border-gray-200 rounded-md mt-4">
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  <div className="flex items-center">
                    <div className="bg-gray-300 p-2 rounded-md mr-4">
                      <p className="text-lg font-bold">JCN</p>
                      <p className="text-xl font-bold">1000015</p>
                    </div>
                  </div>
                  <div>
                    <p>
                      <strong>JCN Status:</strong> M
                    </p>
                    <p>
                      <strong>SA:</strong> CSA
                    </p>
                    <p>
                      <strong>CIP:</strong> S04.02-03
                    </p>
                    <p>
                      <strong>Fac Type:</strong> ARSR
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Location ID:</strong> 1000015
                    </p>
                    <p>
                      <strong>Location:</strong> QSA
                    </p>
                    <p>
                      <strong>State:</strong> AR
                    </p>
                    <p>
                      <strong>County:</strong> YELL
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Program Manager:</strong> DANG, TOAN
                    </p>
                    <p>
                      <strong>PPM:</strong> BUSH, DAN
                    </p>
                    <p>
                      <strong>Scheduler:</strong> GARDINER, PHILIP CTR
                    </p>
                    <p>
                      <strong>Project Coordinator:</strong> HERRICK, DAGMAR
                    </p>
                    <p>
                      <strong>Schedule Data Date:</strong> 3/1/2024
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Primary Execution Lead:</strong>
                    </p>
                    <p>
                      <strong>Project Implementer Organization:</strong>{" "}
                      AJW-2C18
                    </p>
                    <p>
                      <strong>Primary Execution Manager Organization:</strong>
                    </p>
                    <p>
                      <strong>Primary Project Analyst:</strong> GENTZLER, WENDE
                    </p>
                    <p>
                      <strong>Tech Ops District Office:</strong> ALBUQUERQUE
                      DISTRICT OFFICE
                    </p>
                  </div>
                </div>
                <h1 className="text-xl font-bold">
                  WR# AWA-3386 1000015 Repair Resurface Access Road, QSA ARSR
                  (linked w/ 1004520) - Site Assessment only
                </h1>
              </CardContent>
            </Card>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default ProjectCard;
