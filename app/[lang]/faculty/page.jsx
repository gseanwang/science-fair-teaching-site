import { content, locales } from "../../../data/content";
import { notFound } from "next/navigation";
import Avatar from "../../../components/Avatar";

export function generateStaticParams() {
  return locales.map((l) => ({ lang: l.code }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const c = content[lang];
  if (!c) return {};
  return { title: `${c.faculty.title} | ${c.brandEn}` };
}

export default async function FacultyPage({ params }) {
  const { lang } = await params;
  const c = content[lang];
  if (!c) notFound();
  const f = c.faculty;

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-badge">{f.aboutLabel}</span>
          <h1>{f.title}</h1>
          <p className="hero-sub">{f.desc}</p>
        </div>
      </section>

      {f.members.map((m, i) => (
        <section className="section faculty-member" key={i}>
          <div className="fm-head">
            <Avatar photo={m.photo} nameEn={m.nameEn} name={m.name} />
            <div className="fm-head-text">
              <div className="fm-role">{m.role}</div>
              <h2 className="fm-name">{m.name}</h2>
              <div className="fm-credential">{m.credential}</div>
              <p className="fm-tagline">{m.tagline}</p>
            </div>
          </div>

          {m.awards && m.awards.length > 0 && (
            <div className="fm-awards">
              <span className="fm-awards-label">{f.awardsLabel}</span>
              {m.awards.map((a, j) => (
                <span className="fm-award" key={j}>{a}</span>
              ))}
            </div>
          )}

          {m.degreeNote && (
            <div className="fm-degree">
              <div className="fm-degree-label">{f.degreeLabel}</div>
              <p>{m.degreeNote}</p>
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
                    <li key={k}>
                      {typeof p === "string" ? p : (
                        <a className="fm-link" href={p.url} target="_blank" rel="noopener noreferrer">{p.text} ↗</a>
                      )}
                    </li>
                  ))}
                </ul>
                {g.footer && <div className="fm-group-footer">→ {g.footer}</div>}
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="cta-band">
        <h2>{f.backToContact}</h2>
        <p>{f.backSub}</p>
        <a className="btn btn-lg" href={`/${lang}#contact`} style={{ background: "#fff", color: "var(--brand-dark)" }}>
          {f.backCta}
        </a>
      </section>
    </>
  );
}
