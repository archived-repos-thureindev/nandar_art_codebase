import "./assets/styles/Home.css";
import HeadBanner from "./components/HeadBanner";

const Home = () => {
    return (
        <main className="home-page">

            <HeadBanner
                title={"Hello, I'm Nandar.\nA digital artist, exploring the realms of art and creativity."}
                subtitle={"Discover my journey, my evolving portfolio, and how my artistry can bring your visions to life."} />

            <h2 className="full-line-block">Nandar Blender</h2>

        </main>
    )
}

export default Home