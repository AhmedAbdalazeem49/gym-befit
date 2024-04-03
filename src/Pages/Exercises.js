import { Box } from "@mui/material";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import ExerciseImage from "../Assets/images/exercises.jpg";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

const ExercisesPage = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
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
            style={{ backgroundImage: `url(${ExerciseImage})` }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
                  <div className="fh5co-intro fh5co-table-cell animate-box">
                    <h1 className="text-center">Exercises</h1>
                    <p>
                      Explore our meticulously crafted exercises section
                      tailored to elevate your fitness journey with precision
                      and effectiveness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Of Parallax */}
          {/* End Of Contact Hero */}

          <SearchExercises
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
          <Exercises
            exercises={exercises}
            setExercises={setExercises}
            bodyPart={bodyPart}
          />
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
                        <i className="icon-map-marker"></i>ElDakhaliya -
                        Mansoura - Talkha - MeetElkorma
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
    </Box>
  );
};

export default ExercisesPage;
