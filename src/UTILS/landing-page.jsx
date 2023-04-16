import { Box, Container } from "@mui/material";
import { Results } from "./Results";
import { Login } from "./Login";

export const LandingPage = () => {
  return (
    <Container>
      <Box
        paddingTop={5}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Results />
        <Login />
      </Box>
    </Container>
  );
};
