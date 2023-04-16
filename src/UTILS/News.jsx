import { Container, Typography } from "@mui/material";

export const News = () => {
  return (
    <Container>
      <Typography variant="h4" component="p">
        Latest News
      </Typography>
      <hr style={{ width: "100px", height: "5px", backgroundColor: "black" }} />
    </Container>
  );
};
