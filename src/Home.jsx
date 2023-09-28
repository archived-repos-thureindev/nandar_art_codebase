import "./assets/styles/Home.css";
import HeadBanner from "./components/HeadBanner";

import slideshowImg from "./assets/images/full/pavilion.png"
import InstaFeed from "./components/InstaFeed";

const Home = () => {
    return (
        <main className="home-page">

            <HeadBanner
                title={"Hello, I'm Nandar.\nA digital artist, exploring the realms of art and creativity."}
                subtitle={""} />

            <h2 className="home-intro-text full-line-block shadow-upstream-block">
                Discover my journey, my evolving portfolio, <br />
                and how my artistry can bring your visions to life.
            </h2>

            <div className="flex-container about-container">

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


            <div className="instagram-block">
                <h2 className="instagram-title">
                    <span>Follow along on Instagram for my latest works and updates.</span>
                </h2>

                <div className="instagram-content full-line-block">
                    <InstaFeed username={""} instaLink={import.meta.env.VITE_INSTAGRAM_LINK} />
                </div>
            </div>

        </main>
    )
}

export default Home