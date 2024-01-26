import React from 'react'
import styled from 'styled-components'

// image 
import comingSoon from '../Assets/ComingSoon.jpg'

function CommingSoon() {
  return (
    <Container>
        <img src={comingSoon} alt="Coming Soon" />
    </Container>
  )
}

export default CommingSoon

const Container = styled.div`
    text-align: center;
    margin: auto;
    img{
        width: 60%;
        display: block;
        margin: auto;
    }
`