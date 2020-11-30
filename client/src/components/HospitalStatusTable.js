import React from 'react'
import {sortTable,getTableHeads,setEventClickOnTableHeads } from '../functions/sort-table';
import {useTable,useSortBy} from 'react-table'

export const HospitalStatusTable = () => {

    const data = React.useMemo(
        () => [
            {
                col1: 'זיו צפת',
                col2: `${29}`,
                col3: '35',
                col4: '4',
                
    
              },
              {
                col1: 'מאיר',
                col2: `${33}`,
                col3: `${77}`,
                col4: '7',
                col5: '605',
                col6: '62',
    
              },
              {
                col1: 'איכילוב',
                col2: `${44}`,
                col3: '37',
                col4: '44',
                col5: '65',
                col6: '68',
    
              },
              {
                col1: 'שפירא',
                col2: `${66}`,
                col3: '99',
                col4: '66',
                col5: '44',
                col6: '11',
    
              },
              {
                col1: 'ברזילי',
                col2: `${102}`,
                col3: `${11}`,
                col4: '99',
                col5: '44',
                col6: '888',
    
              },
              {
                col1: 'נהריה',
                col2: `${106}`,
                col3: `${34}`,
                col4: '414',
                col5: '635',
                col6: '678',
    
              },
              {
                col1: 'אסותא',
                col2: `${3}`,
                col3: `${55}`,
                col4: '222',
                col5: '66',
                col6: '4',
    
              },

              {
                col1: 'שערי צדק',
                col2: `${77}`,
                col3: '2',
                col4: '7',
             
    
              },

              {
                col1: 'אל מקסאד',
                col2: `${11}`,
                col3: '74',
                col4: '66',
                 
    
              },

        ],
        []
      ) 
      const columns = React.useMemo(
        () => [
          {
            Header: 'בית חולים',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: '% תפוסה כללי',
            accessor: 'col2',
          },
          {
            Header: '% תפוסת קורונה',
            accessor: 'col3',
          },
          {
            Header: 'צוות בבידוד',
            accessor: 'col4',
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
        console.log('window.innerWidth')
        console.log(window.innerWidth)

        let hospitalStatusContainer = document.querySelector('.table-container.hospital-status')

        if(window.innerWidth>1000) {
            let staffChart = document.querySelector('#staff-chart')

            // sicksDistributionChart
            let lastChart= staffChart.getBoundingClientRect();
            hospitalStatusContainer.style.height=lastChart.height+'px'
        }else{
            hospitalStatusContainer.style.height='auto'

        }
     
///////////////
// let table= document.querySelector('.table-container .hospital-status-table')
// let tableHeads = getTableHeads(table)
// setEventClickOnTableHeads(tableHeads,sortTable, table)


    })
 
    return (
        <div class="container hospital-status-container">
        <div class="upper-container">
        <span class="chart-title sub-title">סטטוס בתי החולים  
        </span>
        </div>
        <div class="table-container hospital-status">
       
        <table class="hospital-status-table" {...getTableProps()}>
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
                    console.log(cell)
                    console.log('cell')
                    console.log(cell.value)

                    let addedElem;
                    let addedPercent;
let classes=""
                    if(cell.column.Header=='% תפוסה כללי' || cell.column.Header=='% תפוסת קורונה'){
                        console.log('addedElem=תפוסה כללי')
                        console.log('cell.value')
                        console.log(cell.value)
                        // addedPercent='%'
                        addedPercent=true
                        classes="crowded-percent" 
                        if(cell.value>100){
                            classes+=" over-crowded"
                        }
                        addedElem=(
                            <span class={classes} style={{width: `${cell.value}px`,}}></span>
//  <canvas  width="50" height="50" style={{position: 'absolute', left: '0px', top: '0px', width: '50px', height: '50px', 'user-select': 'none', '-webkit-tap-highlight-color': 'rgba(60, 70, 80, 0.7)', padding: '0px', margin: '0px', 'border-width': '0px',}}></canvas>
                        )
                    }else{
                         
                        console.log('addedElem=null')
                        addedElem=null
                        addedPercent=null
                    }

                    return (
                      <td {...cell.getCellProps()}>
                 
                    {cell.render('Cell') }   
                    { addedPercent?"%":""}
                      {addedElem}
                    </td>
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
