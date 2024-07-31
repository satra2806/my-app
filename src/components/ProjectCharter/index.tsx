import { Disclosure } from '@headlessui/react';
import { Textarea } from "@/components/ui/textarea";
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';

interface IprojectCharterProps {
    isEditable?: boolean;
}
function ProjectCharter({ isEditable }: IprojectCharterProps) {
  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Project Charter</h2>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full px-4 py-2 text-left bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
              {open ? <ChevronUpIcon className="" /> : <ChevronDownIcon className="" />}
            </Disclosure.Button>
            <Disclosure.Panel className="pt-4 pb-2">
              <div className="grid gap-4">
                <div>
                  <label className="block text-gray-700">Description</label>
                  <Textarea
                    className="w-full mt-2"
                    defaultValue="FAA Enterprise Network Services (FENS) Transition at FAA MEDIUM Site Environment."
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Problem Statement</label>
                  <Textarea
                    className="w-full mt-2"
                    defaultValue="The current/existing FTI telecommunications service contract is coming to an end..."
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Proposed Solution</label>
                  <Textarea
                    className="w-full mt-2"
                    defaultValue="Replace existing FTI telecommunications service with Next Generation telecommunications services..."
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Benefits</label>
                  <Textarea
                    className="w-full mt-2"
                    defaultValue="FENS will reduce costs in a competitive landscape by leveraging technology and marketplace innovation."
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Constraints</label>
                  <Textarea
                    className="w-full mt-2"
                    defaultValue="FAA funding and (FAA, Vendor) resources available to implement and transition all sites and services."
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Impacts</label>
                  <Textarea
                    className="w-full mt-2"
                    defaultValue="Additional resources are needed and there will be dual operating telecom costs until sites and services are fully transitioned from FTI to FENS."
                  />
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default ProjectCharter;
