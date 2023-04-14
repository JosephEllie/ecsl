import { Box, Container } from "@mui/material";
import { News } from "./News";
import { Login } from "./Login";

export const LandingPage = () => {
  return (
    <Container>
      <Box
        paddingTop={5}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <News />
        <Login />
      </Box>
    </Container>
  );
};
