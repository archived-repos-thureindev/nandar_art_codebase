import './assets/styles/Contact.css';
import HeadBanner from "./components/HeadBanner";
import InstaFeed from './components/InstaFeed';
import bannerImg from "./assets/images/contact-banner.png"

import { HiOutlineMail } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <main className="contact-page">
            <HeadBanner
                title={"Ready to collaborate?\nLet's work together on your\nnext project."}
                subtitle={""}
                imgUrl={`url(${bannerImg})`}
            />

            {/* Contact */}
            <div className="full-line-block inquiry-block shadow-upstream-block" >
                
                <div className="inquiry-container flex-container container">
                    <div className="flex-item inquiry-info">

                        <h2 className="inquiry-info-title">
                            <HiOutlineMail className="inquiry-info-icon" />
                            {
                                "\nFor commissions\nand project inquiries, please email:".split("\n").map((line, index) => {
                                    return (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    )
                                })
                            }
                        </h2>

                        <span className="inquiry-info-email">

                            <a
                                href="mailto:t.nndr.46@gmail.com?
                            &subject=Greetings
                            &body=Hello T. Nandar, "
                                target="_blank" rel="noreferrer noopener">
                                {import.meta.env.VITE_EMAIL_ADDRESS}
                            </a>
                        </span>

                        {/* <p className="inquiry-info-text">or WhatsApp:</p>

                        <span className="inquiry-info-phone">
                            <a href="">
                                {import.meta.env.VITE_PHONE_NUMBER}
                            </a>
                        </span> */}

                        <span className="inquiry-info-text">or Send a message via this form</span>
                    </div>

                    <div className="flex-item inquiry-form">
                        <h2 className="inquiry-form-title">Send a message</h2>
                        <form
                            action="https://formspree.io/f/xgejpwlp"
                            method="POST">

                            <div className="inquiry-form-name-group d-flex justify-content-between align-items-center">

                                <div className="inquiry-form-fname">
                                    <label htmlFor="fname">First name:</label>
                                    <input type="text" id="fname" name="fname" placeholder="" />
                                </div>

                                <div className="inquiry-form-lname">
                                    <label htmlFor="lname">Last name:</label>
                                    <input type="text" id="lname" name="lname" placeholder="" />
                                </div>
                            </div>

                            <div className="inquiry-form-email-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder="" required />
                            </div>

                            <label htmlFor="message">Write a message:</label>
                            <textarea name="message" id="message" cols="30" rows="4" required></textarea>

                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Instagram */}
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

export default Contact