import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
// import Home from "./pages/Home";

import Single from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"

//// NEWLY ADDED ////
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Devices from './pages/Devices/Devices';
import GroceryList from './pages/GroceryList/GroceryList';
import Inventory from './pages/Inventory/Inventory';
import SmartMenu from './pages/SmartMenu/StartMenu';
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import NewUser from "./pages/NewUser/NewUser";
import Profile from "./pages/Profile/Profile";
import Pantry from "./pages/Pantry/Pantry";
import htmlDynamicTableFunction from "./pages/Devices/htmlDynamicTableFunction";
import TableTest from "./pages/Devices/TableTest";
import tableTest2 from "./pages/Devices/TableTest2";
import FoodTableTest from "./pages/Inventory/htmlFoodDTableFunction";
import FoodTableTest2 from "./pages/Inventory/FoodTableTest2";
import DeviceTest from "./pages/Inventory/DeviceList";
import GroceryTest from "./pages/GroceryList/GroceryListTableTest";

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

// const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: <Layout />,
//   //   children: [
//   //     {
//   //       path: "/",
//   //       element: <Home />,
//   //     },
//   //     {
//   //       path: "/post/:id",
//   //       element: <Single />,
//   //     },
//   //     {
//   //       path: "/write",
//   //       element: <Write />,
//   //     },
//   //   ],
//   // },
//   // {
//   //   path: "/register",
//   //   element: <Register />,
//   // },
//   // {
//   //   path: "/login",
//   //   element: <Login />,
//   // },
//     //// NEWLY ADDED ////
//
//   {
//     path: "/",
//     element: <WelcomePage />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//     // replace /login
//   {
//     path: "/user",
//     element: <User />,
//   },
//     // replace /register
//   {
//     path: "/newuser",
//     element: <NewUser />,
//   },
//     //
//   {
//     path: "/home",
//     element: <Home />,
//   },
// ]);

function App() {
  return (
    <div className="app">
      <div>
        {/*<RouterProvider router={router} />*/}
          <Router>
              <Routes>
                  <Route path="/" element={<WelcomePage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/newuser" element={<NewUser />} />
                  <Route path="/devices" element={<Devices />} />
                  <Route path="/grocerylist" element={<GroceryList />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/smartmenu" element={<SmartMenu />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/pantry" element={<Pantry />} />
                  <Route path="/htmlDynamicTableFunction" element={<htmlDynamicTableFunction />} />
                  <Route path="/test" element={<TableTest />} />
                  <Route path={"/test2"} element={<tableTest2 />} />
                  <Route path={"/FoodTest"} element={<FoodTableTest/>}/>
                  <Route path={"/FoodTest2"} element={<FoodTableTest2/>}/>
                  <Route path={"DeviceTest"} element={<DeviceTest/>}/>
                  <Route path={"GroceryTest"} element={<GroceryTest/>}/>
              </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
