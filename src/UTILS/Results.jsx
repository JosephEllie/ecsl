import { Container, Typography, Box, Stack } from "@mui/material";
import { News } from "./news";

export const Results = () => {
  return (
    <Container>
      <Box sx={{ border: "2px solid red", width: 500, borderRadius: 45 }}>
        <Typography textAlign="center" variant="h5" component="p">
          Presidential Result
        </Typography>
      </Box>
      <Box paddingTop={5}>
        <Typography variant="h5" component="p">
          SLPP
        </Typography>
        <Stack
          sx={{ border: "2px solid blue", width: 200, height: 20 }}
        ></Stack>

        <Typography variant="h5" component="p">
          APC
        </Typography>
        <Stack
          sx={{ border: "2px solid blue", width: 200, height: 20 }}
        ></Stack>
        <Typography variant="h5" component="p">
          NGC
        </Typography>
        <Stack
          sx={{ border: "2px solid blue", width: 200, height: 20 }}
        ></Stack>
        <Typography variant="h5" component="p">
          C4C
        </Typography>
        <Stack
          sx={{ border: "2px solid blue", width: 200, height: 20 }}
        ></Stack>
        <Typography variant="h5" component="p">
          UNDP
        </Typography>
        <Stack
          sx={{ border: "2px solid blue", width: 200, height: 20 }}
        ></Stack>
        <Typography variant="h5" component="p">
          RUFP
        </Typography>
        <Stack
          sx={{ border: "2px solid blue", width: 200, height: 20 }}
        ></Stack>
      </Box>
      <News />
    </Container>
  );
};
