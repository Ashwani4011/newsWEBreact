export default async function handler(req, res) {
  const query = req.query.q || "India";
  const API_KEY = process.env.NEWS_API_KEY;

  try {
    const apiRes = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    const data = await apiRes.json();

    // Ensure articles exist
    if (!data.articles) {
      return res.status(500).json({ error: "No articles found", data });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}