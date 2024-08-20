import styled from 'styled-components'
import {device} from "../../config/breakpoints.config.ts";

export const StyledButton = styled.button`
    background: #000000;
    padding: 24px 40px;
    color: #ffffff;
    border: 1px solid transparent;
    text-transform: uppercase;
    border-radius: 0;
    min-width: 520px;
    font-weight: 200;
    letter-spacing: 2px;
    font-size: 24px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease-in-out;
    outline: none;
    
    @media ${device.tablet} {
        min-width: auto;
        font-size: 22px;
    }
    
    &:hover {
        background: #ffffff;
        color: #000000;
        border: 1px solid #000000;
    }
`
