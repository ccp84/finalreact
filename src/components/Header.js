import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Header() {
  return (
    <React.Fragment>
      <CssBaseline>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              PeloPals
            </Typography>
            <nav>
              <Link
                variant="button"
                color="text.primary"
                href="/"
                sx={{ my: 1, mx: 1.5 }}
              >
                Home
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="/register"
                sx={{ my: 1, mx: 1.5 }}
              >
                Sign Up
              </Link>
            </nav>
            <Button href="/signin" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
            <Button href="/signout" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </CssBaseline>
    </React.Fragment>
  );
}

export default Header;
