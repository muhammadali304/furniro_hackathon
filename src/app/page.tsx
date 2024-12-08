import Hero from "./Components/Hero";
import Products from "./Components/Products";
import Slides from "./Components/Slides";
import Subhero from "./Components/Subhero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Subhero />
      <Products />
      <Slides />
    </div>
  );
}
