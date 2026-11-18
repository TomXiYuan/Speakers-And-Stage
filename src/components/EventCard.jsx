import PhotoPlaceholder from './PhotoPlaceholder.jsx';
import ThemeChip from './ThemeChip.jsx';
export default function EventCard({ event }) {
  return <article className="event-card">
    <PhotoPlaceholder label={event.image} alt={`${event.title} flyer`} />
    <div className="card-body"><ThemeChip theme={event.theme} /><h3>{event.title}</h3><p><strong>{event.speaker}</strong><br />{event.intro}</p>
      <div className="event-meta"><p>{event.date} · {event.time}</p><p>{event.location}</p></div>
      <p>{event.description}</p><button className="button" disabled type="button">Register</button>
      <p className="card-note">[Registration URL awaiting committee confirmation]</p><p className="card-note">{event.additionalInfo}</p>
    </div>
  </article>;
}
