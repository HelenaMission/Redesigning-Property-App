import Hero from "../../../components/kelsieComponents/homePage/Hero";
import Navbar from "../../../components/kelsieComponents/homePage/NavBar";
import Sponsors from "../../../components/kelsieComponents/homePage/Sponsors";
import Services from "../../../components/kelsieComponents/homePage/Services";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Image  */}
      <Hero />

      {/* Sponsors Bar  */}
      <Sponsors />

      {/* Services Section  */}
      <Services />

      {/* Placeholder for Component 5 */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Component 5
          </h2>
          {/* Add your content for Component 5 here */}
        </div>
      </section>

      {/* Placeholder for Component 6 */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Component 6
          </h2>
          {/* Add your content for Component 6 here */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
