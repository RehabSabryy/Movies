import logo from './logo.svg';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import Layout from './Components/Layout/Layout';
import Movies from './Components/Movies/Movies';
import Tv from './Components/Tv/Tv';
import People from './Components/People/People';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import { Offline, Online } from 'react-detect-offline';

function App() {
  let routers = createBrowserRouter([
    {path:'/' , element:<Layout/>  , children:[
      {index:true , element:<Home/>},
      {path:'movies' , element:<Movies/>},
      {path:'tv' , element:<Tv/>} ,
      {path:'people' , element:<People/>},
      {path:'login' , element:<Login/>} ,
      {path:'register' , element:<Register/>},
      {path:'profile' , element:<Profile/>},
      {path:'itemdetails/:id/:media_type' , element:<ItemDetails/>},
      {path:'*' , element:<NotFound/>}    
    ]}
  ]);
  return (
    <>
    <Offline><div className="offline">You're Offline</div></Offline>
   <RouterProvider router={routers}/>
   </> 
  );
}

export default App;
