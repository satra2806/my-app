import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { useDispatch } from 'react-redux';

const sidebarData = [
  {
    title: 'Collections',
    color: 'yellow',
    items: [
      { label: 'List', value: 'list', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'JCNSearch', value: 'jcnSearch', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Actions', value: 'actions', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Reports', value: 'reports', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
    ],
  },
  {
    title: 'Project Details',
    color: 'yellow',
    items: [
      { label: 'Progress', value: 'progress', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Actions', value: 'projectActions', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Origination', value: 'origination', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Schedule', value: 'schedule', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Project Charter', value: 'projectCharter', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Project Team', value: 'projectTeam', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Cost Estimate', value: 'costEstimate', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Funding Requests', value: 'fundingRequests', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Asset Tasks', value: 'assetTasks', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Work Authorization', value: 'workAuthorization', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Baseline Scope', value: 'baselineScope', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Project Risk Plan', value: 'projectRiskPlan', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Project Information', value: 'projectInformation', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Documents', value: 'documents', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Project Status', value: 'projectStatus', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'JAI/CAI', value: 'jaiCai', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'WCN', value: 'wcn', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
    ],
  },
  {
    title: 'Other Information',
    color: 'blue',
    items: [
      { label: 'Financials', value: 'financials', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Resources', value: 'resources', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'Metrics', value: 'metrics', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'History', value: 'history', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
      { label: 'OPPM', value: 'oppm', bgColor: 'bg-gray-200', textColor: 'text-blue-600' },
    ],
  },
];


interface ISidebarProps {
  openSideBar: boolean;
  isOtherSideBarContentVisible: boolean;
}

const Sidebar: React.FC<ISidebarProps> = ({ openSideBar, isOtherSideBarContentVisible }) => {
  const dispatch = useDispatch();
  const [isProjectDetailsVisible, setProjectDetailsVisible] = useState(false);
  const [isOtherInfoVisible, setOtherInfoVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleItemClick = (label: string) => {
    setSelectedLabel(label);
    dispatch({ type: 'sideBar/SET_SIDE_BAR_VALUE', payload: label });
    if (!isProjectDetailsVisible) setProjectDetailsVisible(true);
    if (!isOtherInfoVisible) setOtherInfoVisible(true);
  };

  return (
    <div className="w-64 bg-white shadow-md">
      {sidebarData.map((section, sectionIdx) => {
        if (
          (section.title === 'Project Details' && !isOtherSideBarContentVisible) ||
          (section.title === 'Other Information' && !isOtherSideBarContentVisible)
        ) {
          return null;
        }

        return (
          <Disclosure key={sectionIdx} defaultOpen={sectionIdx === 1}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-${section.color}-600 bg-${section.color}-200 rounded-lg hover:bg-${section.color}-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ${
                    sectionIdx !== 0 ? 'mt-80' : 'mt-2'
                  }`}
                >
                  <span>{section.title}</span>
                  <span>{open ? '-' : '+'}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className={`cursor-pointer px-4 py-2 ${selectedLabel === item.value ? 'bg-blue-600 text-white' : item.bgColor} ${selectedLabel === item.label ? '' : item.textColor} rounded-lg`}
                        onClick={() => handleItemClick(item.value)}
                      >
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

export default Sidebar;
