
// import { InstagramEmbed } from 'react-social-media-embed';
import '../assets/styles/InstaPost.css';
import imgDefault from '../assets/images/nth.jpg';

const InstaPost = ({ instaLink, instaCaption, imageSrc, imageAlt, imageTitle, bgOverlay }) => {
    return (
        <figure className="insta-post" id={imageTitle.trim().toLowerCase().replace(/\s+/g, '-')}>
            
            <a href={`${instaLink ? instaLink : ""}`} className="insta-link">
                <img className="insta-img" src={imageSrc ? imageSrc : imgDefault} alt={imageAlt ? imageAlt : "Sorry, no alt"} />
                
                {/* <figcaption className="image-title">
                    {imageTitle ? imageTitle : "Just an image"}
                </figcaption> */}
                
                <div className="insta-caption" style={{ '--bg-overlay': bgOverlay ? bgOverlay : "rgba(255, 255, 255, 0.8)" }}>
                    {imageTitle ? imageTitle : "nandar's work"}
                </div>
            </a>
        </figure>
    );
}

export default InstaPost;
