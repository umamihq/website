import Button from "../../components/Button";
import Seo from "../../components/Seo";
import {StyledPageDescription, StyledPageLayout, StyledPageTitle, StyledScheduledButton} from "../../umami.styled.ts";

const Services = () => {
    const handleMeeting = () => {
        window.open('https://calendly.com/umamihq', '_blank');
    }

    return (
        <StyledPageLayout className="StyledPageLayout">
            <Seo
                title="UMAMI | Innovation & Product Services"
                description="Helping businesses stay ahead of the competition with innovation management and digital product management consulting."
                type="article"
                name="Umamihq"
            />
            <StyledPageTitle className="StyledPageTitle">Services</StyledPageTitle>
            <StyledPageDescription className="StyledPageDescription">We listen. We understand. We advise. We innovate. We deliver.</StyledPageDescription>

            <div className="central-box">
                <div>
                    <img src="/services.svg" alt="services"/>
                </div>
                <p>
                    Helping businesses stay ahead of the competition with technology, innovation management and digital
                    product management consulting.
                </p>
            </div>

            <div className="green-box">
                <h2>WHAT WE DO</h2>
                <p>Identify <span className="bold">technology challenges</span> and goals.</p>
                <p><span className="bold">Define the product</span>. Set a <span className="bold">budget</span>.</p>
                <p>Design a goal-driven experience. Create a strong, impactful interface. Build a <span className="bold">testable prototype</span>.</p>
                <p>Organize the process and set the <span className="bold">baseline for product delivery</span>.</p>
                <p>Help <span className="bold">assemble a team</span> of motivated specialists to deliver. Keep and manage the delivery teams in line with expectations, budget and timeframe.</p>
                <p>Most importantly. Help decision-makers <span className="bold">reduce risk</span> and navigate the <span className="bold">digital product development</span> process effectively.</p>
            </div>

            <div className="space-between-box">
                <img width={250} src="/vector.svg" alt="vector image"/>
                <p className="right-content">We work with founders and business leaders to make the right technology
                    decisions.</p>
            </div>

            <div className="pink-box services-costs">
                <div className="flex-space-between services-item">
                    <h2 className="services-heading">Consultations</h2>
                    <div className="services-costs__list">
                        <ul>
                            <li>micro consultations: $600</li>
                            <li>standard consultations: $900</li>
                            <li>extended consultations: $1400</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-space-between services-item">
                    <h2 className="services-heading">Discovery Workshops</h2>
                    <div className="services-costs__list">
                        <ul>
                            <li>cost estimation workshop: $1800</li>
                            <li>basic product discovery: $2400</li>
                            <li>full workshop + prototype: $5200</li>
                        </ul>
                        <span className="remark">*prices starting from depending on complexity</span>
                    </div>
                </div>
                <div className="flex-space-between services-item">
                    <h2 className="services-heading">Fractional Innovation Management</h2>
                    <div className="services-costs__list">
                        <ul>
                            <li>3 months: $6000-10000</li>
                            <li>6 months: $12000-18000</li>
                            <li>whole year: $24000-36000</li>
                        </ul>
                        <span className="remark">*price ranges depend on complexity</span>
                    </div>
                </div>
            </div>

            <div className="help-note">
                <p>Don't see a service that fits your needs, let's see how we can help!</p>
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
                <img className="curve-arrow" src="/curve.svg" alt="curve image"/>
            </StyledScheduledButton>
        </StyledPageLayout>
    );
};

export default Services;
