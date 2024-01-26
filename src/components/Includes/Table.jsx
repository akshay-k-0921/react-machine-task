import React, { useEffect, useState } from 'react'

// importing base url of api with axios
import api from '../AxiosConfig'
import styled from 'styled-components';

// images 
import leftArrow from '../../Assets/left-rrow.svg'
import rightArrow from '../../Assets/right-arrow.svg'

function Table() {

    const [tableData, setTableData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * 5;
    const indexOfFirstItem = indexOfLastItem - 5;

    const currentRows = tableData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    const totalPages = Math.ceil(tableData.length / 5);

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
        {/* Pagination controls */}
        <div className='pagination'>
            <button className='button' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <img src={leftArrow} alt="Previous" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
            <button className='pageNumber button' key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
            </button>
            ))}

            <button
            className='button'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            >
            <img src={rightArrow} alt="Next" />
            </button>
        </div>
    </MainContainer>
  )
}

export default Table

const MainContainer = styled.div`

    .pagination{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .button{
        padding: 5px 8px;
        background: #fff;
        border: none;
        border-radius: 4px;
    }
    .pageNumber{
        height: 25px;
    }
    img{
        display: block;
        width: 10px;
        height: 15px;
    }

`

const TableContainer = styled.table`
    border: 1px solid #ddd;
    background: #fff;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 20px;
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

