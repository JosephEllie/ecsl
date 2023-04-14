import {
  Typography,
  Box,
  Container,
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from "@mui/material";
import { useState } from "react";

export const Login = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Container sx={{ width: 800, textAlign: "center" }}>
      <Typography variant="p" component="h3" fontWeight={400}>
        Select Login Type and Sign in
      </Typography>
      <Box py={10}>
        <Paper>
          <Grid
            container
            spacing={3}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
            paddingBottom={5}
          >
            <Grid item xs={12}>
              <TextField label="Username"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type={"password"}></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    label={"Keep me logged in"}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth> Login </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};
