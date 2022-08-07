import Carousel from "react-material-ui-carousel";
import CarouselItem from "../../components/CarouselItem";

export default function ProductHero() {
  var items = [
    {
      name: "",
      image: `${process.env.PUBLIC_URL}/cores/images/banner/1.jpg`,
      description: "",
    },
    {
      name: "",
      image: `${process.env.PUBLIC_URL}/cores/images/banner/2.jpg`,
      description: "",
    },
    {
      name: "",
      image: `../cores/images/banner/3.jpg`,
      description: "",
    },
    {
      name: "",
      image: `${process.env.PUBLIC_URL}/cores/images/banner/4.jpg`,
      description: "",
    },
    {
      name: "",
      image: `${process.env.PUBLIC_URL}/cores/images/banner/5.jpg`,
      description: "",
    },
    {
      name: "",
      image: `${process.env.PUBLIC_URL}/cores/images/banner/6.jpg`,
      description: "",
    },
    {
      name: "",
      image: `${process.env.PUBLIC_URL}/cores/images/banner/7.jpg`,
      description: "",
    },
    {
      name: "",
      image: `${process.env.PUBLIC_URL}/cores/images/banner/8.jpg`,
      description: "",
    },
    {
      name: "",
      image: `${process.env.PUBLIC_URL}/cores/images/banner/9.jpg`,
      description: "",
    },
    {
      name: "",
      image: `${process.env.PUBLIC_URL}/cores/images/banner/10.jpg`,
      description: "",
    },
  ];
  return (
    <Carousel
      navButtonsAlwaysInvisible={false}
      navButtonsAlwaysVisible={true}
      swipe
      indicators={false}
      autoPlay={true}
      className="md:h-full sm:h-72"
    >
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
}
