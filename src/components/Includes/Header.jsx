import React from 'react'
import styled from 'styled-components'

// importing images 
import profileImage from '../../Assets/Rectangle 10.png'

function Header() {
  return (
    <MainContainer>
        <GreetinText>Good Morning ! 🌞</GreetinText>
            <Profile>
                <ProfileText>
                    <Name>John Doe</Name>
                    <Email>john@doe.com</Email>
                </ProfileText>
                <ProfileImage>
                    <Image src={profileImage} />
                </ProfileImage>
            </Profile>
    </MainContainer>
  )
}

export default Header

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const GreetinText = styled.h4`
    font-weight: 400;
    font-size: 20px;
`

const Profile = styled.div`
    background: #fff;
    display: flex;
    gap: 15px;
    padding: 10px 20px;
    border-radius: 14px;
`

const ProfileText = styled.span``

const Name = styled.p`
    font-size: 15px;
`

const Email = styled.p`
    font-size: 10px;
`

const ProfileImage = styled.span``

const Image = styled.img``