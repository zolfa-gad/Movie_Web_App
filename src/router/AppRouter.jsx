import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import NavBarSection from "../components/sections/NavBarSection/NavBarSection";
import FooterSection from "./../components/sections/FooterSection/FooterSection";

const AppRouter = () => {
  const HomePageRoute = lazy(() =>
    delayForDemo(import("../pages/HomePage/HomePage.jsx"))
  );

  const MovieDetailPageRoute = lazy(() =>
    delayForDemo(import("../pages/MovieDetailPage/MovieDetailPage.jsx"))
  );

  const ViewMorePageRoute = lazy(() =>
    delayForDemo(import("../pages/ViewMorePage/ViewMorePage.jsx"))
  );

  return (
    <div>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="d-flex vh-100 justify-content-center align-items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <NavBarSection />
          <Routes>
            <Route path="/" element={<HomePageRoute />} />
            <Route path="home" element={<HomePageRoute />} />
            <Route path="detail/:type/:id" element={<MovieDetailPageRoute />} />
            <Route path="movie-detail/:id" element={<MovieDetailPageRoute />} />
            <Route
              path="view-more/:section/:list"
              element={<ViewMorePageRoute />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <FooterSection />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;

function delayForDemo(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
