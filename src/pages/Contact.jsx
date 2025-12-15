import StarDark from "../components/StarDark";

export default function Contact() {
    return (
        <div className="min-vh-100 mt-5 pt-4 bg-light">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="mt-5 text-dark fw-bold">CONTACT SECTION</h1>
                <StarDark />

                <form className="d-flex flex-column align-items-center mt-4 w-100">
                    <div className="form-floating mb-3 w-50">
                        <input type="text" className="form-control bg-transparent border-0 border-bottom" id="name" placeholder=""/>
                        <label htmlFor="name" className="form-label text-success fw-bold">Name:</label>
                        
                    </div>
                    <div className="form-floating mb-3 w-50">
                        <input type="text" className="form-control bg-transparent border-0 border-bottom" id="age" placeholder="" />
                        <label htmlFor="age" className="form-label text-success fw-bold">Age:</label>
                        
                    </div>
                    <div className="form-floating mb-3 w-50">
                        <input type="email" className="form-control bg-transparent border-0 border-bottom" id="email" placeholder="" />
                        <label htmlFor="email" className="form-label text-success fw-bold">Email:</label>
                        
                    </div>
                    <div className="form-floating mb-3 w-50">
                        <input type="password" className="form-control bg-transparent border-0 border-bottom" id="password" placeholder="" />
                        <label htmlFor="password" className="form-label text-success fw-bold">Password:</label>
                        
                    </div>
                    <button type="button" className="btn btn-primary fw-bold px-4">Send Message</button>
                </form>
            </div>
        </div>
    )
}
