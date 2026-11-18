
import { Link } from 'react-router-dom';
import events from '../content/events.json';
import themes from '../content/themes.json';
import EventCard from '../components/EventCard.jsx';
import SocialLinks from '../components/SocialLinks.jsx';

export default function Home() {
  const upcoming = events
    .filter(event => event.status === 'upcoming')
    .slice(0, 3);

  return (
    <>
      {/* HOME HERO */}
      <section className="hero hero-with-background">
        <div className="container hero-inner">
          <div className="hero-copy">

            <img
              className="hero-logo"
              src="/images/ss-logo.png"
              alt="Speakers & Stage, DUU"
              width="600"
              height="600"
            />

            <p className="eyebrow">
              Duke University Union · Speakers & Stage
            </p>

            <h1>
              Your Voice
              <br />
              Our <span>Stage</span>
            </h1>

            <p className="lead">
              Big ideas. Live conversations. Chosen by students.
            </p>

            <div className="button-row">
              <Link
                className="button button-light"
                to="/events"
              >
                Explore Events <span aria-hidden="true">↗</span>
              </Link>

              <Link
                className="button button-outline"
                to="/get-involved"
              >
                Get Involved
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="container section">
        <div className="section-heading">
          <h2>Upcoming events</h2>
          <Link to="/events">
            Explore all events ↗
          </Link>
        </div>

        {upcoming.length ? (
          <div className="card-grid">
            {upcoming.map(event => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}
          </div>
        ) : (
          <div className="empty-events">
            <h3>Stay tuned for our next event</h3>
            <p>Follow S&S for updates from the committee.</p>
            <SocialLinks />
          </div>
        )}
      </section>

      {/* WHAT WE DO */}
      <section className="themes-section section">
        <div className="container">
          <p className="eyebrow">
            A stage for every perspective
          </p>

          <h2>What We Do</h2>

          <div className="theme-grid">
            {themes.map((theme, index) => (
              <Link
                key={theme.name}
                className={`theme-tile theme-${theme.color}`}
                to="/events"
              >
                <div className="tile-top">
                  <span>0{index + 1}</span>
                  <span aria-hidden="true">↗</span>
                </div>

                <h3>{theme.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="closing-band section">
        <div className="container">
          <p className="eyebrow">
            Help shape what’s next
          </p>

          <div className="closing-grid">
            <Link to="/get-involved#join">
              Join the Committee ↗
            </Link>

            <Link to="/get-involved#suggest">
              Suggest Our Next Speaker ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
