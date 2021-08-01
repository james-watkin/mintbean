import React from "react";
import { Box } from "@chakra-ui/react";

export const Wrapper = ({ children, variant = "regular" }) => {
  //   console.log(props);
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};
