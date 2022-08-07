import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import moment from "moment";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "fr-FR",
    name: "Français",
  },
];

export default function AppFooter() {
  return (
    <Typography component="footer" sx={{ bgcolor: "secondary.light" }}>
      <Container className="mt-8">
        <Grid item md={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.2590507480213!2d109.2007489141432!3d13.763245500737932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6cc77551bdd9%3A0xda3c6b6d86ae4dbb!2zNjAsIDkgxJAuIE5ndXnhu4VuIFh1w6JuIE5oxKksIFF1YW5nIFRydW5nLCBUaMOgbmggcGjhu5EgUXVpIE5oxqFuLCBCw6xuaCDEkOG7i25oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1656869631902!5m2!1svi!2s"
            className="h-screen w-full"
            loading="lazy"
          ></iframe>
        </Grid>
        <Grid item md={12}>
          <Typography className="py-3.5 text-left">
            Copyright © {moment().format("YYYY")}
            <Link href="#" underline="hover">
              {" vesinhsachquynhon.com"}
            </Link>
          </Typography>
        </Grid>
      </Container>
    </Typography>
  );
}
