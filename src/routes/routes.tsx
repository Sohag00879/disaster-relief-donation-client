import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import CreateDonation from "../pages/dashboard/CreateDonation";
import AllDonations from "../pages/dashboard/AllDonations";
import EditDonation from "@/pages/dashboard/EditDonation";
import DonationsDetails from "@/pages/donationDetails.tsx/DonationsDetails";
import Chart from "@/pages/dashboard/Chart";
import DonationsAll from "@/pages/donationsAll/DonationsAll";
import RootDashboard from "@/pages/dashboard/RootDashboard";
import LeaderBoard from "@/pages/leaderBoard/LeaderBoard";
import Community from "@/pages/community/Community";
import CreateTestimonaials from "@/pages/dashboard/CreateTestimonaials";
import AboutUs from "@/pages/aboutUs/AboutUs";
import Volunteer from "@/pages/volunteer/Volunteer";


const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'donations',
                element:<DonationsAll/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'/donations/:donationId',
                element:<DonationsDetails/>
            },
            {
                path:'leaderboard',
                element:<LeaderBoard/>
            },
            {
                path:'community',
                element:<ProtectedRoute><Community/></ProtectedRoute>
            },
            {
                path:'about-us',
                element:<AboutUs/>
            },{
                path:'/volunteer',
                element:<Volunteer/>
            }
        ]
    },{
        path:'/dashboard',
        element:<ProtectedRoute><RootDashboard/></ProtectedRoute>,
        children:[
                {
                    index:true,
                    element:<Chart/>
                },
                {
                    path:'create-donation',
                    element:<CreateDonation/>
                },
                {
                    path: 'donations',
                    element: <AllDonations/>,
                },
                {
                    path: 'donations/edit/:id',
                    element: <EditDonation/>
                },
                {
                    path:'create-testimonial',
                    element:<CreateTestimonaials/>
                }
        ]
    }
])

export default router;