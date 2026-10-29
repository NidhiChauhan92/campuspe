'use client';
import { Button, Check } from './ui';
const cards = [
  { icon: '🏛', badge: 'Coming Soon', title: 'College', desc: 'Explore colleges, courses, fees, placements & more', list: ['Search by course, location, fees', 'Connect directly with colleges', 'Improve student placements'], cta: 'Join Waitlist 🔔' },
  { icon: '🎓', badge: 'Available Now', title: "I'm Looking for a Job", desc: "Upload your resume. We'll find jobs that fit you.", list: ['Jobs from 1000+ sources', 'AI powered matching', 'WhatsApp & email alerts'], cta: 'Explore Jobs →', live: true, href: '#jobs' },
  { icon: '💼', badge: 'Coming Soon', title: "I'm Hiring", desc: 'Connect with colleges and find candidates — from students to graduates.', list: ['Connect directly with colleges', 'Find the right candidates', 'Simplify your hiring'], cta: 'Join Waitlist 🔔' },
];
const stats = [['👥', '800+', 'Students'], ['🏛', '130+', 'colleges'], ['💼', '100+', 'jobs & internships'], ['🛡', '100%', 'Safe & Trusted']];
const partners = [['GINSERV', '#0ea5e9'], ['STARTUP KARNATAKA', '#1e3a8a'], ['UNIV. OF AGRI SCI', '#7c2d12'], ['TALENTSPOTIFY', '#334155'], ['RADIANT Info', '#dc2626'], ['GOVT. OF INDIA', '#475569']];
export default function Hero() {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(2));
    e.currentTarget.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(2));
  };
  return (
    <section id="top" className="hero" onMouseMove={move}>
      <div className="wrap hero-in">
        <div className="float f1"><b className="wa">● WhatsApp Alert</b><strong>Get notified on whatsapp</strong><small>You&apos;ll get all important updates on your whatsapp</small></div>
        <div className="float f2"><b className="rb">⚡ Resume Builder</b><strong>Build Your Resume</strong><small>Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired</small></div>
        <div className="float f3"><span className="av">AK PR SN</span> <b>🔥 142 students matched today</b><small>Just now · IIT, BITS, VIT</small></div>
        <div className="float f4"><b>Radiant Info</b> shortlisted 8 interns<small className="ok">● Verified recruiter · 2 days ago</small></div>
        <span className="ai-pill">🤖 AI-Powered Campus Assistant</span>
        <h1>Connect <span className="grad">10X Faster.</span></h1>
        <p className="sub">One platform connecting students, colleges &amp; employers — faster.</p>
        <p className="ask">✦ What are you looking for? ✦</p>
        <div className="cards3">
          {cards.map((c) => (
            <article key={c.title} className="role">
              <div className="role-top"><span className="ico">{c.icon}</span><span className={`badge ${c.live ? 'live' : ''}`}>{c.badge}</span></div>
              <h3>{c.title}</h3><p className="desc">{c.desc}</p>
              <Check items={c.list} tone={c.live ? 'red' : ''} />
              <Button href={c.href || '#top'} size="block">{c.cta}</Button>
            </article>
          ))}
        </div>
        <ul className="stats">{stats.map(([i, n, l]) => <li key={l}><span className="ico">{i}</span><div><strong>{n}</strong><span>{l}</span></div></li>)}</ul>
        <p className="trusted">Trusted by partners across India</p>
      </div>
      <div className="marquee"><div className="track">{[...partners, ...partners].map(([p, c], i) => <span key={i} style={{ color: c }}>{p}</span>)}</div></div>
    </section>
  );
}
