import {FC, useEffect, useState} from "react";
import {NavLink, Outlet, useLocation} from 'react-router-dom'
import {
    StyledHeader,
    StyledMain,
    StyledMainLayout,
    StyledNavigation,
    StyledHamburgerMenu,
    StyledHamburgerMenuList,
    StyledHamburgerMenuListHeader,
    StyledHamburgerMenuListBody,
} from './MainLayout.styled.ts'
import {StyledFooter} from "../umami.styled.ts";


type HamburgerMenuProps = {
    isScrolled: boolean
}

const ScrollTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        const currentScroll = window.scrollY
        if (currentScroll > 60) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [pathname])

    return null
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ isScrolled }) => {
    const [isMenuOpen, setOpen] = useState<boolean>(false)

    const handleMenuCLick = () => {
        setOpen(!isMenuOpen)
    }

    const handleLink = () => {
        setOpen(false)
    }

    return (
        <>
            <StyledHamburgerMenu
                className="StyledHamburgerMenu"
                onClick={handleMenuCLick}
                isMenuOpen={isMenuOpen}
                isScrolled={isScrolled}
            >
                <div className="burger-item item-1" />
                <div className="burger-item item-2" />
                <div className="burger-item item-3" />
                <div className="burger-item item-4" />
            </StyledHamburgerMenu>

            <StyledHamburgerMenuList className="StyledHamburgerMenuList" isMenuOpen={isMenuOpen}>
                <StyledHamburgerMenuListHeader className="StyledHamburgerMenuListHeader">
                    <NavLink className="umami-logo" onClick={handleLink} to="/">
                        <img src="/umami_white_logo.svg" alt="umami logo"/>
                    </NavLink>
                </StyledHamburgerMenuListHeader>

                <StyledHamburgerMenuListBody className="StyledHamburgerMenuListBody">
                    <NavLink onClick={handleLink} to="/services">Services</NavLink>
                    <NavLink onClick={handleLink} to="/about">About</NavLink>

                    <div className="respect-content">Give respect and get it back.</div>
                </StyledHamburgerMenuListBody>
            </StyledHamburgerMenuList>
        </>
    )
}

const MainLayout = () => {
    const location = useLocation()

    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const logoImage = isScrolled ? '/umami_white_logo.svg' : '/umami.svg'

    return (
        <StyledMainLayout className="StyledMainLayout">
            <ScrollTop />
            <StyledHeader className="StyledHeader" isScrolled={isScrolled}>
                <div className="logo-container">
                    <NavLink className="umami-logo" to="/">
                        <img src={logoImage} alt="umami logo" />
                    </NavLink>
                </div>
                <StyledNavigation className="StyledNavigation" isScrolled={isScrolled}>
                    <NavLink to="/services" >Services</NavLink>
                    <NavLink to="/about" >About</NavLink>
                </StyledNavigation>
                <HamburgerMenu isScrolled={isScrolled} />
            </StyledHeader>

            <StyledMain className="StyledMain">
                <Outlet />
            </StyledMain>

            {!['/'].includes(location.pathname) && (
                <StyledFooter className="StyledFooter">
                    <div className="flex-space-between footer-top">
                        <div className="link-section">
                            <div className="link-section__list">
                                <a href="/">Home</a>
                                <a href="/services">Services</a>
                                <a href="/about">About</a>
                            </div>
                            <div className="link-section__list">
                                <a href="/">Linkedin</a>
                                <a href="/Instagram">Instagram</a>
                            </div>
                        </div>
                        <p>Give respect and get it back.</p>
                    </div>
                    <div className="flex-space-between footer-bottom">
                        <img src="/umami_white_logo.svg" alt="umami logo"/>
                        <div className="footer-copyright-section">
                            <a className="email" href="mailtp:theumamihq@gmail.com ">theumamihq@gmail.com</a>
                            <p>© 2024 Umami Digital Consulting. All rights reserved.</p>
                        </div>
                    </div>
                </StyledFooter>
            )}
        </StyledMainLayout>
    )
}

export default MainLayout
