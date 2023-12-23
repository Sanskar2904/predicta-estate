import RoomIcon from "@mui/icons-material/Room";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ChairIcon from "@mui/icons-material/Chair";
import BathtubIcon from "@mui/icons-material/Bathtub";
import BalconyIcon from "@mui/icons-material/Balcony";
import RoofingRoundedIcon from "@mui/icons-material/RoofingRounded";

const Filled = ({ location, sqft, bath, balcony, rooms, price }) => {
  const imageLink = `https://source.unsplash.com/1920x1080/?${location}`;
  const magicBricksLink = `https://www.magicbricks.com/${location}-in-Bangalore-Overview`;

  return (
    <>
      <a href={magicBricksLink} target="_blank" rel="noopener noreferrer">
        <img className="w-full" src={imageLink} alt="bangalore" />
      </a>

      <div className="p-4 ">
        <h3 className="text-white text-center text-xl md:text-2xl lg:text-3xl">
          Housing Price:
        </h3>

        <div className="text-white">
          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-red-500">
              <RoomIcon />
            </span>{" "}
            Location ⮕ {location}
          </p>

          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-red-500">
              <RoofingRoundedIcon />
            </span>{" "}
            Area ⮕ {sqft} Sqft
          </p>

          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-red-500">
              <BathtubIcon />
            </span>{" "}
            Bath ⮕ {bath}
          </p>

          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-red-500">
              <BalconyIcon />
            </span>{" "}
            Balcony ⮕ {balcony}
          </p>

          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-red-500">
              <ChairIcon />
            </span>{" "}
            Rooms ⮕ {rooms} BHK
          </p>

          <p className="text-base md:text-lg lg:text-xl">
            <span className="text-red-500">
              <MonetizationOnIcon />
            </span>{" "}
            Price ⮕ {isNaN(price) ? price : `₹ ${price} LAKHS`}
          </p>
        </div>
      </div>
    </>
  );
};

export default Filled;
