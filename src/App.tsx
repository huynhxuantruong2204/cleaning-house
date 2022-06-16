import "./App.css";
import AppFooter from "./pages/AppFooter";
import AppAppBar from "./pages/header/AppAppBar";
import ProductHero from "./pages/header/ProductHero";
import ProductCategories from "./pages/ProductCategories";
import ProductCTA from "./pages/ProductCTA";
import ProductHowItWorks from "./pages/ProductHowItWorks";
import ProductSmokingHero from "./pages/ProductSmokingHero";
import ProductValues from "./pages/ProductValues";
import withRoot from "./withRoot";

function App() {
  return (
    <div className="App">
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </div>
  );
}

export default withRoot(App);
