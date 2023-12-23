import CustomInput from "../components/CustomInput";
import CustomMap from "../components/CustomMap";
import CustomBar from "../components/CustomBar";

const Main = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="m-0.8">
          <div className="m-1 ">
            <CustomInput />

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-9">
                <CustomMap />
              </div>

              <div className="col-span-12 md:col-span-3">
                <CustomBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
