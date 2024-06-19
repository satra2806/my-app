import React from 'react';
import { Disclosure } from '@headlessui/react';
import {  useDispatch } from 'react-redux';

const sidebarData = [
  {
    title: 'Collections',
    color: 'yellow',
    items: [
      { label: 'List', bgColor: 'bg-blue-600', textColor: 'text-white' },
      { label: 'JCNSearch', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Actions', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Reports', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
    ],
  },
  {
    title: 'Project Details',
    color: 'yellow',
    items: [
      { label: 'Progress', bgColor: 'bg-blue-800', textColor: 'text-white' },
      { label: 'Actions', bgColor: 'bg-blue-600', textColor: 'text-white' },
      { label: 'Origination', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Schedule', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Project Charter', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Project Team', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Cost Estimate', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Funding Requests', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Asset Tasks', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Work Authorization', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Baseline Scope', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Project Risk Plan', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Project Information', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Documents', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Project Status', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'JAI/CAI', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'WCN', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
    ],
  },
  {
    title: 'Other Information',
    color: 'blue',
    items: [
      { label: 'Financials', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Resources', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Metrics', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'History', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'OPPM', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
    ],
  },
];

interface ISidebarProps {
  openSideBar: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ openSideBar }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-64 bg-white shadow-md">
      {sidebarData.map((section, sectionIdx) => (
        <Disclosure key={sectionIdx} defaultOpen={  sectionIdx === 1}>
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
                      className={`px-4 py-2 ${item.bgColor} ${item.textColor} rounded-lg`}
                      onClick={() => { dispatch({ type: 'sideBar/SET_SIDE_BAR_VALUE', payload: item.label })  , console.log(item.label ,"satra")}}
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
