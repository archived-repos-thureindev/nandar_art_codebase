import "./assets/styles/Home.css";
import HeadBanner from "./components/HeadBanner";
import slideshowImg from "./assets/images/full/pavilion-full.png"
import slideshowImg2 from "./assets/images/full/two-bishops-full.png"
import slideshowImg3 from "./assets/images/full/abandoned-building-full.png"
import slideshowImg4 from "./assets/images/full/chess-board-full.png"

const Home = () => {
    return (
        <main className="home-page">

            <HeadBanner
                title={"A DIGITAL ARTIST\nEXPLORING THE REALMS OF\nART AND CREATIVITY"}
                subtitle={""}
            />

            <div className="flex-container home-container">

                <div className="flex-item home-info" id="home-info-2">
                    <p className="home-full-caption">
                        Discover my journey,
                        <br />
                        my evolving portfolio,
                        <br />
                        and how my artistry can
                        <br />
                        bring your visions to life.
                    </p>
                </div>

                <div className="flex-item home-slideshow">
                    <div className="home-slideshow-content">
                        <img src={slideshowImg} alt="roman pavilion" />
                    </div>
                </div>
            </div>


            <div className="flex-container home-container">

                <div className="flex-item about-slideshow">
                    <div className="about-slideshow-content">
                        <img src={slideshowImg2} alt="2 bishops" />
                    </div>
                </div>

                <div className="flex-item home-info" id="home-info-2">
                    <p className="home-full-caption">
                        I make art
                        <br />
                        That&apos;s all I know
                    </p>
                </div>
            </div>

            <div className="flex-container home-container">

                <div className="flex-item home-info" id="home-info-2">
                    <p className="home-full-caption">
                        Discover my journey,
                        <br />
                        my evolving portfolio,
                        <br />
                        and how my artistry can
                        <br />
                        bring your visions to life.
                    </p>
                </div>

                <div className="flex-item home-slideshow">
                    <div className="home-slideshow-content">
                        <img src={slideshowImg3} alt="roman pavilion" />
                    </div>
                </div>
            </div>

            <div className="landscape-block">
                <img src={slideshowImg4} alt="roman pavilion" />
            </div>

        </main>
    )
}

export default Home