'use  client'
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useState } from 'react';


interface ITableProps {
  setOpenSideBar : (openSideBar: boolean) => void;
  openSideBar : boolean;
}
const Table = ({setOpenSideBar , openSideBar} : ITableProps) => {
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "make" as const, headerName: "Make" },
    { field: "model" as const, headerName: "Model" },
    { field: "price" as const, headerName: "Price" },
    {
      field: "electric" as const,
      headerName: "Electric",
      cellRenderer: (params:any) => params.value.toString(),
    },
  ]);
  return (
    <div className="ag-theme-quartz" style={{ height: 400, width: 600 }}>
      <AgGridReact columnDefs={colDefs} rowData={rowData} onCellClicked={()=>setOpenSideBar(!openSideBar)} />
    </div>
  );
};

export default Table;