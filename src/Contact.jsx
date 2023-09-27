import './assets/styles/Contact.css';
import HeadBanner from "./components/HeadBanner";
import InstaFeed from './components/InstaFeed';

const Contact = () => {
    return (
        <main>
            <HeadBanner title={"Contact"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos ducimus delectus similique quod doloribus expedita reprehenderit ratione, ullam obcaecati repellendus voluptate necessitatibus! Necessitatibus reiciendis velit quis, sequi iste temporibus!"} />

            {/* Contact */}
            <div className="container flex-container inquiry-container">

                <div className="flex-item inquiry-info">
                    <h2 className="inquiry-info-title">For commissions and project inquiries, please email:</h2>
                    <span className="inquiry-info-email">

                        <a
                            href="mailto:t.nndr.46@gmail.com?
                            &subject=Greetings
                            &body=Hello T. Nandar, "
                            target="_blank" rel="noreferrer noopener">
                            {import.meta.env.VITE_EMAIL_ADDRESS}
                        </a>
                    </span>
                    <h2 className="inquiry-info-title">or WhatsApp:</h2>
                    <span className="inquiry-info-email">
                        {import.meta.env.VITE_PHONE_NUMBER}
                    </span>

                    <span className="inquiry-info-text">or Send a message via this form</span>
                </div>

                <div className="flex-item inquiry-form">
                    <h2 className="inquiry-form-title">Send a message</h2>
                    <form action="/contact" method="POST">

                        <div className="inquiry-form-name-group d-flex justify-content-between align-items-center">
                            <div className="inquiry-form-fname">
                                <label htmlFor="fname">First name:</label>
                                <input type="text" id="fname" name="fname" placeholder="John" />
                            </div>
                            <div className="inquiry-form-lname">
                                <label htmlFor="lname">Last name:</label>
                                <input type="text" id="lname" name="lname" placeholder="Doe" />
                            </div>
                        </div>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="example@email.com" />

                        <label htmlFor="message">Write a message:</label>
                        <textarea name="message" id="message" cols="30" rows="4"></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Instagram */}
            <h2 className="instagram-title">
                <span>Follow along on Instagram for the latest projects and updates.</span>
            </h2>
            <div className="instagram-content">
                <InstaFeed username={"@t.nndr7"} instaLink={import.meta.env.VITE_INSTAGRAM_LINK} />
            </div>
        </main>
    )
}

export default Contact