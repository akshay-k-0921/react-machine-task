import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Importing Components 
import Header from './Includes/Header'
import Graph from './Includes/Graph'
import PieChart from './Includes/PieChart'
import Table from './Includes/Table'

function DashBoard() {

  return (
    <MainContainer>
        <TopContainer>
            <Header />
        </TopContainer>
        <MiddleContainer>
            <GraphContainer>
                <Graph/>
            </GraphContainer>
            <PieChartContainer>
                <div>
                    <PieChart />
                </div>
            </PieChartContainer>
        </MiddleContainer>
        <BotttomContainer>
            <TableContainer>
                <Table />
            </TableContainer>
        </BotttomContainer>
    </MainContainer>
  )
}

export default DashBoard

const MainContainer = styled.div`
    width: 85%;
    background: #b2cada;
    padding: 20px 50px 0;
`

const TopContainer = styled.div`
    margin-bottom: 50px;
`

const MiddleContainer = styled.div`
    display: flex;
    gap: 50px;
    margin-bottom: 50px;
`

const PieChartContainer = styled.div`
    width: 30%;
    background: #fff;
    border-radius: 15px;
    padding: 30px 15px;
    div{
    margin: 0 auto;
        width: 90%;
    }
`

const GraphContainer = styled.div`
    width: 65%;
    background: #fff;
    border-radius: 15px;
    padding: 10px 15px;
`


const BotttomContainer = styled.div``

const TableContainer = styled.div`
    width: 75%;
`


