import React from 'react'
import styled from 'styled-components'


function DashBoard() {
  return (
    <MainContainer>
        <TopContainer>
            <Greetins>
                <Text>Good Morning !</Text>
                <Icon />
            </Greetins>
            <Profile>
                <ProfileText>
                    <Name>John Doe</Name>
                    <Email>john@doe.com</Email>
                </ProfileText>
                <ProfileImage>
                    <Image />
                </ProfileImage>
            </Profile>
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
    background: #000;
`

const TopContainer = styled.div``

const Greetins = styled.div``

const Text = styled.h4``

const Icon = styled.img``

const Profile = styled.div``

const ProfileText = styled.span``

const Name = styled.p``

const Email = styled.p``

const ProfileImage = styled.span``

const Image = styled.image``

const MiddleContainer = styled.div``

const BotttomContainer = styled.div``


