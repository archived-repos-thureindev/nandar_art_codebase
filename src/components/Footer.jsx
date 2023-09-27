import { FiInstagram } from 'react-icons/fi';
import { SiArtstation, SiBuymeacoffee } from 'react-icons/si';

import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <>

            <footer>
                <div className="container">

                    <span className="copyright">© 2023 Nandar</span>

                    <ul className="social-items">
                        <li className="social-item">
                            <a className="social-link" href={import.meta.env.VITE_INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                                <FiInstagram /></a></li>
                        <li className="social-item">
                            <a className="social-link" href={import.meta.env.VITE_ART_STATION_LINK} target="_blank" rel="noopener noreferrer">
                                <SiArtstation /></a></li>
                        <li className="social-item">
                            <a className="social-link" href={import.meta.env.VITE_BUY_COFFEE_LINK} target="_blank" rel="noopener noreferrer">
                                <SiBuymeacoffee /></a></li>
                    </ul>

                    {/* <span className="copyright">All rights reserved</span> */}
                </div>
            </footer>
        </>
    )
}

export default Footer