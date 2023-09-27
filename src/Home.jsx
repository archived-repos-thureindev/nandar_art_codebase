import "./assets/styles/Home.css";
import HeadBanner from "./components/HeadBanner";

const Home = () => {
    return (
        <>
            <HeadBanner title={"This is Home"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos ducimus delectus similique quod doloribus expedita reprehenderit ratione, ullam obcaecati repellendus voluptate necessitatibus! Necessitatibus reiciendis velit quis, sequi iste temporibus!"}/>

            <h1>Nandar Blender</h1>
            <p className="home-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos ducimus delectus similique quod doloribus expedita reprehenderit ratione, ullam obcaecati repellendus voluptate necessitatibus! Necessitatibus reiciendis velit quis, sequi iste temporibus!
            </p>
        </>
    )
}

export default Home