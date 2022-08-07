import "./App.css";
import FloatingButton from "./components/FloatingButton";
import useService from "./hooks/Services/useService";
import AppFooter from "./pages/AppFooter";
import AppAppBar from "./pages/header/AppAppBar";
import ProductHero from "./pages/header/ProductHero";
import ProductCategories from "./pages/ProductCategories";
import ProductValues from "./pages/ProductValues";
import { TService } from "./types/index.model";
import withRoot from "./withRoot";

function App() {
  const { datas } = useService();

  return (
    <>
      <div className="App">
        <FloatingButton />
        <AppAppBar />
        <ProductHero />
        <ProductValues />
        {datas &&
          datas.map((item: TService, index) => {
            return <ProductCategories data={item} key={index} />;
          })}
        {/* <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero /> */}
        <AppFooter />
      </div>
    </>
  );
}

export default withRoot(App);
