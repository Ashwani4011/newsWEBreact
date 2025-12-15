
const BASE_URL = import.meta.env.VITE_NEWS_API_KEY
  ? `/api/news?q=`
  : "https://newsapi.org/v2/everything?q=";

export async function fetchNews(query = "India") {
  let res;

  if (import.meta.env.VITE_NEWS_API_KEY) {
    // Production: call serverless API
    res = await fetch(`/api/news?q=${query}`);
  } else {
    // Development: call NewsAPI directly (localhost)
    const API_KEY = "b40ba3201745418b83c2d7c816c9d167";
    // const API_KEY=import.meta.env.VITE_NEWS_API_KEY;
    res = await fetch(`${BASE_URL}${query}&apiKey=${API_KEY}`);
  }

  const data = await res.json();
  return data.articles?.filter((article) => article.urlToImage) || [];
}