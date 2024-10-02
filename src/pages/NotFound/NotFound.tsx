import {StyledNotFound} from "./NotFound.styled.ts";

const NotFound = () => {
    return (
        <StyledNotFound className="StyledNotFound">
            <div className="not-found-content">
                <p>We are sorry, but the page you requested was not found</p>
            </div>
        </StyledNotFound>
    );
};

export default NotFound;
