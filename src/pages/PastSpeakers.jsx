import speakers from '../content/speakers.json';
import SpeakerCard from '../components/SpeakerCard.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
export default function PastSpeakers() {
  const featured = speakers[0];
  return <>
  <section className="container section"><div className="page-intro"><p className="eyebrow">On the S&S stage</p><h1>Past Speakers</h1><p className="lead">The voices, ideas, and moments that make a campus conversation.</p></div><h2>Event Archive</h2><div className="card-grid speaker-grid">{speakers.map(speaker => <SpeakerCard key={speaker.id} speaker={speaker} />)}</div></section>
  <section className="feature-section section"><div className="container"><p className="eyebrow">Speaker spotlight</p><h2>A closer look</h2><div className="feature-layout"><PhotoPlaceholder label={featured.image} alt={`${featured.name} event flyer`} /><div className="feature-copy"><h3>{featured.name}</h3><p>{featured.intro}</p><div className="feature-note"><h3>Behind the Scenes</h3><p>{featured.behindTheScenes}</p></div><div className="feature-note"><h3>Highlight moment</h3><p>{featured.highlight}</p></div><div className="feature-note"><h3>Event date</h3><p>{featured.date}</p></div></div></div></div></section>
  </>;
}
