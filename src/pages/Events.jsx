import events from '../content/events.json';
import themes from '../content/themes.json';
import EventCard from '../components/EventCard.jsx';
export default function Events() {
  return <div className="container section"><div className="page-intro"><p className="eyebrow">The next conversation starts here</p><h1>Events</h1><p className="lead">A stage for ideas, perspectives, and the people you want to hear.</p></div>
    <p className="prototype-note" id="event-controls-note">Layout preview: all events are placeholders. Upcoming / Past and theme filters are not active yet. Registration links will follow committee confirmation.</p>
    <div className="event-controls" aria-describedby="event-controls-note"><div className="toggle" role="group" aria-label="Event period (preview only)"><button className="selected" type="button" disabled>Upcoming</button><button type="button" disabled>Past</button></div>
      <div className="filter-chips" role="group" aria-label="Themes (preview only)">{themes.map(theme => <button key={theme.name} className={`theme-chip theme-${theme.color}`} type="button" disabled>{theme.name}</button>)}</div>
    </div><div className="card-grid">{events.map(event => <EventCard key={event.id} event={event} />)}</div>
  </div>;
}
