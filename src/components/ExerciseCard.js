import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        style={{
          border: "2px solid #000",
          borderRadius: "10px",
          marginBottom: "10px",
          width: "294px",
          height: "294px",
        }}
      />
      <Stack direction="row" justifyContent={"center"}>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "10px",
            textTransform: "capitalize",
            padding: "5px 15px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "10px",
            textTransform: "capitalize",
            padding: "5px 15px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight={"bold"}
        mt="11px"
        pb="10px"
        textTransform={"capitalize"}
        fontSize="22px"
        textAlign={"center"}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
