import { useEffect } from "react";
import "../assets/styles/HeadBanner.css";
import bannerImg from "../assets/images/full/default-banner.png"
import PropTypes from "prop-types";

const HeadBanner = ({ title, subtitle, imgUrl = `url(${bannerImg})` }) => {

    useEffect(() => {
        document.documentElement.style.setProperty("--bg-imgUrl", imgUrl);

        return () => {
            document.documentElement.style.removeProperty("--bg-url");
        }
    }, []);

    return (
        <div className="bg-image">
            <div className="mask">
                <div className="banner-text">

                    <h1 className="banner-title mb-5">
                        {
                            title.split("\n").map((line, index) => {
                                return (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                )
                            })
                        }
                    </h1>
                    <p className="banner-subtitle">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

HeadBanner.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imgUrl: PropTypes.string
}
export default HeadBanner