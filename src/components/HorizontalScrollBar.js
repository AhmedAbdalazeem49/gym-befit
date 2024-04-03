import { Box } from "@mui/material";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data, isBodyParts, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      <Box sx={{ display: "flex" }}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m={"0 5px"}
          >
            {isBodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Box>
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
