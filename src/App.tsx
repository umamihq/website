import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import MainLayout from "./layout";
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
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'services',
                    element: <Services />
                },
                {
                    path: 'about',
                    element: <About />
                },
            ]
        },
    ])

  return (
      <>
          <UmamiStyled />
          <RouterProvider router={router} />
      </>
  )
}

export default App