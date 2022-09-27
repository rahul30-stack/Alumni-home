import React from "react";

function NewsCard2({ headline, tagline_1, tagline_2, data, img }) {
  return (
    <aside className="profile-card">
      <div className="news-header">
        <div className="news-img-container">
          <img src={img} className="news-img" />
        </div>
        <h1 className="headline">{headline}</h1>
        <h2 className="tagline_1">{tagline_1}</h2>
        <h2 className="tagline_2">{tagline_2}</h2>
      </div>
      <div className="profile-bio">
        <p className="news-data">{data}</p>
      </div>
    </aside>
  );
}

export default NewsCard2;
