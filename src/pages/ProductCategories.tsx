import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import { TChildService, TService } from "../types/index.model";
import { ImageList, ImageListItem } from "@mui/material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const images = [
  {
    url: `${process.env.PUBLIC_URL}/cores/images/house/1.jpg`,
    width: "39%",
  },
  {
    url: `${process.env.PUBLIC_URL}/cores/images/house/2.jpg`,
    width: "19%",
  },
  {
    url: `${process.env.PUBLIC_URL}/cores/images/house/3.jpg`,
    width: "39%",
  },
  {
    url: `${process.env.PUBLIC_URL}/cores/images/house/4.jpg`,
    width: "38%",
  },
  {
    url: `${process.env.PUBLIC_URL}/cores/images/house/5.jpg`,
    width: "38%",
  },
  {
    url: `${process.env.PUBLIC_URL}/cores/images/house/6.jpg`,
    width: "24%",
  },
  {
    url: `${process.env.PUBLIC_URL}/cores/images/house/7.jpg`,
    width: "40%",
  },
  {
    url: `${process.env.PUBLIC_URL}/cores/images/house/8.jpg`,
    width: "20%",
  },
  {
    url: `${process.env.PUBLIC_URL}/cores/images/house/9.jpg`,
    width: "40%",
  },
];

type ProductCategoriesProps = {
  data?: TService;
  key: number;
};

// const StyledImageListItem = styled(ImageListItem)({
//   "& .img.MuiImageListItem-img": {
//     transition: transform .2s,
//   },
//   "& .img.MuiImageListItem-img:hover": {
//     transform: scale(1.5),
//   },
// });

export default function ProductCategories({
  data,
  key,
}: ProductCategoriesProps) {
  return (
    <Container key={key} component="section" sx={{ mb: 4 }}>
      {data && (
        <>
          <Typography
            className="py-3.5"
            variant="h4"
            marked="center"
            align="center"
            component="h2"
          >
            {data.title}
          </Typography>

          <ImageList
            // sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={164}
          >
            {data.child?.map((image: TChildService, index) => (
              <ImageListItem
                key={index}
                cols={image.cols || 1}
                rows={image.rows || 1}
              >
                <img
                  className="origin-center rotate-45"
                  {...srcset(image.path, 121, image.rows, image.cols)}
                  alt={image.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </>
      )}
    </Container>
  );
}
