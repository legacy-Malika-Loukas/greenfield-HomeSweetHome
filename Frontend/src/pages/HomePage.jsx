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
      <section className="cards-list" >
        {info}
      </section>

    </div>
   );
}

export default HomePage;