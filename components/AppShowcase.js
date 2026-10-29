'use client';
import { useState } from 'react';
const screens = ['Discover', 'Post a Job', 'Colleges', 'My Applications', 'XYZ College'];
function Phone({ label, active, onClick }) {
  return (
    <button className={`phone ${active ? 'on' : ''}`} onClick={onClick} aria-label={`Show ${label} screen`}>
      <div className="notch" /><div className="ph-head">{label}</div>
      <div className="ph-body">{[1, 2, 3, 4].map((i) => <i key={i} />)}</div>
    </button>
  );
}
export default function AppShowcase() {
  const [i, setI] = useState(2);
  return (
    <section id="app" className="sec">
      <div className="wrap center">
        <h2 className="h2 blue">Checkout Our App Interface Look</h2>
        <p className="lead small">Experience the power of a unified campus ecosystem right in your pocket. <b>CampusPe</b> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.</p>
        <div className="phones">{screens.map((s, k) => <Phone key={s} label={s} active={k === i} onClick={() => setI(k)} />)}</div>
        <div className="dots">{screens.map((s, k) => <button key={s} className={k === i ? 'on' : ''} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} />)}</div>
      </div>
      <div className="wrap dl">
        <div>
          <h2 className="h2 blue left">Download App Now</h2>
          <p className="lead small left">Elevate your academic journey with Campuspe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you&apos;re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, Campuspe streamlines the connection. Your career doesn&apos;t start at graduation—it starts here.</p>
          <div className="stores"><a href="#app" className="store">▶ <small>GET IT ON</small> Google Play</a><a href="#app" className="store"> <small>Download on the</small> App Store</a></div>
        </div>
        <div className="dl-art"><div className="phone big"><div className="notch" /><div className="ph-head">Hi, Amit Kumar</div><div className="ph-body"><i /><i /><i /></div></div></div>
      </div>
    </section>
  );
}
