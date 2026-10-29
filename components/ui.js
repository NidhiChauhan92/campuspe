export function Button({ href = '#', variant = 'primary', size, children, ...p }) {
  return <a href={href} className={`btn ${variant} ${size || ''}`} {...p}>{children}</a>;
}
export const Pill = ({ children, className = '' }) => <span className={`pill ${className}`}><i />{children}</span>;
export const Tag = ({ children, tone = 'blue' }) => <span className={`tag ${tone}`}>{children}</span>;
export const Heading = ({ a, b, left }) => (<h2 className={`h2 ${left ? 'left' : ''}`}>{a}<br /><span>{b}</span></h2>);
export const Check = ({ items, tone }) => (<ul className={`checks ${tone || ''}`}>{items.map((t) => <li key={t}>{t}</li>)}</ul>);
export function StepCard({ n, tag, title, desc, chips = [] }) {
  return (
    <article className="step">
      <div><p className="meta"><b>{n}</b> {tag}</p><h3>{title}</h3><p className="desc">{desc}</p></div>
      <div className="chips">{chips.map((c, i) => <Tag key={c} tone={['green', 'blue', 'purple', 'orange'][(i + n.length) % 4]}>{c}</Tag>)}</div>
    </article>
  );
}
