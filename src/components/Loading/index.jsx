import React from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "150vh",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 1,
        backgroundColor: "black",
      }}
    >
      <CircularProgress color="success" />
    </Box>
  );
};

export default Loading;
