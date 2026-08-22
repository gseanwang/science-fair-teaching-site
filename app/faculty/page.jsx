import { site } from "../../data/site";
import Avatar from "../../components/Avatar";

export const metadata = {
  title: "師資群 | 世界科展學院 World Science Academy",
  description: "認識帶孩子做研究的老師 —— 真正做過研究、也坐過評審桌的導師團隊。",
};

export default function FacultyPage() {
  const f = site.faculty;

  return (
    <>
      <section className="hero" style={{ paddingBottom: 20 }}>
        <span className="hero-badge">ABOUT US · 你的導師</span>
        <h1>{f.title}</h1>
        <p className="hero-sub">{f.desc}</p>
      </section>

      {f.members.map((m, i) => (
        <section className="section faculty-member" key={i}>
          <div className="fm-head">
            <Avatar photo={m.photo} nameEn={m.nameEn} name={m.name} />
            <div className="fm-head-text">
              <div className="fm-role">{m.role}</div>
              <h2 className="fm-name">
                {m.name} <span className="fm-name-en">{m.nameEn}</span>
              </h2>
              <div className="fm-credential">{m.credential}</div>
              <p className="fm-tagline">{m.tagline}</p>
            </div>
          </div>

          {m.awards && m.awards.length > 0 && (
            <div className="fm-awards">
              <span className="fm-awards-label">🏅 榮譽</span>
              {m.awards.map((a, j) => (
                <span className="fm-award" key={j}>
                  {a}
                </span>
              ))}
            </div>
          )}

          <div className="fm-groups">
            {m.groups.map((g, j) => (
              <div className={"fm-group" + (g.star ? " star" : "")} key={j}>
                <h3>
                  {g.title} {g.star && <span className="fm-star">★</span>}
                </h3>
                <ul>
                  {g.points.map((p, k) => (
                    <li key={k}>{p}</li>
                  ))}
                </ul>
                {g.footer && <div className="fm-group-footer">→ {g.footer}</div>}
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="cta-band">
        <h2>想讓孩子跟著這樣的導師做研究?</h2>
        <p>留下聯絡方式,我們會主動與您聯繫。</p>
        <a className="btn btn-lg" href="/#contact" style={{ background: "#fff", color: "var(--brand-dark)" }}>
          前往諮詢 →
        </a>
      </section>
    </>
  );
}
