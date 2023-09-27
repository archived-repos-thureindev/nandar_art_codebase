import { useEffect } from "react";
import "../assets/styles/HeadBanner.css";

const HeadBanner = ({ title, content, imgUrl = "url(https://images.unsplash.com/photo-1692728530148-05e4c86f1758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80)" }) => {

    useEffect(() => {
        document.documentElement.style.setProperty("--bg-url", imgUrl);

        return () => {
            document.documentElement.style.removeProperty("--bg-url");
        }
    }, []);

    return (
        <div
            id="home-bg"
            className="bg-image"
        >
            <div className="mask text-white">
                <div className="container d-flex align-items-center text-center h-100">
                    <div>
                        <h1 className="mb-5">{title}</h1>
                        <p>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadBanner