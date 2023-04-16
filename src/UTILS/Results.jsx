import { Container, Typography, Box, Stack } from "@mui/material";

export const Results = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h4" component="p">
          Presidential Result
        </Typography>
        <hr
          style={{ width: "100px", height: "5px", backgroundColor: "black" }}
        />
      </Box>
      <Box paddingTop={5}>
        <Typography variant="h5" component="p">
          SLPP
        </Typography>
        <Stack
          sx={{
            border: "2px solid blue",
            width: 600,
          }}
        >
          <div
            style={{ backgroundColor: "green", height: 20, width: 340 }}
          ></div>
        </Stack>

        <Typography variant="h5" component="p">
          APC
        </Typography>
        <Stack
          sx={{
            border: "2px solid blue",
            width: 600,
          }}
        >
          <div
            style={{ backgroundColor: "green", height: 20, width: 400 }}
          ></div>
        </Stack>
        <Typography variant="h5" component="p">
          NGC
        </Typography>
        <Stack
          sx={{
            border: "2px solid blue",
            width: 600,
          }}
        >
          <div
            style={{ backgroundColor: "green", height: 20, width: 500 }}
          ></div>
        </Stack>
        <Typography variant="h5" component="p">
          C4C
        </Typography>
        <Stack
          sx={{
            border: "2px solid blue",
            width: 600,
          }}
        >
          <div
            style={{ backgroundColor: "green", height: 20, width: 200 }}
          ></div>
        </Stack>
        <Typography variant="h5" component="p">
          UNDP
        </Typography>
        <Stack
          sx={{
            border: "2px solid blue",
            width: 600,
          }}
        >
          <div
            style={{ backgroundColor: "green", height: 20, width: 100 }}
          ></div>
        </Stack>
        <Typography variant="h5" component="p">
          RUFP
        </Typography>
        <Stack
          sx={{
            border: "2px solid blue",
            width: 600,
          }}
        >
          <div
            style={{ backgroundColor: "green", height: 20, width: 50 }}
          ></div>
        </Stack>
      </Box>
    </Container>
  );
};
