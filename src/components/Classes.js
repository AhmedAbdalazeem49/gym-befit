import React from "react";
import { Link } from "react-router-dom";
import ClassesImage from "../Assets/images/classes.jpg";
import boxing from "../Assets/images/fit-boxing.svg";
import {
  default as bodyCombat,
  default as cycling,
} from "../Assets/images/fit-cycling.svg";
import massage from "../Assets/images/fit-massage.svg";
import swimming from "../Assets/images/fit-swimming.svg";
import yogaPrograms from "../Assets/images/fit-yoga.svg";
import "../components/contact/css/animate.css";
import "../components/contact/css/bootstrap.css";
import "../components/contact/css/icomoon.css";
import "../components/contact/css/style.css";
import "../components/contact/css/superfish.css";
const Classes = () => {
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
          style={{ backgroundImage: `url(${ClassesImage})` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
                <div className="fh5co-intro fh5co-table-cell animate-box">
                  <h1 className="text-center">Classes</h1>
                  <p>
                    Dive into our diverse range of classes, sculpting bodies and
                    minds with every energizing session
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Of Parallax */}
        <div id="fh5co-programs-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="heading-section text-center animate-box">
                  <h2>Our Programs</h2>
                  <p>
                    Experience an array of invigorating programs at our gym,
                    designed to elevate your fitness journey and unlock your
                    full potential.
                  </p>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4 col-sm-6">
                <div className="program animate-box">
                  <img src={bodyCombat} alt="body Combat" />
                  <h3>Body Combat</h3>
                  <p>
                    Engage in our invigorating Body Combat program, where you'll
                    channel your inner warrior and unleash your strength and
                    agility
                  </p>
                  <span>
                    <a href="#s" className="btn btn-default">
                      Join Now
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="program animate-box">
                  <img src={yogaPrograms} alt="" />
                  <h3>Yoga Programs</h3>
                  <p>
                    Immerse yourself in the serene ambiance of our Yoga
                    Programs, finding inner peace and balance through mindful
                    movement and breath.
                  </p>
                  <span>
                    <a href="#s" className="btn btn-default">
                      Join Now
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="program animate-box">
                  <img src={cycling} alt="" />
                  <h3>Cycling Program</h3>
                  <p>
                    Pedal your way to fitness in our exhilarating Cycling
                    Program, designed to boost endurance, burn calories, and
                    strengthen your legs.
                  </p>
                  <span>
                    <a href="#s" className="btn btn-default">
                      Join Now
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="program animate-box">
                  <img src={boxing} alt="Cycling" />
                  <h3>Boxing Fitness</h3>
                  <p>
                    Step into the ring with our dynamic Boxing Fitness classes,
                    where you'll learn proper technique while building endurance
                    and confidence.
                  </p>
                  <span>
                    <a href="#s" className="btn btn-default">
                      Join Now
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="program animate-box">
                  <img src={swimming} alt="" />
                  <h3>Swimming Program</h3>
                  <p>
                    Dive into our refreshing Swimming Program, offering a
                    full-body workout that's easy on the joints and perfect for
                    all fitness levels.
                  </p>
                  <span>
                    <a href="#s" className="btn btn-default">
                      Join Now
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="program animate-box">
                  <img src={massage} alt="" />
                  <h3>Massage</h3>
                  <p>
                    Indulge in relaxation with our rejuvenating Massage
                    services, soothing tired muscles and promoting overall
                    well-being and tranquility.
                  </p>
                  <span>
                    <a href="#s" className="btn btn-default">
                      Join Now
                    </a>
                  </span>
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

export default Classes;
