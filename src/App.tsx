import { ReactElement } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { AuthProvide } from "./Context/AuthContext";
import { AuthRouter } from "./Context/AuthRouter";
import { Layout } from "./Layout/Index";
import { Login } from "./Pages/Login/Index";
import { Register } from "./Pages/Register/Index";
import { Home } from "./Pages/Home/Index";
import { Sentiment } from "./Pages/Sentiment";
import { Emotion } from "./Pages/Emotion";
import "./App.css";

const AppRoutes = () => {
  const routes: ReactElement | null = useRoutes([
    {
      path: "/",
      element: (
        <>
          <AuthRouter>
            <Layout>
              <Home />
            </Layout>
          </AuthRouter>
        </>
      ),
    },
    {
      path: "/sentiments",
      element: (
        <>
          <AuthRouter>
            <Layout>
              <Sentiment />
            </Layout>
          </AuthRouter>
        </>
      ),
    },
    {
      path: "/emotions",
      element: (
        <>
          <AuthRouter>
            <Layout>
              <Emotion />
            </Layout>
          </AuthRouter>
        </>
      ),
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvide>
          <AppRoutes />
        </AuthProvide>
      </BrowserRouter>
    </>
  );
}

export default App;
