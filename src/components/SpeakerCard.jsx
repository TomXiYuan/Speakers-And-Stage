import PhotoPlaceholder from './PhotoPlaceholder.jsx';
import ThemeChip from './ThemeChip.jsx';
export default function SpeakerCard({ speaker }) {
  return <article className="speaker-card"><PhotoPlaceholder label={speaker.image} /><h3>{speaker.name}</h3><p>{speaker.event} · {speaker.year}</p><ThemeChip theme={speaker.theme} /></article>;
}
