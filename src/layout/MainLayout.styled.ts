import styled from 'styled-components'
import {device} from "../config/breakpoints.config.ts";

export const StyledMainLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    @media ${device.tablet} {
        padding: 0 20px;
    }
`

export const StyledHeader = styled.header<{ isScrolled: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    //padding: 35px 60px;
    padding: ${(props) => props.isScrolled ? '10px 60px' : '35px 60px'};;
    position: ${(props) => props.isScrolled ? 'fixed' : 'relative'};
    top: 0;
    right: 0;
    left: 0;
    background: ${(props) => props.isScrolled ? '#000000' : '#ffffff'};
    transition: ${(props) => props.isScrolled ? '300ms' : '300ms'};
    
    @media ${device.tablet} {
        padding: ${(props) => props.isScrolled ? '10px 60px' : '35px 0'};;
    }
    
    a {
        color: ${(props) => props.isScrolled ? '#ffffff' : '#000000'};
    }
`

export const StyledMain = styled.main`
    display: flex;
    flex: 1;
`

export const StyledFooter = styled.footer`
    display: flex;
`

export const StyledNavigation = styled.div`
    display: flex;
    gap: 24px;
    
    @media ${device.tablet} {
        display: none;
    }
    

    a {
        position: relative;
        text-decoration: none;
    }

    a:hover::before {
        transform: scaleX(1);
    }

    a::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
`

type HamburgerMenuProps = {
    isMenuOpen: boolean
    isScrolled: boolean
}
const getBackground = ({ isMenuOpen, isScrolled }: HamburgerMenuProps) => {
    if (isMenuOpen) {
        return `
            background: #000000;
        `
    } else if (isScrolled && !isMenuOpen) {
        return `
            background: #ffffff;
        `
    }
    return `
        background: #000000;
    `
}

export const StyledHamburgerMenu = styled.div<HamburgerMenuProps>`
    display: none;
    justify-content: space-around;
    flex-direction: column;
    width: 2rem;
    height: 1.5rem;
    cursor: pointer;
    position: absolute;
    right: 20px;
    z-index: 10;

    @media ${device.tablet}{
        display: flex;
    }

    .burger-item {
        width: 35px;
        height: 2px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        background-color: ${({ isScrolled, isMenuOpen }) => (isScrolled && isMenuOpen ? '#ffffff' : '#000000')};
        
        ${getBackground}
    }
    
    .item-1 {
        transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(35deg)' : 'rotate(0)')};
    }

    .item-2,
    .item-3 {
        opacity: ${({ isMenuOpen }) => (isMenuOpen ? 0 : 1)};
    }

    .item-4 {
        transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-35deg)' : 'rotate(0)')};
    }
`

export const StyledHamburgerMenuList = styled.div<{ isMenuOpen: boolean }>`
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    z-index: 9;
    background-color: #ffffff;
    
    a {
        color: #000000;
    }
`

export const StyledHamburgerMenuListHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 35px 0;
`

export const StyledHamburgerMenuListBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5rem 2rem;
    justify-content: center;
    align-items: center;

    a {
        position: relative;
        text-decoration: none;
        font-size: 64px;
    }

    a:hover::before {
        transform: scaleX(1);
    }

    a::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000000;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
`
