import Star from "../components/Star";

export default function Home() {
    return (
        <div className="min-vh-100 bg-color-tertiary d-flex justify-content-center align-items-center flex-column">
            <div className="image d-flex justify-content-center align-items-center">
                <img className="home-image w-75" src="src/assets/avataaars.svg" alt="" />
            </div>
            <h2 className="text-white my-3 fw-bold">START FRAMEWORK</h2>
            <Star />
            <p className="text-white my-3">Graphic Artist - Web Designer - Illustrator</p>
        </div>
    )
}
