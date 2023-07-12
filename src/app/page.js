"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import requests from "../utils/requests.js";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {

        const [
          netflixOriginals,
          trendingNow,
          topRated,
          actionMovies,
          comedyMovies,
          horrorMovies,
          romanceMovies,
          documentaries,
        ] = await Promise.all([
          fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
          fetch(requests.fetchTrending).then((res) => res.json()),
          fetch(requests.fetchTopRated).then((res) => res.json()),
          fetch(requests.fetchActionMovies).then((res) => res.json()),
          fetch(requests.fetchComedyMovies).then((res) => res.json()),
          fetch(requests.fetchHorrorMovies).then((res) => res.json()),
          fetch(requests.fetchRomanceMovies).then((res) => res.json()),
          fetch(requests.fetchDocumentaries).then((res) => res.json()),
        ]);

        setData({netflixOriginals,
                trendingNow,
                topRated,
                actionMovies,
                comedyMovies,
                horrorMovies,
                romanceMovies,
                documentaries});

        //console.log(netflixOriginals.results[0].title)
    };
    fetchData();
  }, [])


  return (
      <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
        <Header />

        <main>
          <Banner netflixOriginals={data.netflixOriginals}/>
          <section>
            {/* row
            row
            row
            row */}
          </section>
        </main>
        {/* modal */}
      </div>
  )
}

