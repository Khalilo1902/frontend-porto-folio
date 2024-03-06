import Lottie from "lottie-react";
import error404 from "../assets/error404.json"

const NotFoundPage = () => {
    return (
        <div className=" h-screen flex items-center justify-center w-full"> 
        
        <Lottie className=" text-[400px]" animationData={error404}/>
        
        </div>

    );
}

export default NotFoundPage;