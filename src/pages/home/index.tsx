import Donations from "../donations/Donations";
import GalleryComponent from "@/components/layout/Gallery";
import AboutUs from "@/components/layout/AboutUs";
import CarouselComponent from "@/components/layout/Carousel";
import Hero from "@/components/layout/Hero";

const Home = () => {

  return (
    <>
      <Hero />
      <Donations/>
      <CarouselComponent/>
      <GalleryComponent/>
      <AboutUs/>
    </>
  );
};

export default Home;
