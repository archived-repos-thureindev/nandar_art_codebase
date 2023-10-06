import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './assets/styles/animations.css';

import contactBanner from "./assets/images/full/contact-banner.png"
import aboutBanner from "./assets/images/full/about-banner.png"

function App() {
    const location = useLocation();

    return (
        <>
            <NavBar />

            <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={500}>
                    <Routes location={location}>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About bannerImg={aboutBanner}/>} />
                        <Route path="/contact" element={<Contact bannerImg={contactBanner}/>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>

            <Footer />
        </>
    )
}

export default App
