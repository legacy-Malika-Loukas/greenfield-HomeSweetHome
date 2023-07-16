import HomeHeroSection from "./HomeHeroSection";
import HomeFeaturedSection from "./HomeFeaturedSection";
import data from "./TemporaryData";

function HomePage() {

  let info = data.map(item =>{
    return(
      <HomeFeaturedSection
        key={item.id}
        item={item}  
      />
    )
  })

  return ( 
    <div>
      <HomeHeroSection />
      <br />
      <br />
      <div className="featured-text">
        <h2>Explore our Homes.</h2>
        <p>A selection of homes for all your desires</p>
      </div>
      
        <br />
      <section className="cards-list" >
        {info}
      </section>

    </div>
   );
}

export default HomePage;