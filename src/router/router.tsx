import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage.tsx";
import AuthPage from "../pages/AuthPage.tsx";
import VerifyAccount from "../verifyAccount/verifyAccount.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<NotFoundPage />,
        children:[
            {
                path:"/home",
                element:<HomePage/>
            },
            {
                path:"/",
                element:<AuthPage/>
            },
            {
                path: "/user/verify_account/:token",
                element: <VerifyAccount />,
              },
             
        ]
    }
])

export default router