import './App.css'
import {
    // createBrowserRouter,
    HashRouter,
    Route,
    // RouterProvider,
    Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import MainLayout from "./layout";
import NotFound from "./pages/NotFound";
import {UmamiStyled} from "./umami.styled.ts";

// const theme = {
//     colors: {
//         black: '#000000',
//         ping: '#F3A5BB',
//         green: '#61BF9C',
//     },
//     font: {
//         fontFamily: 'Clash Display'
//     }
// }

function App() {
    // const router = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <MainLayout />,
    //         children: [
    //             {
    //                 path: '',
    //                 element: <Home />
    //             },
    //             {
    //                 path: 'services',
    //                 element: <Services />
    //             },
    //             {
    //                 path: 'about',
    //                 element: <About />
    //             },
    //             {
    //                 path: '*',
    //                 element: <NotFound />
    //             }
    //         ]
    //     },
    // ])

  return (
      <HashRouter>
          <UmamiStyled />
          {/*<RouterProvider router={router} />*/}
          <Routes>
              <Route path="/" element={<MainLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="services" element={<Services />} />
                  <Route path="about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </HashRouter>
  )
}

export default App
