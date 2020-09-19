import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div style={{ backgroundColor: "#cfe8fc", height: "100vh" }}>
          <Typography>Hello World</Typography>
        </div>
      </Container>
    </React.Fragment>
  );
}
