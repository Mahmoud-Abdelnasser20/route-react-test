import Star from "../components/Star";

export default function About() {
    return (
        <div className="min-vh-100 bg-color-tertiary d-flex justify-content-center align-items-center flex-column text-white">
            <h2 className="fw-bold">ABOUT COMPONENT</h2>
            <Star />
            <div className="row w-100 justify-content-center mt-4">
                <p className="col-md-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className="col-md-4">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
    )
}
