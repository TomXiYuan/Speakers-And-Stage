import { useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import links from '../content/links.json';
export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggle = useRef(null);
  function closeOnEscape(event) {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current.focus(); }
  }
  return <header className="site-header" onKeyDown={closeOnEscape}>
    <div className="header-inner">
      <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="Speakers & Stage home"><img src="/images/ss-logo.png" alt="Speakers & Stage, DUU" width="600" height="600" /></Link>
      <nav id="main-navigation" className={`navigation ${open ? 'is-open' : ''}`} aria-label="Main navigation" key={pathname}>
        {links.navigation.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}>{link.label}</NavLink>)}
      </nav>
      <Link className="button header-suggest" to="/get-involved#suggest" onClick={() => setOpen(false)}>Suggest a Speaker <span aria-hidden="true">↗</span></Link>
      <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '×' : '☰'}</span></button>
    </div>
  </header>;
}
