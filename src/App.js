import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen";
import Categories from "./pages/Categories/Categories";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [guest, setGuest] = useState(false);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsuscribe();
    };
  }, [dispatch]);

  return (
    <div className="App">
      {user || guest ? (
        <>
          <Routes>
            <Route
              exact
              path="/profile"
              element={<ProfileScreen setGuest={setGuest} />}
            />
            <Route exact path="/" element={<HomeScreen />} />
            <Route
              exact
              path="/categories/originals"
              element={
                <Categories
                  category={"fetchNetflixOriginals"}
                  title={"Originals"}
                />
              }
            />
            <Route
              exact
              path="/categories/top_rated"
              element={
                <Categories category={"fetchTopRated"} title={"Top rated"} />
              }
            />
            <Route
              exact
              path="/categories/trending"
              element={
                <Categories category={"fetchTrending"} title={"Trending"} />
              }
            />
            <Route
              exact
              path="/categories/horror"
              element={
                <Categories
                  category={"fetchHorrorMovies"}
                  title={"Horror movies"}
                />
              }
            />
            <Route path="/search/:keyword" element={<Search />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <LoginScreen setGuest={setGuest} />
      )}
    </div>
  );
}

export default App;
