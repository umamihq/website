import { FC, ReactNode } from 'react'
import { StyledButton } from "./Button.styled.ts";

const Button: FC<{ children: ReactNode, handleButtonClick: () => void }> = ({ children, handleButtonClick }) => {
    return (
        <>
            <StyledButton onClick={handleButtonClick} className="StyledButton">{children}</StyledButton>
        </>
    )
}

export default Button
