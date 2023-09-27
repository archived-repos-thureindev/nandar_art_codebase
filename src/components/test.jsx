import React from 'react'

const test = () => {
  return (
    <>

            {/* ** Main Navigation */}
            <header>
  {/* **  Animated navbar */}
  <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
    <div className="container-fluid">
      <button
              className="navbar-toggler ps-0"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <span
              className="d-flex justify-content-start align-items-center"
              >
          <i className="fas fa-bars"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#intro">Home</a>
          </li>
          <li className="nav-item">
            <a
               className="nav-link"
               href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
               rel="nofollow noreferrer noopener"
               target="_blank"
               >Learn Bootstrap 5
               </a>
          </li>
          <li className="nav-item">
            <a
               className="nav-link"
               href="https://mdbootstrap.com/docs/standard/"
               target="_blank" rel="noreferrer noopener"
               >Download MDB UI KIT
               </a>
          </li>
        </ul>

        <ul className="navbar-nav flex-row">
          {/* **  Icons  */}
          <li className="nav-item">
            <a
               className="nav-link pe-2"
               href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
               rel="nofollow noreferrer noopener"
               target="_blank"
               >
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
               className="nav-link px-2"
               href="https://www.facebook.com/mdbootstrap"
               rel="nofollow noreferrer noopener"
               target="_blank"
               >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
               className="nav-link px-2"
               href="https://twitter.com/MDBootstrap"
               rel="nofollow noreferrer noopener"
               target="_blank"
               >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
               className="nav-link ps-2"
               href="https://github.com/mdbootstrap/mdb-ui-kit"
               rel="nofollow noreferrer noopener"
               target="_blank"
               >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* **  Animated navbar  */}

  {/* **  Background image  */}
  <div
       id="intro"
       className="bg-image"
       style="
              background-image: url(https://mdbcdn.b-cdn.net/img/new/fluid/city/113.jpg);
              height: 100vh;
              "
       >
    <div className="mask text-white" style="background-color: rgba(0, 0, 0, 0.8)">
      <div className="container d-flex align-items-center text-center h-100">
        <div>
          <h1 className="mb-5">This is title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis molestiae
            laboriosam numquam expedita ullam saepe ipsam, deserunt provident corporis,
            sit non accusamus maxime, magni nulla quasi iste ipsa architecto? Autem!
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* **  Background image  */}
</header>
{/* ** Main Navigation */}

<div className="container my-5">
  <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quam minima perspiciatis eos tenetur. Praesentium dolores at quos aperiam sed, sint provident consectetur incidunt, nostrum porro earum commodi, ex architecto.</p>

</div>






        

        {/* ** Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
            {/* ** Container wrapper */}
            <div className="container-fluid">
                {/* ** Navbar brand */}
                <a className="navbar-brand" href="#">Brand</a>

                {/* ** Toggle button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                {/* ** Collapsible wrapper */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* ** Left links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        {/* ** Navbar dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            {/* ** Dropdown menu */}
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">Action</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"
                            >Disabled
                            </a>
                        </li>
                    </ul>
                    {/* ** Left links */}
                </div>
                {/* ** Collapsible wrapper */}
            </div>
            {/* ** Container wrapper */}
        </nav>
    </>
    
            
  )
}

export default test