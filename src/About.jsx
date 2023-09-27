import "./assets/styles/About.css";
import HeadBanner from "./components/HeadBanner";

const About = () => {
    return (
        <>
            <HeadBanner title={"About Me"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos ducimus delectus similique quod doloribus expedita reprehenderit ratione, ullam obcaecati repellendus voluptate necessitatibus! Necessitatibus reiciendis velit quis, sequi iste temporibus!"} />

            {/* About */}
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
                        Slideshow Content
                    </div>
                </div>
            </div>

            <h2 className="quote-block">
                <p className="quote-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eum, id dolorem modi iusto, officia nesciunt in facilis deleniti laborum inventore quasi accusantium sit nostrum? Dolores ducimus natus provident quos!
                </p>
                <span className="quote-author">Michael Angelo</span>
            </h2>
        </>
    )
}

export default About