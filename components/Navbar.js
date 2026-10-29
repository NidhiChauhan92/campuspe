'use client';
import { useState } from 'react';
import { Button } from './ui';
const links = [['Colleges', '#colleges'], ['Employers', '#employers'], ['Jobs', '#jobs'], ['Blogs', '#support']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-in">
        <a href="#top" className="logo" aria-label="CampusPe home">Campus<span>Pe</span></a>
        <nav className={open ? 'open' : ''} aria-label="Primary">
          {links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <div className="auth"><a href="#top" className="signin">Sign In</a><Button href="#top" size="sm">Sign Up</Button></div>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      </div>
    </header>
  );
}
