import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ExerciseDetail from "./Pages/Exercisedetail";
import Contact from "./components/Contact";
import Classes from "./components/Classes";
import Trainers from "./components/Trainers";
import Home from "./components/Home";
import ExercisesPage from "./Pages/Exercises";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home/> } />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/trainers" element={<Trainers/> } />
      </Routes>
    </Box>
  );
};

export default App;
