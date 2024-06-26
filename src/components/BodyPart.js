import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../Assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      component="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        background: "#fff",
        width: "95px",
        height: "95px",
        cursor: "pointer",
        gap: "10px",
        borderTop: bodyPart === item ? "4px solid #FF2625" : "4px solid #000",
        "&:hover": {
          background: "#f5f5f5",
        },
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="12px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
