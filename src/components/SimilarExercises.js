import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import HorizontalScrollbar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "25px", xs: "20px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="20px"
      >
        <h2 style={{ textAlign: "center" }}>
          Similar
          <span
            style={{
              color: "#FF2625",
              textTransform: "capitalize",
              display: "inline-block",
              marginLeft: "1px",
              marginRight: "2px",
            }}
          >
            Target Muscle
          </span>
          exercises
        </h2>
      </Typography>
      <Stack>
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar
            isBodyParts={false}
            data={targetMuscleExercises}
          />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          ml: "20px",
          mt: { lg: "50px", xs: "20px" },
        }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        <h2 style={{ textAlign: "center" }}>
          Similar
          <span
            style={{
              color: "#FF2625",
              textTransform: "capitalize",
              margin: "0px 2px",
            }}
          >
            Equipment
          </span>
          exercises
        </h2>
      </Typography>
      <Stack>
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar isBodyParts={false} data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
