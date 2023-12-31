import bed from '../../images/listingPage/bed.jpg';
import bath from '../../images/listingPage/bath.jpg';
import Carousel from '../../components/listingPage/Carousel.jsx';

export default function PropertyCard({ matchedProperties, initialProperties }) {
  const propertiesToDisplay = matchedProperties.length > 0 ? matchedProperties : initialProperties;

  return (
    <div className="relative property-grid grid grid-cols-3 gap-9 font-['Plus Jakarta Sans'] flex flex-wrap justify-center">
      {propertiesToDisplay.map((property, index) => (
        <div className='carousel relative card w-96 bg-slate-200 shadow-xl' key={property._id}>
          <Carousel
            images={[property.img.img1, property.img.img2, property.img.img3]}
            index={property.img.img2 && property.img.img3 ? 0 : -1}
          />
          <div className='card-body'>
            <div className='w-[346px] h-7 text-gray-900 text-lg font-bold'>
              {property.address && (
                <div>
                  {property.address.unit_number ? `${property.address.unit_number} / ` : ''}
                  {property.address.street_number} {property.address.street_name}, {property.address.suburb}
                </div>
              )}
            </div>
            <div className='price-box w-[346px] h-5 text-gray-900 text-sm font-bold tracking-wider leading-tight'>
              <span>${property.price}</span>
              <span>/week</span>
            </div>
            <div className='beds-baths h-6 flex justify-start space-x-6'>
              <div className='w-6 h-6 mr-5 flex space-x-4'>
                <img src={bed} alt='bed logo' />
                <p>{property.bed}</p>
              </div>
              <div className='w-6 h-6 flex space-x-4'>
                <img src={bath} alt='bath logo' />
                <p>{property.bath}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
