import { Link } from 'react-router-dom';
import events from '../content/events.json';
import themes from '../content/themes.json';
import EventCard from '../components/EventCard.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
export default function Home() {
  const upcoming = events.filter(event => event.status === 'upcoming').slice(0, 3);
  return <>
    <section className="hero"><div className="container hero-inner">
      <div className="hero-copy"><img className="hero-logo" src="/images/ss-logo.png" alt="Speakers & Stage, DUU" width="600" height="600" />
        <p className="eyebrow">Duke University Union · Speakers & Stage</p><h1>Your voice.<br />Our <span>stage.</span></h1><p className="lead">Big ideas. Live conversations. Chosen by students.</p>
        <div className="button-row"><Link className="button button-light" to="/events">Explore Events <span aria-hidden="true">↗</span></Link><Link className="button button-outline" to="/get-involved">Get Involved</Link></div>
      </div><div><PhotoPlaceholder label="[Crowd or stage photo placeholder]" className="hero-visual" /><p className="hero-caption">DUU SPEAKERS & STAGE / DUKE UNIVERSITY</p></div>
    </div></section>
    <section className="container section"><div className="section-heading"><h2>Upcoming events</h2><Link to="/events">Explore all events ↗</Link></div>
      {upcoming.length ? <><p className="prototype-note">Placeholder lineup — these are layout examples, not announced events.</p><div className="card-grid">{upcoming.map(event => <EventCard key={event.id} event={event} />)}</div></> : <div className="empty-events"><h3>Stay tuned for our next event</h3><p>Follow S&S for updates from the committee.</p><SocialLinks /></div>}
    </section>
    <section className="themes-section section"><div className="container"><p className="eyebrow">A stage for every perspective</p><h2>What We Do</h2><div className="theme-grid">{themes.map((theme, index) => <Link key={theme.name} className={`theme-tile theme-${theme.color}`} to="/events"><div className="tile-top"><span>0{index + 1}</span><span aria-hidden="true">↗</span></div><h3>{theme.name}</h3></Link>)}</div></div></section>
    <section className="closing-band section"><div className="container"><p className="eyebrow">Help shape what’s next</p><div className="closing-grid"><Link to="/get-involved#join">Join the Committee ↗</Link><Link to="/get-involved#suggest">Suggest Our Next Speaker ↗</Link></div></div></section>
  </>;
}
