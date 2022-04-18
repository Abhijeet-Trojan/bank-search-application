import React, { useMemo } from 'react';
import { COLUMNS } from './columns';
import { useTable } from 'react-table';
import Data from './Data.json';
import '../index.css';

export const BasicTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => Data, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    const tableHead = {
        border: "1px solid #ddd",
        paddingTop: "12px",
        paddingBottom: "12px",
        textAlign: "center",
        backgroundColor: "#04AA6D",
        color: "white"
    };

    const tableTh = {
        paddingTop: "12px",
        paddingBottom: "12px",
        textAlign: "center",
        backgroundColor: "#04AA6D",
        color: "white"
      }

    const tableTd = {
        border: "1px solid black",
        padding: "8px",
        borderWidth: "1px"
      }

  return (
    <table {...getTableProps()}>
        <thead style={tableHead}>
            {
                headerGroups.map((headerGroups) => (
                    <tr {...headerGroups.getHeaderGroupProps()}>
                        {
                            headerGroups.headers.map( column => (
                                <th style={tableTh} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                    </tr>
                ))}
        </thead>
        <tbody {...getTableBodyProps()}>
           {
               rows.map(row => {
                   prepareRow(row)
                   return(
                       <tr {...row.getRowProps()}>
                           {
                               row.cells.map( cell => {
                                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                               })
                           }
                       </tr>
                   )
               })
           }
        </tbody>
    </table>
  )
}
