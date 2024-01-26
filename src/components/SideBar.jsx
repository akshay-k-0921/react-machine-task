import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// importing image files 
import logo from '../Assets/Briefcase.png'
import logoText from '../Assets/StatBoard.png'
import dashboard from '../Assets/Circled Menu.png'
import support from '../Assets/Support.png'
import plugins from '../Assets/Puzzle.png'
import help from '../Assets/Help.png'
import logout from '../Assets/Shutdown.png'

function SideBar() {
  return (
    <MainContainer>
        <Logo>
            <LogoLink href="#">
                <LogoImage src={logo} />
                <LogoTextImage src={logoText} />
            </LogoLink>
        </Logo>
        <NavContainer>
            <NavList>
                <NavItems>
                    <Link to='dashboard'>
                        <NavImage src={dashboard} />
                        <NavText>Dashboard</NavText>
                    </Link>
                </NavItems>
                <NavItems>
                    <Link to='support'>
                        <NavImage src={support} />
                        <NavText>Support</NavText>
                    </Link>
                </NavItems>
                <NavItems>
                    <Link to='plugins'>
                        <NavImage src={plugins} />
                        <NavText>Plugins</NavText>
                    </Link>
                </NavItems>
                <NavItems>
                    <Link to='help'>
                        <NavImage src={help} />
                        <NavText>Help</NavText>
                    </Link>
                </NavItems>
            </NavList>
        </NavContainer>
        <LogOutContainer>
            <LogoutButton>
                <TextSpan>Logout</TextSpan>
                <IconSpan><img src={logout} alt="LogOut" /></IconSpan>
            </LogoutButton>
        </LogOutContainer>
    </MainContainer>
  )
}

export default SideBar

const MainContainer = styled.div`
    padding: 50px 75px 0;
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #121926;
    height: 100vh;
    
`

// style for logo 
const Logo = styled.h1`
    width: 100px;
`

const LogoLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LogoImage = styled.img`
    width: 90%;
`

const LogoTextImage = styled.img`
    width: 100%;
`

// style for nav items 
const NavContainer = styled.div`
    margin-top: 110px;
`

const NavList = styled.ul``

const NavItems = styled.li`
    margin-bottom: 30px;
`

const Link = styled(NavLink)`
    color: #FFF;
    display: flex;
    gap: 8px;
    background: rgba(0,0,0,0.3);
    padding: 20px 60px 20px 30px;
    margin-left: 33px;
    border-radius: 15px 0 0 15px;
    &.active{
        background: #fff;
        color: #000;
    }
`

const NavImage = styled.img``

const NavText = styled.h5`
    font-weight: 400;
`

// style for logout button 
const LogOutContainer = styled.div`
    margin-top: 150px;
`

const LogoutButton = styled.div`
    background: #fff;
    padding: 12px 100px;
    display: flex;
    gap: 5px;
    align-items: center;
    color: #ee0d0d;
`

const TextSpan = styled.div`
    font-size: 14px;
`

const IconSpan = styled.div`
    width: 15px;
    img{
        width: 100%;
        display: block;
    }
`


