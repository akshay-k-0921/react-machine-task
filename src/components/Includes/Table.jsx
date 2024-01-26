import React, { useEffect, useState } from 'react'

// importing base url of api with axios
import api from '../AxiosConfig'
import styled from 'styled-components';

function Table() {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        api.get('table/').then(response =>{
            console.log(response.data);
            setTableData(response.data)
            }).catch(error => {
                console.error('Error fetching data:', error);
            });
      },[])

  return (
    <MainContainer>
        <TableContainer>
            <TableHead>
                <TableHeadings>Id</TableHeadings>
                <TableHeadings>Name</TableHeadings>
                <TableHeadings>Quantity</TableHeadings>
                <TableHeadings>Price</TableHeadings>
            </TableHead>
            <TableBody>
                {
                    tableData.map((data) => (
                        <TableRow>
                            <TableData>{data.id}</TableData>
                            <TableData>{data.name}</TableData>
                            <TableData>{data.quantity}</TableData>
                            <TableData>{data.price}</TableData>
                        </TableRow>
                    ))
                }
            </TableBody>
        </TableContainer>
    </MainContainer>
  )
}

export default Table

const MainContainer = styled.div`
`

const TableContainer = styled.table`
    border: 1px solid #ddd;
    background: #fff;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
`

const TableHead = styled.thead``

const TableHeadings = styled.th`
    text-align: center;
    padding: 10px 15px;
`

const TableBody = styled.tbody``

const TableRow = styled.tr`
    background-color: #fafafa;
    text-align: center;
    &:nth-child(even) {
    background-color: #f2f2f2;
}
`

const TableData = styled.td`
    padding: 10px 15px;

`

