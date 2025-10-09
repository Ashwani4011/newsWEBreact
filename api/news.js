export default async function handler(req, res) {
  const query = req.query.q || "India";
  const API_KEY = process.env.VITE_NEWS_API_KEY; // must be in Vercel env vars

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "NewsAPI request failed" });
    }

    const data = await response.json();

    if (!data.articles) {
      return res.status(500).json({ error: "No articles found", data });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
