
import HeadBanner from "./components/HeadBanner";

import "./assets/styles/About.css";
import bannerImg from "./assets/images/about-banner.png"
import slideshowImg from "./assets/images/full/pavilion.png"

const About = () => {
    return (
        <main className="about-page">
            <HeadBanner
                title={""}
                subtitle={""}
                imgUrl={`url(${bannerImg})`}
            />

            {/* About */}
            <div className="flex-container about-container shadow-upstream-block">

                <div className="flex-item about-info">
                    <h2 className="about-info-title">
                        Nandar is a 3D modeler
                        and illustrator specializing
                        in digital mediums.
                    </h2>
                    <p className="about-info-paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolores nobis illum fugit ipsam vitae reprehenderit dicta, vero quidem voluptate odit suscipit ratione. Rerum, harum? Accusamus veniam libero aliquam alias?
                    </p>
                    <p className="about-info-paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolores nobis illum fugit ipsam vitae reprehenderit dicta, vero quidem voluptate odit suscipit ratione. Rerum, harum? Accusamus veniam libero aliquam alias?
                    </p>
                    <p className="about-info-paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolores nobis illum fugit ipsam vitae reprehenderit dicta, vero quidem voluptate odit suscipit ratione. Rerum, harum? Accusamus veniam libero aliquam alias?
                    </p>
                </div>

                <div className="flex-item about-slideshow">
                    <div className="about-slideshow-content">
                        <img src={slideshowImg} alt="roman pavilion" />
                    </div>
                </div>
            </div>

            <h2 className="quote-block full-line-block" style={{ backgroundColor: "skyblue" }}>
                <p className="quote-content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam culpa porro aut? Minima odio, omnis, cum quos ipsa assumenda rerum ea dolor, quae asperiores consequatur ad autem incidunt nulla officia!
                </p>
                <span className="quote-author">Michael Angelo</span>
            </h2>

            <h2 className="quote-block full-line-block">
                <p className="quote-content">
                    Every block of stone has a statue inside it 
                    <br />
                    and it is the task of the sculptor to discover it.
                </p>
                <span className="quote-author">Michael Angelo</span>
            </h2>
        </main>
    )
}

export default About