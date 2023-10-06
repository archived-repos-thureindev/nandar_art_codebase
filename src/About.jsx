
import HeadBanner from "./components/HeadBanner";

import "./assets/styles/About.css";
// import bannerImg from "./assets/images/full/about-banner.png"
import slideshowImg from "./assets/images/full/icecream-shop-full.png"

const About = ({ bannerImg }) => {
    
    const monthDiff = (d1, d2) => {

        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();

        return months <= 0 ? 0 : months;
    }
    // Date(Year, MonthIdex, Day)
    const start_date = new Date(2022, 6, 2)
    const monthsSpent = monthDiff(start_date, new Date());

    return (
        <main className="about-page">
            <HeadBanner
                title={"Hello, I'm Nandar\nI make art\nto make life colorful"}
                subtitle={""}
                imgUrl={`url(${bannerImg})`}
            />

            {/* About */}
            <div className="flex-container about-container shadow-upstream-block">

                <div className="flex-item about-slideshow">
                    <div className="about-slideshow-content">
                        <img src={slideshowImg} alt="roman pavilion" />
                    </div>
                </div>

                <div className="flex-item about-info">
                    <h2 className="about-info-title">
                        Nandar is a 3D modeler
                        and digital illustrator.
                    </h2>
                    <p className="about-info-paragraph">
                        I embarked on my journey as a 3D artist ({monthsSpent}) months ago, starting with Blender. 
                        Since that initial spark, I&apos;ve dedicated myself full-time to mastering the craft of 3D art, 
                        expanding my toolkit to Maya and ZBrush. 
                        Today, as a passionate learner continually honing my skills, I&apos;m open to freelance commission works. 
                        If my artworks resonate with you, please don&apos;t hesitate to reach out.
                    </p>
                </div>

            </div>

            {/* <h2 className="quote-block full-line-block" style={{ backgroundColor: "skyblue" }}>
                <p className="quote-content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam culpa porro aut? Minima odio, omnis, cum quos ipsa assumenda rerum ea dolor, quae asperiores consequatur ad autem incidunt nulla officia!
                </p>
                <span className="quote-author">Michael Angelo</span>
            </h2> */}

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