import React from "react";

function Card({ article }) {
  const { title, description, urlToImage, url, source, publishedAt } = article;
  const date = new Date(publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  return (
    <div
      className="w-[360px] min-h-[400px] shadow-md rounded-md overflow-hidden bg-white hover:shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all cursor-pointer"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="h-[180px] overflow-hidden">
        <img src={urlToImage} alt="news" className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-[#183b56] mb-1">{title}</h3>
        <h6 className="text-sm text-[#577592] mb-2">
          {source?.name} • {date}
        </h6>
        <p className="text-[#577592] text-sm">{description}</p>
      </div>
    </div>
  );
}

export default Card;

