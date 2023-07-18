import HomeHeroSection from "./HomeHeroSection";
import HomeFeaturedSection from "./HomeFeaturedSection";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function toHomes(){
    navigate("/homes")
  }

  return ( 
    <div>
      <HomeHeroSection />
      <br />
      <br />
      <div className="featured-text">
        <h2>Explore our Homes. <span className="to-home" onClick={() => {toHomes()}} >View All Homes</span></h2>
        
        <p>A selection of homes for all your desires</p>
      </div>
      
        <br />
      {/* <section className="cards-list" >
        {info}
      </section> */}
      <HomeFeaturedSection/>

    </div>
   );
}

export default HomePage;