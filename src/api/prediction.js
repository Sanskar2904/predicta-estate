import axios from "axios";
import { closestMatch } from "closest-match";

const prediction = async (searchRequest, availableLocation, setHousePrice) => {
  const { bath, bhk, name, sqft } = searchRequest;

  try {
    const { data } = await axios.post(
      "https://predicta-estate.onrender.com/getpredictedprice",
      {
        total_sqft: sqft,
        bath: bath,
        bhk: bhk,
        location: closestMatch(name, availableLocation) || name,
      }
    );

    console.log(data);

    setHousePrice(data.estimated_price);
  } catch (error) {
    console.error("Error predicting house price:", error);
  }
};

export default prediction;
