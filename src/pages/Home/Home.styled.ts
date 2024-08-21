import styled from 'styled-components'
import {device} from "../../config/breakpoints.config.ts";

export const StyledHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //margin-top: -105px;
    width: 100%;
    gap: 125px;
    position: relative;
    text-align: center;
    
    @media ${device.tablet} {
        gap: 50px;
    }
    
    .home-description {
        text-transform: uppercase;
        font-size: 24px;
        letter-spacing: 5px;
        font-weight: 200;
    }
    
    .action-section {
        display: flex;
        flex-direction: column;
        gap: 15px;
        position: relative;
        z-index: 2;
        
        @media ${device.tablet} {
            width: 100%;
            margin: 0 10px;
        }
    }
    
    .action-description {
        font-size: 16px;
        letter-spacing: 2px;
    }
    
    // .side-box-pink,
    // .side-box-green {
    //     @media ${device.tablet} {
    //         display: none;
    //     }
    // }
    
    .side-box-pink {
        background: #F3A5BB;
        width: 355px;
        height: 170px;
        position: absolute;
        bottom: 100px;
        right: 0;

        @media ${device.tablet} {
            width: 100px;
            right: -20px;
        }
    }
    
    .side-box-green {
        background: #61BF9C;
        width: 385px;
        height: 110px;
        position: absolute;
        bottom: 0;
        left: 0;

        @media ${device.tablet} {
            width: 150px;
            height: 50px;
            left: -20px;
            bottom: 80px;
        }
    }
`

export const StyledHomeFooter = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    position: absolute;
    bottom: 0;
    
    .home-footer-text {
        margin-top: auto;
        font-size: 12px;
        color: rgba(0,0,0,0.5);
        letter-spacing: 1px;
    }
`
