import './App.css'
import {
    HashRouter,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import MainLayout from "./layout";
import NotFound from "./pages/NotFound";
import {UmamiStyled} from "./umami.styled.ts";

function App() {
  return (
      <>

          <UmamiStyled />
          <HashRouter>
              <UmamiStyled />
              <Routes>
                  <Route path="/" element={<MainLayout />}>
                      <Route path="/" element={<Home />} />
                      <Route path="services" element={<Services />} />
                      <Route path="about" element={<About />} />
                      <Route path="*" element={<NotFound />} />
                  </Route>
              </Routes>
          </HashRouter>
      </>
  )
}

export default App
