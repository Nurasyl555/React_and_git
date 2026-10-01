import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

/**
 * Главный корневой компонент приложения (App)
 * Объединяет все дочерние компоненты в Single Page Application (SPA).
 */
function App() {
  // Хук useState: хранит состояние темы ('dark' или 'light')
  const [theme, setTheme] = useState('dark');

  // Функция переключения темы
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Хук useEffect: синхронизирует тему с атрибутом data-theme тега <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main className="portfolio-card">
      {/* Верхняя панель: кнопка смены темы */}
      <div className="card-topbar">
        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme}
          title="Сменить тему оформления"
        >
          {theme === 'dark' ? '☀️ Светлая тема' : '🌙 Тёмная тема'}
        </button>
      </div>

      {/* 1-й компонент: Шапка с фото, именем и лайками */}
      <Header 
        name="Nurasyl (Paul Atreides)"
        role="Frontend & React Developer"
        status="🟢 Готов к проектам"
      />

      {/* 2-й компонент: Секция «О себе» со списком навыков */}
      <About />

      {/* 3-й компонент: Секция «Контакты» со ссылками */}
      <Contact />

      {/* Подвал карточки */}
      <footer className="card-footer">
        <span>🚀 React Single Page Application (SPA)</span>
        <span>© {new Date().getFullYear()} Nurasyl • Deployed with GitHub Pages</span>
      </footer>
    </main>
  );
}

export default App;