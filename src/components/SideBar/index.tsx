import React from 'react';
import { Disclosure } from '@headlessui/react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-yellow-600 bg-yellow-200 rounded-lg hover:bg-yellow-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>Collections</span>
              <span>{open ? "-" : "+"}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <ul className="space-y-2">
                <li className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  List
                </li>
                <li className="px-4 py-2 bg-gray-200 text-blue-600 rounded-lg">
                  JCNSearch
                </li>
                <li className="px-4 py-2 bg-gray-200 text-blue-600 rounded-lg">
                  Actions
                </li>
                <li className="px-4 py-2 bg-gray-200 text-blue-600 rounded-lg">
                  Reports
                </li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-yellow-600 bg-yellow-200 rounded-lg hover:bg-yellow-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-2">
              <span>Project Details</span>
              <span>{open ? '-' : '+'}</span>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              <ul className="space-y-2">
                <li className="px-4 py-2 bg-gray-200 text-blue-600 rounded-lg">Progress</li>
                <li className="px-4 py-2 bg-blue-800 text-white rounded-lg">Actions</li>
                <li className="px-4 py-2 bg-blue-600 text-white rounded-lg">Origination</li>
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Sidebar;