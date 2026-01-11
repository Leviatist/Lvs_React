import React, { useState, useEffect } from 'react';
import './navi.css'
import leetcodeIcon from '../../assets/ico/leetcode.png';
import yuanbaoIcon from '../../assets/ico/yuanbao.png';
import chatgptIcon from '../../assets/ico/ChatGPT.ico';
import kaggleIcon from '../../assets/ico/kaggle.ico';
import bilibiliIcon from '../../assets/ico/bilibili.png';
import csdnIcon from '../../assets/ico/CSDN.ico';
import githubIcon from '../../assets/ico//GitHub.ico';
import deepseekIcon from '../../assets/ico//DeepSeek.ico';

const Navi = () => {
  const [searchEngine, setSearchEngine] = useState('bing');
  const [query, setQuery] = useState('');

  const handleEngineChange = (engine) => {
    setSearchEngine(engine);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const url = searchEngine === 'bing'
      ? `https://www.bing.com/search?q=${encodeURIComponent(query)}`
      : `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    window.open(url, '_blank');
  };

  const links = [
    { href: 'https://leetcode.cn/problemset/', icon: leetcodeIcon },
    { href: 'https://yuanbao.tencent.com/chat/', icon: yuanbaoIcon },
    { href: 'https://chatgpt.com/', icon: chatgptIcon },
    { href: 'https://www.kaggle.com/', icon: kaggleIcon },
    { href: 'https://www.bilibili.com/', icon: bilibiliIcon },
    { href: 'https://www.csdn.net/', icon: csdnIcon },
    { href: 'https://github.com/', icon: githubIcon },
    { href: 'https://chat.deepseek.com/', icon: deepseekIcon },
  ];

  return (
    <div>
      <main>
        <h1 id="title">LvsNavi</h1>
        <div className="search-container">
          <div className="engine-switch">
            <button
              className={`engine-btn ${searchEngine === 'bing' ? 'active' : ''}`}
              onClick={() => handleEngineChange('bing')}
            >
              Bing
            </button>
            <button
              className={`engine-btn ${searchEngine === 'google' ? 'active' : ''}`}
              onClick={() => handleEngineChange('google')}
            >
              Google
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-button">🔎</button>
          </form>
        </div>

        {/* 第一组图标 */}
        <div className="icon-container">
          {links.slice(0, 4).map((link, index) => (
            <a key={index} className="icon-link" href={link.href} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt="Icon"/>
            </a>
          ))}
        </div>

        {/* 第二组图标 */}
        <div className="icon-container">
          {links.slice(4).map((link, index) => (
            <a key={index + 4} className="icon-link" href={link.href} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt="Icon" />
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Navi;
/*

*/