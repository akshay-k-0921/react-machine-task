import React from 'react'
import styled from 'styled-components'

// Importing Components 
import Header from './Includes/Header'

function DashBoard() {
  return (
    <MainContainer>
        <TopContainer>
            <Header />
        </TopContainer>
        <MiddleContainer>

        </MiddleContainer>
        <BotttomContainer>

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
`

const MiddleContainer = styled.div``

const BotttomContainer = styled.div``


