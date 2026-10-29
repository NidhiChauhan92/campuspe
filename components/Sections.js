import { Button, Pill, Tag, Heading, StepCard } from './ui';
const feed = [['IIM Bangalore', 'Top College', 'View Details', 'MBA · Bengaluru · ₹3L+', "India's premier management institute with global exposure…"], ['Product Intern', 'Internship', 'Apply Now', 'Bengaluru · Hybrid · ₹35K/mo', 'Work on real products, learn from top engineers and build…'], ['Marketing Gig', 'Freelance', 'View Details', 'Remote · Freelance · ₹10K – ₹25K', 'Create content and help with social media campaigns for…']];
const steps = [['01', 'Set your preferences', 'Smart Profile', "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs."], ['02', 'Discover relevant opportunities', 'AI Ranked', 'Explore colleges and career opportunities matched to your profile, interests and goals'], ['03', 'Get notified when something fits', 'Instant Alerts', 'Get notified when a relevant college or new opportunity is found, so you can act early.']];
export function Discovery() {
  return (
    <section id="jobs" className="sec">
      <div className="wrap split">
        <div>
          <Pill>01 • OPPORTUNITY DISCOVERY</Pill>
          <h2 className="h2 left">Stop searching.<br /><span>Start getting matched.</span></h2>
          <p className="lead left">Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p>
          <div className="mini">{steps.map(([n, t, tg, d]) => (<div key={n} className="mini-c"><span className="num">{n}</span><div><b>{t}</b><p>{d}</p></div><Tag>{tg}</Tag></div>))}</div>
          <Button href="#jobs">Explore opportunities →</Button>
          <p className="script">A mix of colleges, jobs, internships and gigs — all in one place.</p>
        </div>
        <div className="feed">
          <div className="feed-h"><span className="ico">⚡</span><div><b>CampusPe Opportunity Feed</b><small>Colleges &amp; opportunities matched to you</small></div><Tag tone="green">12 new matches today</Tag></div>
          <div className="tabs">{['All', 'Colleges', 'Jobs', 'Internships', 'Freelance', 'Part-time'].map((t, i) => <button key={t} className={i ? '' : 'on'}>{t}</button>)}</div>
          {feed.map(([t, tg, cta, m, d]) => (<div key={t} className="fi"><div><b>{t}</b> <Tag tone="purple">{tg}</Tag><small>{m}</small><p>{d}</p></div><Button href="#jobs" size="xs">{cta}</Button></div>))}
          <p className="feed-f"><a href="#jobs">View all matched opportunities →</a><small>Curated for you • Updated daily</small></p>
        </div>
      </div>
    </section>
  );
}
export function Resume() {
  return (
    <section id="resume" className="sec tint center">
      <div className="wrap">
        <Pill>TRY IT LIVE <small>v2.4 AI Engine</small></Pill>
        <Heading a="Upload your resume." b="Find jobs that fit." />
        <p className="lead">Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p>
        <div className="upload">
          <div className="chip c1"><b>98% Match Rate</b><small>AI semantic rank</small></div>
          <div className="chip c2"><b>ATS Compliant</b><small>Standardized parser</small></div>
          <div className="drop"><h3>Upload your resume</h3><p>PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills and experience.</p>
            <label className="btn primary" tabIndex={0}>Upload resume ↑<input type="file" accept=".pdf,.doc,.docx" hidden /></label>
            <small>or drag and drop your file here</small><div><Tag>PDF</Tag> <Tag>DOC</Tag> <Tag>DOCX</Tag></div></div>
        </div>
        <ul className="pipe">{[['Resume analyzed', 'Ready in 4s'], ['Skills matched', 'Deep taxonomy'], ['Experience matched', 'Contextual seniority'], ['1,000+ sources searched', 'Real-time aggregators']].map(([a, b]) => <li key={a}><span className="ico">✓</span><div><b>{a}</b><small>{b}</small></div></li>)}</ul>
      </div>
    </section>
  );
}
const col = [['01', 'VERIFIED PROFILE', 'Build your college profile', 'Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.', ['NAAC A++ Ready', '98% Match']], ['02', 'DIRECT ENROLL', 'Students discover and connect', 'Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.', ['Direct Enquiries', 'WHATSAPP / CHAT']], ['03', 'CAMPUS RECRUITING', 'Recruiters discover your College', 'Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.', ['500+ Hiring Partners', 'Connect Directly']], ['04', 'LIVE HUD', 'Track placements in real time', 'Track students, interviews, offers and placements from one centralized dashboard.', ['LIVE PLACEMENTS', 'Students · Interviews · Offers']]];
const emp = [['01', 'INSTANT SETUP', 'Post a role in minutes', 'Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.', ['5 Min Deployment', '500+ Campus Network']], ['02', 'INSTANT SETUP', 'Receive a matched shortlist', 'Get candidates matched to your role by skills, experience, location and hiring requirements.', ['Zero CV Clutter', 'Tier 1–Tier 3 Parity']], ['03', 'INSTANT SETUP', 'Connect with candidates directly', 'Message, schedule interviews, and move candidates through your pipeline — all in one place.', ['In-App Scheduling', '1-Click Video / Chat']], ['04', 'INSTANT SETUP', 'Reduce your time-to-hire', 'Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.', ['<2 DAYS', '57% Faster Hiring']]];
export function Colleges() {
  return (
    <section id="colleges" className="sec tint">
      <div className="wrap split">
        <div>
          <Pill>02 • FOR COLLEGES</Pill>
          <h2 className="h2 left dark">Get Discovered<br />by <span>Students and Recruiters.</span></h2>
          <p className="lead left">Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.</p>
          <Button href="#colleges">List Your College →</Button>
        </div>
        <div className="stack">{col.map(([n, t, ti, d, c]) => <StepCard key={n} n={n} tag={t} title={ti} desc={d} chips={c} />)}</div>
      </div>
    </section>
  );
}
export function Employers() {
  return (
    <section id="employers" className="sec">
      <div className="wrap split">
        <div>
          <Pill>03 • FOR EMPLOYERS</Pill>
          <h2 className="h2 left dark">Stop running campus drives.<br /><span>Start hiring the right people.</span></h2>
          <p className="lead left">Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.</p>
          <Button href="#employers">Post a Job →</Button>
        </div>
        <div className="stack">{emp.map(([n, t, ti, d, c]) => <StepCard key={n} n={n} tag={t} title={ti} desc={d} chips={c} />)}</div>
      </div>
    </section>
  );
}
export function Support() {
  return (
    <section id="support" className="sec">
      <div className="wrap"><div className="support"><h2>Still have questions?</h2><p>Our support team is here to help you succeed. Get in touch anytime.</p>
        <div className="row"><Button href="mailto:contactus@campuspe.com" size="sm">Contact Support ↗</Button><Button href="tel:+916362606464" variant="ghost" size="sm">Schedule a Call 📞</Button></div></div></div>
    </section>
  );
}
export function Cta() {
  return (
    <section className="wrap"><div className="cta"><div><h3>Ready for what&apos;s next?</h3><p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p></div>
      <div className="row"><Button href="#colleges" size="xs">Explore Colleges →</Button><Button href="#jobs" size="xs">Find Opportunities →</Button><Button href="#colleges" variant="ghost" size="xs">List Your College →</Button><Button href="#employers" variant="ghost" size="xs">Post a Job →</Button></div></div></section>
  );
}
const cols = { 'For Students': ['Explore Colleges', 'Find Opportunities', 'Internships', 'Full-time Jobs', 'Part-time & Gig', 'Application Tracker'], 'For Colleges': ['List Your College', 'Admissions', 'Fee Collection', 'Placements'], 'For Employers': ['Post a Job', 'Find Talent', 'Campus Hiring'], Company: ['About Us', 'Contact Us', 'Blogs', 'Careers'], 'Legal & Policies': ['Privacy Policy', 'Terms & Conditions', 'Refund & Cancellation Policy', 'Cookie Policy', 'Grievance Redressal', 'Job & Internship Disclaimer', 'View all policies →'] };
export function Footer() {
  return (
    <footer className="foot"><div className="wrap">
      <div className="foot-g">
        <div className="brand"><a href="#top" className="logo">Campus<span>Pe</span></a><p>From choosing a college to finding your next opportunity.</p><p className="mut">CampusPe connects students, colleges and employers in one place.</p></div>
        {Object.entries(cols).map(([h, l]) => (<div key={h}><h4>{h}</h4>{l.map((x) => <a key={x} href="#top">{x}</a>)}</div>))}
      </div>
      <div className="foot-c"><a href="mailto:contactus@campuspe.com">✉ contactus@campuspe.com</a><a href="tel:+916362606464">📞 +91 6362606464</a><span className="ok">● Students · Colleges · Employers</span></div>
      <div className="foot-b"><span>© 2026 CampusPe Technologies Pvt. Ltd. Privacy Terms Grievance</span><div className="soc">{['in', 'ig', 'x', 'f', 'wa', '▶'].map((s) => <a key={s} href="#top" aria-label={s}>{s}</a>)}</div></div>
    </div></footer>
  );
}
