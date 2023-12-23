import { useGlobalContext } from "../../../contexts";
import { Chip } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";

const RoomSlider = () => {
  const { numberOfRooms, updateRoomSlider } = useGlobalContext();

  return (
    <>
      <div className="mt-1 mr-1">
        <div className="flex items-center space-x-2">
          <Chip icon={<BusinessIcon />} label={numberOfRooms} color="warning" />
          <div className="w-48">
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={numberOfRooms}
              onChange={(e) => updateRoomSlider(e.target.value)}
              className="slider-thumb-appearance-none slider-thumb-w-6 slider-thumb-h-6 slider-thumb-rounded-full slider-track-h-0.5 slider-track-bg-gray-300 slider-track-rounded-full slider-track-appearance-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomSlider;
