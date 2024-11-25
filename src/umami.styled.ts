import styled, { createGlobalStyle } from 'styled-components'
import {device} from "./config/breakpoints.config.ts";

export const UmamiStyled = createGlobalStyle`
    body {
        margin: 0;
        display: flex;
        /*place-items: center;*/
        min-width: 320px;
        min-height: 100vh;
        
        @media ${device.tablet} {
            min-height: 100%;
        }
    }
    
    h1 {
        font-size: 84px;
        font-weight: 400;
        line-height: 94px;
        letter-spacing: 10px;
        text-transform: uppercase;
        margin-bottom: 30px;
        
        @media ${device.tablet} {
            font-size: 36px;
            line-height: 40px;
            letter-spacing: 4px;
        }
    }
    
    h2 {
        font-size: 64px;
        font-weight: 300;
        line-height: 71px;
        letter-spacing: 2px;
        text-transform: uppercase;

        @media ${device.laptop} {
            font-size: 52px;
            line-height: 57px;
            letter-spacing: 2px;
        }

        @media ${device.tablet} {
            font-size: 21px;
            line-height: 38px;
            letter-spacing: 4px;
        }
    }
    
    p {
        font-weight: 300;
        font-size: 32px;
        line-height: 35px;
        letter-spacing: 2px;
        margin: 0;
        
        @media ${device.tablet} {
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 1px;
        }
    }

    a {
        font-weight: 300;
        color: #000000;
        font-size: 16px;
        text-transform: uppercase;
        text-decoration: inherit;
    }
    a:hover {
        /*color: #535bf2;*/
    }
    
    ul {
        padding-left: 30px;
        margin: 0;
    }
    
    li {
        font-weight: 200;
        font-size: 32px;
        line-height: 50px;
        letter-spacing: 2px;

        @media ${device.tablet} {
            font-size: 22px;
            line-height: 32px;
        }
    }
    
    .remark {
        font-size: 24px;
        font-weight: 300;
        line-height: 37px;
        letter-spacing: 2px;
        color: rgba(0, 0, 0, 0.25);
        
        @media ${device.tablet} {
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 1px;
            display: flex;
            margin: 10px 0;
        }
    }
    
    .central-box {
        max-width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 30px auto 130px auto;
        
        @media ${device.tablet} {
            margin: 30px auto 50px auto;
        }
    }
    
    .bold {
        font-weight: 500;
    }
    
    .green-box {
        background: #61BF9C;
        padding: 80px 170px;
        
        @media ${device.tablet} {
            //padding: 50px 40px;
            padding: 50px 25px;
        }
        
        h2 {
            margin: 0 0 70px 0;

            @media ${device.tablet} {
                margin: 0 0 50px 0;
            }
        }
        
        p {
            margin-bottom: 40px;
            line-height: 50px;
            
            @media ${device.tablet} {
                line-height: 32px;
            }
        }
    }
    
    .pink-box {
        background: #F5B7C9;
        padding: 230px 120px;

        @media ${device.tablet} {
            //padding: 50px 40px;
            padding: 50px 25px;
        }
    }
    
    .space-between-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 85px 0;
        
        @media ${device.tablet} {
            flex-direction: column;
            gap: 50px;
            margin: 50px 0;
        }
        
        .right-content {
            width: 40%;
            line-height: 50px;

            @media ${device.tablet} {
                width: 100%;
                text-align: center;
                margin: 0 25px;
                line-height: 24px
            }
        }
    }
    
    .flex-space-between {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        @media ${device.tablet} {
            flex-direction: column;
            gap: 20px;
        }
    }
    
    /* Services */

    .services-costs {
        display: flex;
        flex-direction: column;
        gap: 130px;

        @media ${device.tablet} {
            gap: 80px;
        }
    }
    
    .services-costs__list {
        width: 650px;

        @media ${device.tablet} {
            width: 100%;
        }
    }
    
    .services-heading {
        width: 30%;
        margin: 0;
    }
    
    .help-note {
        margin: 15px 0;
        text-align: center;
        
        @media ${device.tablet} {
            margin: 15px 25px;
            font-size: 12px;
        }
    }
    
    .services-item {
        display: flex;
        gap: 50px;
    }
    
    /* About */
    
    .work-section {
        margin-top: 160px;

        @media ${device.tablet} {
            margin-top: 50px;
        }
        
        h2 {
            margin: 0 0 50px 0;
        }
    }
    
    .work-section__content {
        display: flex;
        gap: 100px;
        
        @media ${device.tablet} {
            flex-direction: column;
            gap: 20px;
        }
    }
    
    .work-section__content-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .organizations-section {
        h2 {
            max-width: 65%;
        }
    }
    
    .organizations-section__list {
        p {
            margin-bottom: 10px;
        }
    }
`

export const StyledPageLayout = styled.div`
    padding: 0 60px;
    width: 100%;
    
    @media ${device.tablet} {
        padding: 0;
    }
`

export const StyledScheduledButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 180px 0;
    
    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        margin: 50px 0;
        
        img {
            display: none;
        }
    }
    
    .button-container {
        flex-direction: column;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        text-align: center;
        margin-left: 338px;

        @media ${device.tablet} {
            margin: 0;
        }
    }
    
    button {
        margin-bottom: 15px;
    }
    
    .chat-information {
        font-size: 12px;
        line-height: 14px;
        color: #000000;
    }
    
    img {
        margin-left: auto;

        @media ${device.tablet} {
            margin: 0;
        }
    }
    
    .button-container__inner {
        @media ${device.tablet} {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
`

export const StyledFooter = styled.div`
    background: #000000;
    color: #ffffff;
    padding: 40px 60px;
    height: 320px;
    display: flex;
    flex-direction: column;position: relative;
    z-index: 2;
    
    @media ${device.tablet} {
        gap: 50px;
        height: auto;
        padding: 40px 25px;
    }
    
    .footer-top {
        gap: 50px
    }
    
    .footer-bottom {
        margin-top: auto;
    }
    
    .link-section {
        display: flex;
        gap: 65px;
        
        @media ${device.tablet} {
            width: 100%;
            justify-content: space-between;
        }
    }
    
    .link-section__list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        letter-spacing: 2px;
    }
    
    .email {
        text-transform: lowercase;
        letter-spacing: 2px;
        font-weight: 300;
    }
    
    .footer-copyright-section {
        display: flex;
        flex-direction: column;
        justify-content: right;
        align-items: flex-end;
        
        @media ${device.tablet} {
            justify-content: left;
            align-items: flex-start;

            p {
                font-size: 11px;
            }
        }
    }
    
    a, p {
        color: #ffffff;
        font-size: 16px;
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
        background-color: #ffffff;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
`

export const StyledPageTitle = styled('h1')`
    @media ${device.tablet} {
        margin: 30px 25px;
    }
`

export const StyledPageDescription = styled('p')`
    @media ${device.tablet} {
        margin: 0 25px;
    }
`
