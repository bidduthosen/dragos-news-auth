import { ClimbingBoxLoader, ClipLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="h-svh  flex justify-center items-center">
            <ClimbingBoxLoader color="#36d7b7" loading={true} size={40} speedMultiplier={8}  />
        </div>
    );
};

export default Loader;