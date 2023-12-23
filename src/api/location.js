import axios from "axios";

const getLocation = async () => {
  const { data } = await axios({
    method: "GET",
    url: "https://predicta-estate.onrender.com/getlocation",
  });

  return data.location;
};

export default getLocation;
