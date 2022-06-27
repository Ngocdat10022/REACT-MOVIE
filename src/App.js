import Main from "./Components/Layouts/Main";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
const HomePage = lazy(() => import("./Components/Pages/HomePage"));
const MoviesPage = lazy(() => import("./Components/Pages/MoviesPage"));
const MoviesDetailsPage = lazy(() =>
  import("./Components/Pages/MoviesDetailsPage")
);
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </>
              }
            />
            <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
            <Route
              path="/movies/:moviesId"
              element={<MoviesDetailsPage></MoviesDetailsPage>}
            ></Route>
          </Route>
          <Route path="*" element={<>No Defaults</>}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
