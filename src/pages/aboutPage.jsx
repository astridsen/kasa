import React from "react";
import Banner from "../components/Layout/banner";
import Collapse from "../components/Layout/collapse";
import imageBanner from "../assets/aboutBackground.svg";

const AboutPage = () => {
    return (
        <div>
            <Banner image={imageBanner} />
            <div className="about__dropdowns">
                <Collapse title="fiabilité" content={'Les annonces postées sur Kasa'} />
                <Collapse title="respect" content={'La bienveillance fait partie'} />
                <Collapse title="service" content={'Nos équipes se tiennent'} />
                <Collapse title="sécurité" content={'La sécurité est la priorité'} />
            </div>
        </div>
    )
}

export default AboutPage;