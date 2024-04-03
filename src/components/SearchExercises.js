import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { exerciseOptions, fetchData } from "../Utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollBar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = useCallback(async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Stack alignItems={"center"} mt="20px" justifyContent={"center"} p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "36px", xs: "24px" } }}
        mb="30px"
        textAlign={"center"}
      >
        Discover Amazing Exercises
      </Typography>
      <Box position="relative" mb="40px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "8px" },
            width: { lg: "600px", xs: "300px" },
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
          }}
          height="56px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          sx={{
            width: { lg: "110px", xs: "80px" },
            fontSize: { lg: "18px", xs: "14px" },
            height: "49px",
            backgroundColor: "#000",
            marginLeft: "2px"
          }}
          onClick={handleSearch}
          className="button"
        >
          <span class="span">🔎</span>
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          isBodyParts={true}
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
