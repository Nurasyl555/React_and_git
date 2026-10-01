/**
 * Компонент About (О себе)
 * 
 * Принимает props:
 * - bio: краткое описание о себе
 * - skills: массив технических навыков
 * - hobbies: массив увлечений
 */
function About({
  bio = "Привет! Я увлеченный веб-разработчик. Создаю быстрые, интерактивные и адаптивные веб-приложения на React. Стремлюсь писать чистый, поддерживаемый код и постоянно расширяю свой стек технологий.",
  skills = ["React 19", "JavaScript (ES6+)", "HTML5 & CSS3", "Vite", "Git & GitHub", "Responsive Design"],
  hobbies = ["💻 Веб-разработка", "⚡ Решение алгоритмов", "🎮 Гейминг", "🎧 Музыка", "📚 Технологии"]
}) {
  return (
    <section className="section about">
      <h2 className="section-title">
        <span className="title-icon">👨‍💻</span>
        <span>О себе</span>
      </h2>

      {/* Текст биографии */}
      <p className="bio-text">{bio}</p>

      {/* Список навыков, отрендеренный через .map() */}
      <h3 className="subsection-title">Навыки и стек:</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      {/* Список увлечений, отрендеренный через .map() */}
      <h3 className="subsection-title">Интересы и хобби:</h3>
      <div className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <span key={index} className="hobby-item">
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;