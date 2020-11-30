import React from 'react'
import {sortTable,getTableHeads,setEventClickOnTableHeads } from '../functions/sort-table';
import {useTable,useSortBy} from 'react-table'
// let fontFamily= "Open Sans Hebrew";

export const EpidemicSpread = () => {
    const data = React.useMemo(
        () => [
            {
                col1: 'כפר סבא',
                col2: '77',
                col3: '35',
                col4: '4',
                col5: '605',
                col6: '6',
    
              },
              {
                col1: 'טירה',
                col2: '772',
                col3: '356',
                col4: '7',
                col5: '605',
                col6: '62',
    
              },
              {
                col1: 'רעננה',
                col2: '774',
                col3: '37',
                col4: '44',
                col5: '65',
                col6: '68',
    
              },
              {
                col1: 'אילת',
                col2: '334',
                col3: '99',
                col4: '66',
                col5: '44',
                col6: '11',
    
              },
              {
                col1: 'בת ים',
                col2: '111',
                col3: '66',
                col4: '99',
                col5: '44',
                col6: '888',
    
              },
              {
                col1: 'תל אביב',
                col2: '734',
                col3: '637',
                col4: '414',
                col5: '635',
                col6: '678',
    
              },
              {
                col1: 'תל סתיו',
                col2: '222',
                col3: '111',
                col4: '222',
                col5: '66',
                col6: '4',
    
              },

              {
                col1: 'תל חורף',
                col2: '444',
                col3: '2',
                col4: '7',
                col5: '888',
                col6: '99',
    
              },

              {
                col1: 'תל קיץ',
                col2: '56',
                col3: '74',
                col4: '66',
                col5: '88',
                col6: '99',
    
              },

        ],
        []
      ) 
      const columns = React.useMemo(
        () => [
          {
            Header: 'יישוב',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'מאומתים',
            accessor: 'col2',
          },
          {
            Header: 'חולים פעילים',
            accessor: 'col3',
          },
          {
            Header: 'חולים חדשים ב-7 הימים האחרונים',
            accessor: 'col4',
          },
          {
            Header: 'בדיקות ב-7 הימים האחרונים',
            accessor: 'col5',
          },
          {
            Header: 'חולים פעילים ל- 10,000 נפש',
            accessor: 'col6',
          },
        ],
        []
      )
     

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable(
        {
          columns,
          data,
        },
        useSortBy
      )
    
    React.useEffect(()=>{ 
        let sicksDistributionContainer = document.querySelector('#sicksDistributionChart')

        // sicksDistributionChart
        let lastChart= sicksDistributionContainer.getBoundingClientRect();
 
        let epidemicSpreadContainer = document.querySelector('.table-container.epidemic-spread')
        console.log('epidemicSpreadContainer')
        console.log(epidemicSpreadContainer)

        epidemicSpreadContainer.style.height=lastChart.height+'px'
///////////////
// let table= document.querySelector('.table-container .epidemic-spread-table')
// let tableHeads = getTableHeads(table)
// setEventClickOnTableHeads(tableHeads,sortTable, table)


    })
    return (
        <div class="container epidemic-spread-container">
        <div class="upper-container">
        <span class="chart-title sub-title">אזורי התפשטות  
        </span>
        </div>
        <div class="table-container epidemic-spread">
 
        <table class="epidemic-spread-table" {...getTableProps()}>
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render('Header')}
                          {/* Add a sort direction indicator */}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? ' 🔽'
                                : ' 🔼'
                              : ''}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map(
                    (row, i) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map(cell => {
                             return (
                              <td {...cell.getCellProps()}>{cell.render('Cell')} </td>
                            )
                          })}
                        </tr>
                      )}
                  )}
                </tbody>
              </table>
              
        </div>
        </div>
    )
}
