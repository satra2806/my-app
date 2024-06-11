import React from 'react';
import { Disclosure } from '@headlessui/react';

const sidebarData = [
  {
    title: 'Project Details',
    color: 'yellow',
    items: [
      { label: 'Progress', bgColor: 'blue-800', textColor: 'white' },
      { label: 'Actions', bgColor: 'blue-600', textColor: 'white' },
      { label: 'Origination', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Schedule', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Project Charter', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Project Team', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Cost Estimate', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Funding Requests', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Asset Tasks', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Work Authorization', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Baseline Scope', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Project Risk Plan', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Project Information', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Documents', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Project Status', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'JAI/CAI', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'WCN', bgColor: 'gray-200', textColor: 'blue-600' },
    ],
  },
  {
    title: 'Other Information',
    color: 'blue',
    items: [
      { label: 'Financials', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Resources', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'Metrics', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'History', bgColor: 'gray-200', textColor: 'blue-600' },
      { label: 'OPPM', bgColor: 'gray-200', textColor: 'blue-600' },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      {sidebarData.map((section, sectionIdx) => (
        <Disclosure key={sectionIdx} defaultOpen={sectionIdx === 0}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-${section.color}-600 bg-${section.color}-200 rounded-lg hover:bg-${section.color}-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-2`}
              >
                <span>{section.title}</span>
                <span>{open ? '-' : '+'}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className={`px-4 py-2 bg-${item.bgColor} text-${item.textColor} rounded-lg`}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default Sidebar;
