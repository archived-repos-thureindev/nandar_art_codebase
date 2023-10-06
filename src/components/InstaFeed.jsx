import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import PostData from './InstaData.js';
import InstaPost from './InstaPost';
import '../assets/styles/InstaFeed.css';

import { Controller, Scene } from "react-scrollmagic";

const InstaFeed = ({ username, instaLink }) => {
    const delay = Math.random() * 0.6 + 0.2; // Generate a random value between 0.2 and 0.8

    return (
        <div className="container pt-4 pb-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div className="insta-username">{username}</div>

                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            This will open Instagram
                        </Tooltip>
                    }
                >
                    <a href={instaLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Follow on Instagram
                    </a>
                </OverlayTrigger>
            </div>

            {/* Insta feed --------------------------- */}

            <Controller>
                <Scene classToggle="fade-in" triggerElement="#instaFeedContainer">
                    <div className="insta-feed-container" id="instaFeedContainer">
                        {PostData.map((postDetail, index) => {
                            return (
                                <InstaPost
                                    key={index}
                                    instaLink={postDetail.instaLink}
                                    instaCaption={postDetail.instaCaption}
                                    imageSrc={postDetail.imageSrc}
                                    imageAlt={postDetail.imageAlt}
                                    imageTitle={postDetail.imageTitle}
                                    bgOverlay={postDetail.bgOverlay} />
                            )
                        })}
                    </div>
                </Scene>
            </Controller>

            {/* <Controller>
                <Scene classToggle="fade-in" triggerElement="#your-element-id">
                    <div id="your-element-id" style={{ transitionDelay: `${delay}s` }}>


                        <div className="insta-feed-container">
                        </div>

                    </div>
                </Scene>
            </Controller> */}
            {/* ------------------------------------------------- */}

            <div className="d-flex justify-content-center align-items-center mt-4">
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            This will open Instagram
                        </Tooltip>
                    }
                >
                    <a href={instaLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        More Posts
                    </a>
                </OverlayTrigger>
            </div>

        </div>
    );
}

InstaFeed.propTypes = {
    username: PropTypes.string.isRequired,
    instaLink: PropTypes.string.isRequired
}
export default InstaFeed;