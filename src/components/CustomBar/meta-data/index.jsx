import { useGlobalContext } from "../../../contexts";
import { Image } from "react-bootstrap";
import Blank from "./blank";
import Filled from "./filled";
import logo from "../../../assets/img/logoHousez.png";

const MetaData = () => {
  const {
    housingInformation: { location, sqft, bath, balcony, rooms, price },
    counter,
  } = useGlobalContext();

  return (
    <>
      <div className="bg-gray-900">
        <div className="container mx-auto p-4">
          <div className="flex items-center space-x-4">
            <div>
              <Image src={logo} width="69" responsive />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Predicta Estate</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-4">
        {location && rooms > 0 && price > 0 ? (
          <Filled
            location={location}
            sqft={sqft}
            bath={bath}
            balcony={balcony}
            price={price}
            rooms={rooms}
          />
        ) : location && counter > 0 ? (
          <Filled
            location={location}
            sqft={sqft}
            bath={bath}
            balcony={balcony}
            price="Not Found !"
            rooms={rooms}
          />
        ) : (
          <Blank />
        )}
      </div>
    </>
  );
};

export default MetaData;
