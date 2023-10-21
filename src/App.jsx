import { lazy, Suspense } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/layout/Navbar/NavBar";
import Loading from "./components/utils/Loading";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/pages/Home/Home"));
const Services = lazy(() => import("./components/pages/Services/Service"));
const Contact = lazy(() => import("./components/pages/Contact/Contact"));

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3adcff",
        light: "#3acff02e"
      },
      secondary: {
        main: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/service"
          element={
            <Suspense fallback={<Loading />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
