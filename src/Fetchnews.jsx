// // const API_KEY = "b40ba3201745418b83c2d7c816c9d167";
// // const BASE_URL = "https://newsapi.org/v2/everything?q=";

// // export async function fetchNews(query = "India") {
// //   const res = await fetch(`${BASE_URL}${query}&apiKey=${API_KEY}`);
// //   const data = await res.json();

// //   if (!data.articles) {
// //     console.error("API returned no articles:", data);
// //     return [];
// //   }

// //   return data.articles.filter((article) => article.urlToImage);
// // }


// //
// // export default async function handler(req, res) {
// //   const query = req.query.q || "India";
// //   const API_KEY = process.env.NEWS_API_KEY;

// //   try {
// //     const apiRes = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
// //     const data = await apiRes.json();

// //     // Ensure articles exist
// //     if (!data.articles) {
// //       return res.status(500).json({ error: "No articles found", data });
// //     }

// //     res.status(200).json(data);
// //   } catch (err) {
// //     res.status(500).json({ error: "Failed to fetch news" });
// //   }
// // }

// export default async function handler(req, res) {
//   const query = req.query.q || "India";
//   const API_KEY = process.env.NEWS_API_KEY; // must be in Vercel env vars

//   try {
//     const response = await fetch(
//       `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
//     );

//     if (!response.ok) {
//       return res.status(response.status).json({ error: "NewsAPI request failed" });
//     }

//     const data = await response.json();

//     if (!data.articles) {
//       return res.status(500).json({ error: "No articles found", data });
//     }

//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch news" });
//   }
// }
// //


// export async function fetchNews(query = "India") {
//   const res = await fetch(`/api/news?q=${query}`);
//   const data = await res.json();

//   if (!data.articles) {
//     console.error("API returned no articles:", data);
//     return [];
//   }

//   return data.articles.filter((article) => article.urlToImage);
// }



const BASE_URL = import.meta.env.NEWS_API_KEY
  ? `/api/news?q=`
  : "https://newsapi.org/v2/everything?q=";

export async function fetchNews(query = "India") {
  let res;

  if (import.meta.env.NEWS_API_KEY) {
    // Production: call serverless API
    res = await fetch(`/api/news?q=${query}`);
  } else {
    // Development: call NewsAPI directly (localhost)
    const API_KEY = "b40ba3201745418b83c2d7c816c9d167";
    res = await fetch(`${BASE_URL}${query}&apiKey=${API_KEY}`);
  }

  const data = await res.json();
  return data.articles?.filter((article) => article.urlToImage) || [];
}