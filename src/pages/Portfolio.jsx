import { useState } from "react";
import StarDark from "../components/StarDark";

import firstImage from "/src/assets/port1.png";
import secondImage from "/src/assets/port2.png";
import thirdImage from "/src/assets/port3.png";

export default function Portfolio() {
    
    const [lightBoxSrc, setLightBoxSrc] = useState(null);

    function openLightBox(src) {
        setLightBoxSrc(src);
    }
    function closeLightBox() {
        setLightBoxSrc(null);
    }

    return (
        <div className="min-vh-100 mt-5 pt-4 bg-light">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="mt-5 text-dark fw-bold">PORTFOLIO COMPONENT</h1>
                <StarDark />
            </div>

            <div className="row w-100 justify-content-center g-5 ps-5 mb-5">
                <div className="col-md-4">
                    <div onClick={() => openLightBox(firstImage)}
                     className="imageBox rounded-3 overflow-hidden position-relative">
                        <img className="w-100" src={firstImage} alt="" />
                        <div className="overlay position-absolute bg-color-tertiary">
                            <i className="fa-solid fa-plus text-white fa-3x"></i>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div onClick={() => openLightBox(secondImage)}
                     className="imageBox rounded-3 overflow-hidden position-relative">
                        <img className="w-100" src={secondImage} alt="" />
                        <div className="overlay position-absolute bg-color-tertiary">
                            <i className="fa-solid fa-plus text-white fa-3x"></i>
                        </div>
                    </div>
                </div>
                <div onClick={() => openLightBox(thirdImage)}
                 className="col-md-4">
                    <div className="imageBox rounded-3 overflow-hidden position-relative">
                        <img className="w-100" src={thirdImage} alt="" />
                        <div className="overlay position-absolute bg-color-tertiary">
                            <i className="fa-solid fa-plus text-white fa-3x"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div onClick={() => openLightBox(firstImage)}
                     className="imageBox rounded-3 overflow-hidden position-relative">
                        <img className="w-100" src={firstImage} alt="" />
                        <div className="overlay position-absolute bg-color-tertiary">
                            <i className="fa-solid fa-plus text-white fa-3x"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div onClick={() => openLightBox(secondImage)}
                     className="imageBox rounded-3 overflow-hidden position-relative">
                        <img className="w-100" src={secondImage} alt="" />
                        <div className="overlay position-absolute bg-color-tertiary">
                            <i className="fa-solid fa-plus text-white fa-3x"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div onClick={() => openLightBox(thirdImage)}
                     className="imageBox rounded-3 overflow-hidden position-relative">
                        <img className="w-100" src={thirdImage} alt="" />
                        <div className="overlay position-absolute bg-color-tertiary">
                            <i className="fa-solid fa-plus text-white fa-3x"></i>
                        </div>
                    </div>
                </div>
            </div>
            {lightBoxSrc && (
                <div onClick={closeLightBox} className="lightbox-overlay position-fixed top-0 start-0 w-100 h-100">
                    <img className="lightbox-image rounded-3" src={lightBoxSrc} alt="" onClick={(e)=> e.stopPropagation()}/>
                </div>
            )}
            
        </div>
    )
}
