import React, { Component } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import "./page1.css";

export default class Page1 extends Component {
  render() {
    return (
      <Container>
        {/* Title */}
        <Typography variant="h1" color="primary">
          Material UI
        </Typography>

        {/* Grid - Paper - Radio*/}
        <Typography variant="h6" color="secondary">
          Grid - Paper - Radio
        </Typography>
        <br />
        <Grid container className="root" spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              justify="space-evenly"
              spacing={2}
              className="gridBackgroundColor"
            >
              {[0, 1, 2, 3, 4].map((value) => (
                <Grid key={value} item>
                  <Paper className="paper" elevation={3}>
                    <Typography variant="h6" color="textSecondary">
                      Hello
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Paper className="control">
              <Grid container>
                <Grid item>
                  <RadioGroup row>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    ))}
                  </RadioGroup>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
