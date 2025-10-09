import React, { useEffect, useState } from "react"; 
import { fetchNews } from "./Components/Fetchnews"; 
import './App.css';
import Card from "./Components/Card"
import Navbar from './Components/Navbar';

function App() {
  const [articles, setArticles] = useState([]); 
  const loadNews = async (query) => { 
    const data = await fetchNews(query); 
    setArticles(data); 
    
  }; 
    useEffect(() => { loadNews("India"); }, []);
  

  return (
    <>
      <div className="min-h-screen bg-[#f9fbfd]">
         <Navbar onCategorySelect={loadNews} onSearch={loadNews} /> 
         <main className="max-w-[1180px] mx-auto p-4 flex flex-wrap justify-between gap-y-6" style={{marginTop:"60px"}}> 
          {articles.map((article, idx) => ( <Card key={idx} article={article} /> ))} 
          </main> 
          </div>
    </>
  )
}

export default App
