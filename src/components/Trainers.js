import React from "react";
import { Link } from "react-router-dom";
import TrainerOne from "../Assets/images/trainer-1.jpg";
import TrainerTwo from "../Assets/images/trainer-2.jpg";
import TrainerThree from "../Assets/images/trainer-3.jpg";
import TrainersImage from "../Assets/images/trainers.jpg";
import "../components/contact/css/animate.css";
import "../components/contact/css/bootstrap.css";
import "../components/contact/css/icomoon.css";
import "../components/contact/css/style.css";
import "../components/contact/css/superfish.css";
const Trainers = () => {
  return (
    <div id="fh5co-wrapper">
      <div id="fh5co-page">
        <div id="fh5co-header">
          <header id="fh5co-header-section">
            <div className="container">
              <div className="nav-header">
                <a href="#s" className="js-fh5co-nav-toggle fh5co-nav-toggle">
                  <i></i>
                </a>
                <h1 id="fh5co-logo">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    BEFIT<span>GYM</span>
                  </Link>
                </h1>
                <nav id="fh5co-menu-wrap" role="navigation">
                  <ul className="sf-menu" id="fh5co-primary-menu">
                    <li style={{ background: "none" }}>
                      <Link
                        to={"/"}
                        style={{
                          all: "unset",
                          backgroundColor: "none",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li style={{ background: "none" }}>
                      <Link
                        to="/classes"
                        className="fh5co-sub-down active"
                        style={{
                          all: "unset",
                          backgroundColor: "none",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        Classes
                      </Link>
                    </li>
                    <li style={{ background: "none" }}>
                      <Link
                        to="/trainers"
                        style={{
                          all: "unset",
                          backgroundColor: "none",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        Trainers
                      </Link>
                    </li>
                    <li style={{ background: "none" }}>
                      <Link
                        to="/contact"
                        style={{
                          all: "unset",
                          backgroundColor: "none",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        Contact
                      </Link>
                    </li>
                    <li style={{ background: "none" }}>
                      <Link
                        to="/exercises"
                        style={{
                          all: "unset",
                          backgroundColor: "none",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        Exercises
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </div>
        {/* End Of Header */}
        <div
          className="fh5co-parallax"
          style={{ backgroundImage: `url(${TrainersImage})` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
                <div className="fh5co-intro fh5co-table-cell animate-box">
                  <h1 className="text-center">Trainers</h1>
                  <p>
                    Meet our experienced trainers, dedicated to guiding you
                    towards your fitness goals with expertise and personalized
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Of Parallax */}
        <div id="fh5co-team-section" className="fh5co-lightgray-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="heading-section text-center animate-box">
                  <h2>Meet Our Trainers</h2>
                  <p>
                    Meet our dedicated trainers, your guides on the journey to a
                    stronger you.
                  </p>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4 col-sm-6">
                <div
                  className="team-section-grid animate-box"
                  style={{ backgroundImage: `url(${TrainerOne})` }}
                >
                  <div className="overlay-section">
                    <div className="desc">
                      <h3>Ebrahim Sabry</h3>
                      <span>Body Trainer</span>
                      <p>
                        Empowering you to unlock your full potential, our body
                        trainers are here for you
                      </p>
                      <p className="fh5co-social-icons">
                        <a href="#s">
                          <i className="icon-facebook-with-circle"></i>
                        </a>
                        <a href="#s">
                          <i className="icon-instagram-with-circle"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div
                  className="team-section-grid animate-box"
                  style={{ backgroundImage: `url(${TrainerTwo})` }}
                >
                  <div className="overlay-section">
                    <div className="desc">
                      <h3>Yousef Elareshey</h3>
                      <span>Body Builder</span>
                      <p>
                        Transforming dreams into reality, our bodybuilders
                        inspire with dedication, strength, and passion
                      </p>
                      <p className="fh5co-social-icons">
                        <a href="#s">
                          <i className="icon-facebook-with-circle"></i>
                        </a>
                        <a href="#s">
                          <i className="icon-instagram-with-circle"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div
                  className="team-section-grid animate-box"
                  style={{ backgroundImage: `url(${TrainerThree})` }}
                >
                  <div className="overlay-section">
                    <div className="desc">
                      <h3>Sameh Kera</h3>
                      <span>Personal & Online Coach</span>
                      <p>
                        Empowering individuals on their fitness journey, our
                        personal and online coaches bring expertise and
                        personalized guidance.
                      </p>
                      <p className="fh5co-social-icons">
                        <a href="#s">
                          <i className="icon-facebook-with-circle"></i>
                        </a>
                        <a href="#s">
                          <i className="icon-instagram-with-circle"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div id="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4 animate-box">
                  <h3 className="section-title">About Us</h3>
                  <p>
                    Explore the story behind BE FiT gym, our mission, values,
                    and commitment to helping you achieve your fitness goals
                  </p>
                </div>

                <div className="col-md-4 animate-box">
                  <h3 className="section-title">Our Address</h3>
                  <ul className="contact-info">
                    <li>
                      <i className="icon-map-marker"></i>ElDakhaliya - Mansoura
                      - Talkha - MeetElkorma
                    </li>
                    <li>
                      <i className="icon-phone"></i>+20 101 373 3943
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 animate-box">
                  <h3 className="section-title">Drop us a line</h3>
                  <form className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows="7"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        id="btn-submit"
                        className="btn btn-send-message btn-md"
                        value="Send Message"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="row copy-right">
                <div className="col-md-6 col-md-offset-3 text-center">
                  <p>
                    Copyright 2024 <a href="#s">BE FIT GYM</a>. All Rights
                    Reserved. <br />
                    Made with <i className="icon-heart3"></i> by Ahmed
                    Abdalazeem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Trainers;
