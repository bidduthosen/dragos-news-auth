import { ClimbingBoxLoader, ClipLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="h-svh  flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl py-3">Loadin...</h1>
            <ClimbingBoxLoader color="#36d7b7" loading={true} size={40} speedMultiplier={8}  />
        </div>
    );
};

export default Loader;