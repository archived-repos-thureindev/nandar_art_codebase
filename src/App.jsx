
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

    return (
        <>
            <NavBar />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
