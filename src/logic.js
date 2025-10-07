
const API_KEY = "b40ba3201745418b83c2d7c816c9d167";
const BASE_URL = "https://newsapi.org/v2/everything?q=";

export async function fetchNews(query = "India") {
  const res = await fetch(`${BASE_URL}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  return data.articles.filter(article => article.urlToImage);
}