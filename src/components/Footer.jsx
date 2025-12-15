export default function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="container-fluid">
        <div className="row bg-color-primary p-5">
          <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <span className="my-2">Clark, MO 65243</span>
          </div>
          <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
            <div className="icons d-flex justify-content-center flex-nowrap">
              <i className="fa-brands fa-facebook mx-1 icon">
              </i><i className="fa-brands fa-twitter mx-1 icon">
              </i><i className="fa-brands fa-linkedin-in mx-1 icon">
              </i><i className="fa-solid fa-globe mx-1 icon"></i>
            </div>
          </div>
          <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
        
      </div>
      <div className="bg-color-secondary p-3">
          <p className="mb-0">Copyright © Your Website 2021</p>
        </div>
    </footer>
    
  )
}
