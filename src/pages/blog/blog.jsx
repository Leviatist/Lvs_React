import "./blog.css";
import { useState, useEffect } from "react";
import blogData from "../../assets/blog/blogData.json"; // 根据实际路径调整

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("学习笔记"); // '随笔' 或 '学习笔记'
  const [expandedYear, setExpandedYear] = useState(null); // 当前展开的年份
  const [currentIndex, setCurrentIndex] = useState(0);

  // 当切换分类或年份时，重置当前文章索引为 0
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, expandedYear]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setExpandedYear(null); // 切换分类时收起所有年份
  };

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  const years = Object.keys(blogData[selectedCategory]).sort((a, b) => b - a); // 降序：最新年份在上

  // 获取当前展开年份的文章列表
  const currentArticles = expandedYear 
    ? blogData[selectedCategory][expandedYear] 
    : [];

  return (
    <div className="blog-container">
      <div className="fixed-top">
        <div 
          className={`category-item ${selectedCategory === "学习笔记" ? "active" : ""}`} 
          onClick={() => handleCategoryClick("学习笔记")}
        >
          学习笔记
        </div>
        <div 
          className={`category-item ${selectedCategory === "随笔" ? "active" : ""}`} 
          onClick={() => handleCategoryClick("随笔")}
        >
          随笔
        </div>
      </div>

      <div className="years-list">
        {years.map((year) => (
          <div key={year} className="year-card">
            <div className="year-header" onClick={() => toggleYear(year)}>{year}</div>
            {expandedYear === year && (
              <div className="articles-list">
                {/* 只显示当前索引的文章 */}
                <div className="article-card">
                  <button className="nav-btn prev" onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} disabled={currentIndex === 0}>上一篇</button>
                  <img src={currentArticles[currentIndex].image} alt={currentArticles[currentIndex].title} className="article-image"/>
                  <div className="article-content">
                    <h3 className="article-title">{currentArticles[currentIndex].title}</h3>
                    <p className="article-summary">{currentArticles[currentIndex].summary}</p>
                  </div>
                  <button className="nav-btn next" onClick={() => setCurrentIndex(i => Math.min(currentArticles.length - 1, i + 1))} disabled={currentIndex === currentArticles.length - 1}>下一篇</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog; 