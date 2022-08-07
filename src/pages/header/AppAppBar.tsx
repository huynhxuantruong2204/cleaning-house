import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../../components/AppBar/AppBar";
import Toolbar from "../../components/ToolBar/ToolBar";
import { Avatar, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Avatar
            className="float-left h-4"
            src={`${process.env.PUBLIC_URL}/cores/images/logo.jpg`}
          />
          <Link
            variant="h6"
            className="sm:text-base"
            underline="none"
            color="inherit"
            href="#"
          >
            {"Vệ sinh công nghiệp Quy Nhơn"}
          </Link>

          <Typography component="p">
            <Link href="tel:0386089003" style={{ color: "#FFF" }}>
              <PhoneIcon />
              Tel: 038 608 9003
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
