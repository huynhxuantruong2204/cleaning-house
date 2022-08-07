import { Box, Fab, Link } from "@mui/material";
import CallRoundedIcon from "@mui/icons-material/CallRounded";

export default function FloatingButton() {
  return (
    <>
      <div className="fixed bottom-0 right-0 h-16 w-16 z-10">
        <Link href="tel:0386089003">
          <Fab color="secondary" size="large" aria-label="tel">
            <CallRoundedIcon />
          </Fab>
        </Link>
      </div>
    </>
  );
}
