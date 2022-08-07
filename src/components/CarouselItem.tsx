import ProductHeroLayout from "../pages/ProductHeroLayout";

export default function CarouselItem(props: any) {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${props.item.image})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={props.item.image}
        alt="increase priority"
      />
    </ProductHeroLayout>
  );
}
