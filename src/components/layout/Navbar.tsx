import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";
import logo from '../../assets/business-logo.png';
import ThemeSwitch from "../ui/themeSwitch";

const Navbar = () => {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const unAuthenticatedPaths = [
    {
      routeName: "Home",
      path: "/home",
    },
    {
      routeName: "All Donations",
      path: "/donations",
    },
    {
      routeName:'Leaderboard',
      path:'/leaderboard'
    },
    {
      routeName:'Community',
      path:'/community'
    },
    {
      routeName:'About Us',
      path:'/about-us'
    },
    {
      routeName:<button className="btn btn:hover">Login</button>,
      path:'/login'
    },
  {
    routeName:<ThemeSwitch/>,
    path:''
  }
  ];

  const authenTicatedPaths = [
    {
      routeName: "Home",
      path: "/home",
    },
    {
      routeName: "All Donations",
      path: "/donations",
    },
    {
      routeName:'Leaderboard',
      path:'/leaderboard'
    },
    {
      routeName:'Community',
      path:'/community'
    },
    {
      routeName:'About Us',
      path:'/about-us'
    },
    {
      routeName: "Dashboard",
      path: "/dashboard",
    },
    {
      routeName: (
       <button className="btn btn:hover" onClick={handleLogout} >Logout</button>
      ),
      path: "/login",
    },
    {
      routeName:<ThemeSwitch/>,
      path:''
    }
  ]; 

  return (
    <nav className="p-2 bg-neutral-950">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-[#008080] hover:cursor-pointer">
         <img width={90} height={90} src={logo}/>
        </div>

        <div className="lg:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="lg:flex lg:flex-row lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
          {!token &&
            unAuthenticatedPaths.map((item, i) => (
              <div key={i}>
                <NavLink
                  to={item.path}
                  className="text-white px-4 py-2 hover:text-[#008080] cursor-pointer"
                >
                  {item.routeName}
                </NavLink>
              </div>
            ))}
          {token &&
            authenTicatedPaths.map((item) => (
              <div>
                <NavLink
                  to={item.path}
                  className="text-white  px-4 py-2 hover:text-[#008080] cursor-pointer"
                >
                  {item.routeName}
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
