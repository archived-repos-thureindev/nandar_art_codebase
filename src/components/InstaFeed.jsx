import PropTypes from 'prop-types';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import PostData from './InstaData.js';
import InstaPost from './InstaPost';
import '../assets/styles/InstaFeed.css';

const InstaFeed = ({ username, instaLink }) => {

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
            
            <div className="insta-feed-container">
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