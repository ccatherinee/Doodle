import React from "react";
// makes use of react packages like useTable or useSortBy to give our table component functionality like pagination and sorting 
import { useTable, usePagination, useSortBy } from "react-table";

// table takes columns and data to populate itself with 
function Table({ columns, data }) {
    // functions and variables we get back from useTable 
    const { 
        // function which gets table container properties  
        getTableProps,
        // function which gets table body properties 
        getTableBodyProps, 
        // variable holding header names 
        headerGroups, 
        // function which prepares the row properties 
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        setPageSize,
        state,
    } = useTable({
        columns,
        data,
    }, useSortBy, usePagination);

    // returns component containing table 
    // table is structured as 
    // <thead> (table head): where each element of the top row corresponds to one column whose data is contained in headerGroup 
    // <tbody> (table body): creates a row in the table per row of data 

    // returns pagination buttons and functionality 
  return (
      <>
        <table {...getTableProps()} border="1">
        <thead>
            {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                        {column.isSorted 
                            ? column.isSortedDesc
                                ? ' ▼'
                                : ' ▲'
                            : ''}
                    </span>
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
            prepareRow(row);
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
                </tr>
            );
            })}
        </tbody>
        </table>
        <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
        </button>{' '}
        <span>
        Page{' '}
        <strong>
            {state.pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
        </span>
        <select
        value={state.pageSize}
        onChange={e => {
            setPageSize(Number(e.target.value))
        }}
        >
        {[5, 10, 20].map(pageSize => (
            <option key={pageSize} value={pageSize}>
            Show {pageSize}
            </option>
        ))}
        </select>
    </div>
  </>
  );
}

export default Table;