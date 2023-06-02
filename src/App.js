import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import UseRefDemo from "./components/UseRefDemo";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "demo",
          element: (
            <>
              <Demo />
              <UseRefDemo />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="">
        {/*
         *Header
         *Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonList
         *    videoContainer
         *     videoCards
         */}
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
