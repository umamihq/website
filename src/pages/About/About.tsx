import Button from "../../components/Button";
import Seo from "../../components/Seo";
import {StyledPageLayout, StyledScheduledButton} from "../../umami.styled.ts";

const About = () => {
    const handleMeeting = () => {
        window.open('https://calendly.com/umamihq', '_blank');
    }

    return (
        <StyledPageLayout className="StyledPageLayout">
            <Seo
                title="UMAMI | Who We Are"
                description="Learn whom we’ve helped and with who we collaborate on bringing innovation."
                type="article"
                name="Umamihq"
            />
            <h1>About</h1>
            <p>We help you leverage technology to your advantage.</p>

            <div className="pink-box work-section">
                <h2>WE worked for</h2>
                <div className="work-section__content">
                    <div className="work-section__content-list">
                        <p>→ Novak Djokovic Foundation</p>
                        <p>→ Nutrikator</p>
                        <p>→ Flexisense</p>
                        <p>→ 4H</p>
                        <p>→ GreenCell</p>
                        <p>→ The Slow CEO</p>
                        <p>→ Danulabs</p>
                        <p>→ CaliVita</p>
                    </div>
                    <div className="work-section__content-list">
                        <p>→ SiloSense</p>
                        <p>→ AquaNexus</p>
                        <p>→ Trilab</p>
                        <p>→ HomeStory</p>
                        <p>→ BestBytes</p>
                        <p>→ EntryRocket</p>
                        <p>→ Homepage Agency</p>
                        <p>→ TeamSketch</p>
                        <p>→ YOU :)</p>
                    </div>
                </div>
            </div>

            <div className="space-between-box">
                <img width={250} src="/vector.svg" alt="vector image" />
                <p className="right-content">We work with founders and business leaders to make the right technology decisions.</p>
            </div>

            <div className="green-box organizations-section">
                <h2>Accelerators and Organisations We Cooperate With</h2>
                <div className="organizations-section__list">
                    <p>→ Bluelion Accelerator Switzerland</p>
                    <p>→ Innovation Fund Serbia</p>
                    <p>→ Founder Institute</p>
                    <p>→ Science and Technology Park Novi Sad</p>
                    <p>→ Swiss Contact - Entrepreneurship Program</p>
                    <p>→ Startup Grind</p>
                    <p>→ Tenderly Garage</p>
                </div>
            </div>

            <StyledScheduledButton className="StyledScheduledButton schedule-metting-box">
                <div className="button-container">
                    <div className="button-container__inner">
                        <Button handleButtonClick={handleMeeting}>Schedule a meeting</Button>
                        <p className="chat-information">Let’s chat for 30 minutes about your product. <br/>
                            It’s free and there’s no obligation.
                        </p>
                    </div>
                </div>
                <img src="/curve.svg" alt="curve image"/>
            </StyledScheduledButton>
        </StyledPageLayout>
    );
};

export default About;
