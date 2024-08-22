import Button from '../../components/Button'
import Seo from "../../components/Seo";
import {StyledHomeContainer, StyledHomeFooter} from './Home.styled.ts'

const Home = () => {
    const handleMeeting = () => {
        window.open('https://calendly.com/umamihq', '_blank');
    }

    return (
        <StyledHomeContainer className="StyledHomeContainer">
            <Seo
                title=" UMAMI | Digital Innovation & Product Consultancy"
                description="We work with founders and business leaders to make the right technology decisions to be able to stay ahead of the innovation curve."
                type="article"
                name="Umamihq"
            />
            <div className="intro-section">
                <h1 className="home-title">EARLY STAGE DIGITAL<br/> PRODUCT CONSULTANCY </h1>
                <div className="home-description">Strategies for Digital Innovation and Risk Reduction</div>
            </div>
            <div className="action-section">
                <Button handleButtonClick={handleMeeting}>Schedule a meeting</Button>
                <div className="action-description">Let’s chat for 30 minutes about your ideas.<br/>It’s free and there’s no obligation.</div>
            </div>
            <div className="side-box-pink" />
            <div className="side-box-green" />
            <StyledHomeFooter className="StyledHomeFooter">
                <div className="home-footer-text">
                    UMAMI is a digital consultancy focused on innovation, product development and technology.
                </div>
            </StyledHomeFooter>
        </StyledHomeContainer>
    );
};

export default Home
