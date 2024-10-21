import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider} from "react-redux";

function App() { 
  
 
  //Routing configuration 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Home />
    },
    {
      path:"/error",
      element:<Error/>
    }
  ])

  

 
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
