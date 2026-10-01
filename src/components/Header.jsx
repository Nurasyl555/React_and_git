import { useState } from 'react';
import avatarImg from '../assets/avatar.png';

/**
 * Компонент Header (Шапка портфолио)
 * 
 * Принимает props:
 * - name: имя разработчика
 * - role: должность / специализация
 * - status: статус доступности
 */
function Header({ 
  name = "Nurasyl (Paul Atreides)", 
  role = "Frontend & React Developer", 
  status = "Доступен для проектов" 
}) {
  // Хук useState: хранит количество лайков для интерактивности
  const [likes, setLikes] = useState(0);

  // Функция-обработчик клика по кнопке лайка
  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <header className="header">
      {/* Аватарка с градиентным кольцом */}
      <div className="avatar-wrapper">
        <img 
          src={avatarImg} 
          alt={`Фото ${name}`} 
          className="profile-img" 
        />
      </div>

      {/* Бейдж статуса с анимированной точкой */}
      <div className="status-badge">
        <span className="status-dot"></span>
        <span>{status}</span>
      </div>

      {/* Заголовок с именем и подзаголовок */}
      <h1>{name}</h1>
      <p className="subtitle">{role}</p>

      {/* Интерактивная кнопка для демонстрации состояния React (useState) */}
      <button className="like-btn" onClick={handleLike} title="Нажми, чтобы поддержать">
        <span>👍 Поставить лайк:</span>
        <strong>{likes}</strong>
      </button>
    </header>
  );
}

export default Header;