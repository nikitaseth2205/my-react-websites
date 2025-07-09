import { useState, useEffect } from "react";
import NewsItem from './newsitem'; 


const Newsboard = ({category}) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
      .catch(err => console.error("Error fetching articles:", err));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest<span className = "badge bg-dark text-light">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title ={ news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
          </div>
)}

export default Newsboard;


