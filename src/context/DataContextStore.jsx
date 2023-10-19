import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let DataContext = createContext("");

export default function SetDataCongiguration(props) {
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [moviesCategories, setMoviesCategories] = useState([]);

  const [moviesPopularList, setMoviesPopularList] = useState([]);
  const [moviesTopRatedList, setMoviesTopRatedList] = useState([]);
  const [moviesUpComingList, setMoviesUpComingList] = useState([]);

  const [seriesOnAirList, setSeriesOnAirList] = useState([]);
  const [seriesPopularList, setSeriesPopularList] = useState([]);
  const [seriesTopRatedList, setSeriesTopRatedList] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [searchResultList, setSearchResultList] = useState([]);
  const [searchVisibility, setSearchVisibility] = useState("visually-hidden");
  const [searchCountPage, setSearchCountPage] = useState(0);

  useEffect(() => {
    getDataFromAPI("https://api.themoviedb.org/3/genre/movie/list").then(
      (data) => setMoviesCategories(data.genres)
    );
  }, []);

  useEffect(() => {
    if (moviesCategories.length !== 0) {
      getDataFromAPI("https://api.themoviedb.org/3/movie/now_playing").then(
        async (data) => {
          let editData = await addCategories(data.results, moviesCategories);
          setNowPlayingList(editData);
        }
      );

      getDataFromAPI("https://api.themoviedb.org/3/movie/popular").then(
        (data) => setMoviesPopularList(data.results)
      );

      getDataFromAPI("https://api.themoviedb.org/3/movie/top_rated").then(
        (data) => setMoviesTopRatedList(data.results)
      );

      getDataFromAPI("https://api.themoviedb.org/3/movie/upcoming").then(
        (data) => setMoviesUpComingList(data.results)
      );

      getDataFromAPI("https://api.themoviedb.org/3/tv/on_the_air").then(
        (data) => setSeriesOnAirList(data.results)
      );

      getDataFromAPI("https://api.themoviedb.org/3/tv/popular").then((data) =>
        setSeriesPopularList(data.results)
      );

      getDataFromAPI("https://api.themoviedb.org/3/tv/top_rated").then((data) =>
        setSeriesTopRatedList(data.results)
      );
    }
  }, [moviesCategories]);

  useEffect(() => {
    if (!searchValue) {
      setSearchResultList([]);
      setSearchCountPage(0);
    } else {
      getDataFromAPI(
        `https://api.themoviedb.org/3/search/multi?query=${searchValue}`,
        searchCountPage + 1
      ).then((data) => setSearchResultList(data.results));
    }
  }, [searchValue, searchCountPage]);

  function onSearchInputChange(event) {
    setSearchValue(event.target.value);
  }

  function onNavSearchClick(event) {
    setSearchVisibility("");
  }

  async function addCategories(list, categoryList) {
    return await list.map((item) => {
      let newGenre = [];
      for (let genre of item.genre_ids) {
        let foundCategory = categoryList.find((item) => item.id === genre);
        newGenre.push(foundCategory.name);
      }
      item.genre_ids = [...newGenre];
      return item;
    });
  }

  async function getDataFromAPI(url, page = 1) {
    return await axios
      .get(url, {
        params: {
          api_key: "9c34f07be9be54aa8e3fbe2e5b416d45",
          language: "en-US",
          page: page,
        },
      })
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }

  function onCloseSearchWindow() {
    setSearchVisibility("visually-hidden");
    setSearchValue("");
    setSearchResultList([]);
  }

  return (
    <DataContext.Provider
      value={{
        nowPlayingList,
        moviesPopularList,
        moviesTopRatedList,
        moviesUpComingList,
        seriesOnAirList,
        seriesPopularList,
        seriesTopRatedList,
        searchValue,
        searchResultList,
        searchVisibility,
        setSearchValue,
        onSearchInputChange,
        onNavSearchClick,
        onCloseSearchWindow,
        getDataFromAPI,
        setSearchCountPage,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
