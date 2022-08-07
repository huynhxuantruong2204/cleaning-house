import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        bgcolor: "secondary.light",
      }}
    >
      <Container sx={{ mt: 5, mb: 5, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/cores/images/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/cores/images/cleaning.svg`}
                alt="suitcase"
                sx={{ height: 55 }}
              />
              {/* <CleaningServicesIcon fontSize="large" /> */}
              <Typography variant="h6" sx={{ my: 5 }}>
                Vệ sinh dọn dẹp
              </Typography>
              <Typography variant="h5">
                Khách sạn, nhà ở dân dụng, cơ quan công trình, trường học, quán
                xá ...
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/cores/images/windown.svg`}
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Dịch vụ lau kính
              </Typography>
              <Typography variant="h5">
                Lau kính Show room, làm mới, đánh bóng gạch đá các loại
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/cores/images/industry.svg`}
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Vệ sinh công nghiệp
              </Typography>
              <Typography variant="h5">
                Cung cấp tạp vụ định kỳ, hóa chất, máy móc & dụng cụ trong ngành
                vệ sinh công nghiệp.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
