// components/Navbar.jsx
import Link from 'next/link';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@/components/ui/menubar'; // Adjust import path as needed
import './Navbar.css';

const menuData = [
  {
    label: 'Project Management',
    items: [
      { label: 'Projects', path: '/' },
      { label: 'Originated Project', path: '/originated-project' },
      { label: 'New Fac Type / Loc ID Request' },
      { label: 'Program Funding' },
      { label: 'Create JAI/CAI' },
      { label: 'Work Plan Change Notice (WCN)' },
    ],
  },
  {
    label: 'Reports',
    items: [
      {
        label: 'Project Reports',
        subItems: [
          { label: 'All PAs Report' },
        ],
      },
      {
        label: 'Financial Reports',
        subItems: [
          { label: 'Capitalization/Deobligation Report as of 10/04/2020' },
          { label: 'Delphi Project Number' },
          { label: 'Object Class Code Lookup' },
          { label: 'PRISM Report' },
          { label: 'Projects Financial Report' },
        ],
      },
      {
        label: 'Project Management Reports',
        subItems: [
          { label: 'Option 1' },
          { label: 'Option 2' },
        ],
      },
    ],
  },
  {
    label: 'Support & Training',
    items: [
      { label: 'CWP Memo' },
      {
        label: 'Training',
      },
      { label: 'System Administration',
         subItems : [
          {
            label: 'CWP Overview Course',
            subItems: [
              { label: 'Basic Navigation 1: Meet the Homepage' },
              { label: 'CWP Recorded Course Feedback form' },
              { label: 'Basic Navigation 2: Navigating Projects page' },
              { label: 'Basic Navigation 3: Collection List & View Basics' },
              { label: 'Origination - Project Originator role' },
              { label: 'Origination - Project Validator role' },
              { label: 'Origination - Project Approver role' },
              { label: 'Project Risk Plan' },
              { label: 'Project Team' },
              { label: 'Schedule' },
              { label: 'Baseline Scope - All roles' },
              { label: 'Funding Request' },
              { label: 'Work Authorization' },
            ],
          },
          { label: 'CWP On-Demand Courses' },
          { label: 'CWP Training and Familiarization KSN' },
          { label: 'Course Materials' },
          { label: 'Help' },
          { label: 'OPPM' },
          { label: 'OPPM KSN' },
          { label: 'Primavera P6 Course' },
          { label: 'RSMO' },
         ]
       },
      { label: 'User Support' },

    ],
  },
  {
    label: 'Additional Sites',
    items: [
      {
        label: 'Additional CWP Links',
        subItems: [
          { label: 'Citrix Workspace' },
          { label: 'Cost Estimating Tool' },
          { label: 'CWP KSN Site' },
          { label: 'CWP Tableau Reports' },
          { label: 'OPPM - DEV' },
          { label: 'Primavera P6 Client - DEV' },
          { label: 'Primavera P6 Team Member - DEV' },
          { label: 'Primavera P6 Web - DEV' },
        ],
      },
      { label: 'Related Sites' },
      { label: 'Service Area Guides' },
      { label: 'CWP Planned Downtime Calendar' },
      { label: 'Admin Tools' },
      { label: 'Development Tools' },
    ],
  },
];

const Navbar = () => {
  const renderMenuItems = (items:any) => {
    return items.map((item:any) => (
      item.subItems ? (
        <MenubarSub key={item.label}>
          <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
          <MenubarSubContent>
            {renderMenuItems(item.subItems)}
          </MenubarSubContent>
        </MenubarSub>
      ) : (
        <MenubarItem key={item.label}>
          {item.path ? (
            <Link href={item.path} legacyBehavior>
              <a>{item.label}</a>
            </Link>
          ) : (
            item.label
          )}
        </MenubarItem>
      )
    ));
  };

  return (
    <Menubar>
      {menuData.map((menu) => (
        <MenubarMenu key={menu.label}>
          <MenubarTrigger>{menu.label}</MenubarTrigger>
          <MenubarContent>
            {renderMenuItems(menu.items)}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default Navbar;
