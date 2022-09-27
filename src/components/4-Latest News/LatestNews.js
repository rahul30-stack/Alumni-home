import React from "react";
import "./LatestNews.css";
import newsdata from "./newsdata";
import NewsCard2 from "./NewsCard";
const LatestNews = () => {
  return (
    <section className="news-container">
      <h1 className="news-heading">Latest News</h1>
      <div className="news-card-container">
        {newsdata.map((news) => {
          return (
            <NewsCard2
              key={news.id}
              headline={news.headline}
              tagline_1={news.tagline_1}
              tagline_2={news.tagline_2}
              data={news.data}
              img={news.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LatestNews;
