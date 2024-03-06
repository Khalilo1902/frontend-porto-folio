import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import store from "./feature/store.ts";
import {RouterProvider} from "react-router-dom";
import router from "./router/router.tsx";
import axios from "axios";
axios.defaults.withCredentials=true
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    ,
)
