import React from 'react'
import styled from 'styled-components'

// importing Images 
import profile from '../../Assets/media.png'
import faceBook from '../../Assets/facebook.png'
import instagram from '../../Assets/instagram.png'
import twitter from '../../Assets/twitter.png'

function ProfileCard() {
  return (
    <MainContainer>
        <TopContainer>
            <TopImage src={profile}  />
        </TopContainer>
        <BottomContainer>
            <Name>John Doe</Name>
            <Occupation>CEO</Occupation>
            <Socials>
                <Icon src={faceBook} />
                <Icon src={instagram} />
                <Icon src={twitter} />
            </Socials>
        </BottomContainer>
    </MainContainer>
  )
}

export default ProfileCard

const MainContainer = styled.div`
    background: #FFF;
    width: 100%;
    border-radius: 15px;
`

const TopContainer = styled.div`
    width: 100%;
`

const TopImage = styled.img`
    width: 100%;
    display: block;
`

const BottomContainer = styled.div`
    text-align: center;
    padding: 10px;
`

const Name = styled.h5`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 5px;
`

const Occupation = styled.p`
    font-size: 12px;
    margin-bottom: 5px;
`

const Socials = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

const Icon = styled.img`
    width: 20px;
`

