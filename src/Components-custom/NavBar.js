import React from "react";
import "./NavBar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
 
  
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
        style={{backgroundColor:props.mode}}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            {/* <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.toggleModeSetter}
              />
              <label
                className={`form-check-label text-${props.mode === "dark"? "light":"dark"}`}
                htmlFor="flexSwitchCheckChecked"
              >
                {props.mode === "dark"? 'Disable Dark':" Disable Light"}
              </label>
            </div> */}

            <div className="container mx-5 " style={{height:'20px',width:'150px'}}>
              <div className="row">
                <div className="col mx-1" onClick={()=>props.toggleModeSetter("green")} style={{backgroundColor:"green",width:'2px' ,height:'20px',border:'.5px solid black',borderRadius:'4px'}}></div>
                <div className="col mx-1" onClick={()=>props.toggleModeSetter("blue")} style={{backgroundColor:"blue",width:'2px' ,height:'20px',border:'.5px solid black',borderRadius:'4px'}}></div>
                <div className="col mx-1" onClick={()=>props.toggleModeSetter("yellow")} style={{backgroundColor:"yellow",width:'2px' ,height:'20px',border:'.5px solid black',borderRadius:'4px'}}></div>
                <div className="col mx-1" onClick={()=>props.toggleModeSetter("pink")} style={{backgroundColor:"pink",width:'2px' ,height:'20px',border:'.5px solid black',borderRadius:'4px'}}></div>

              </div>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

NavBar.defaultProps = { title: "Set Project Name", aboutText: "About" };
