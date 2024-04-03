import { Button, Stack, Typography } from "@mui/material";
import React from "react";

import BodyPartImage from "../Assets/icons/body-part.png";
import EquipmentImage from "../Assets/icons/equipment.png";
import TargetImage from "../Assets/icons/target.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="30px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
        mt: "30px",
      }}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
        className="detail-image"
        style={{ border: "2px solid #000", borderRadius: "10px" }}
      />
      <Stack sx={{ gap: { lg: "10px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "34px", xs: "20px" } }}
          fontWeight={700}
          textTransform="capitalize"
          color={"#000"}
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Exercises keep you strong.
          <p style={{ textTransform: "capitalize" }}>{name}</p>
          <p style={{marginTop : '-30px' , marginBottom : "5px"}}>
            is one of the best exercises to target your {target}. <br />
            It will help you improve your mood and gain energy.
          </p>
        </Typography>
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="10px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "40px", height: "40px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
              color={"#000"}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
