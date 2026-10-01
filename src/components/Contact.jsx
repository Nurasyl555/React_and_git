/**
 * Компонент Contact (Контакты)
 * 
 * В соответствии с правилами приватности не содержит чувствительных данных.
 * Отображает безопасные ссылки: GitHub, соцсети и локацию.
 */
function Contact({
  contacts = [
    {
      id: "github",
      label: "GitHub",
      value: "github.com/Nurasyl555",
      link: "https://github.com/Nurasyl555",
      icon: "🐙"
    },
    {
      id: "telegram",
      label: "Telegram",
      value: "@nurasyl_dev",
      link: "https://t.me/nurasyl_dev",
      icon: "✈️"
    },
    {
      id: "instagram",
      label: "Instagram",
      value: "@nurasyl_kz",
      link: "https://instagram.com",
      icon: "📸"
    },
    {
      id: "location",
      label: "Локация",
      value: "Planet Earth 🌍",
      link: null,
      icon: "📍"
    }
  ]
}) {
  return (
    <section className="section contact">
      <h2 className="section-title">
        <span className="title-icon">📬</span>
        <span>Связаться со мной</span>
      </h2>

      <div className="contact-grid">
        {contacts.map((item) => {
          // Если есть ссылка, рендерим кликабельный <a>, иначе обычный <div>
          const CardContent = (
            <>
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
            </>
          );

          return item.link ? (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              {CardContent}
            </a>
          ) : (
            <div key={item.id} className="contact-card">
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;