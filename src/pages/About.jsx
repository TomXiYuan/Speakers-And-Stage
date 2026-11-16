import about from '../content/about.json';
import team from '../content/team.json';
import TeamCard from '../components/TeamCard.jsx';
import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx';
export default function About() {
  return <>
    <section className="mission-block section"><div className="container"><p className="eyebrow">Duke University Union · Speakers & Stage</p><h1>About Us</h1><h2>Our mission</h2><p className="mission-text">{about.mission}</p></div></section>
    <section className="container section"><p className="eyebrow">From the first idea to the final applause</p><h2>What We Do</h2><div className="pillar-grid">{about.pillars.map(pillar => <article className="pillar" key={pillar.name}><div className="icon-placeholder">{pillar.icon}</div><h3>{pillar.name}</h3><p>{pillar.description}</p></article>)}</div></section>
    <section className="container section"><h2>Meet the Team</h2><p className="prototype-note">[Committee roster coming soon — all member cards are placeholders]</p><div className="team-grid">{team.map(member => <TeamCard key={member.id} member={member} />)}</div></section>
    <section className="culture-section section"><div className="container"><h2>Committee Culture</h2><p className="lead">[A note about life on the committee coming soon]</p><div className="culture-strip">{about.cultureImages.map(label => <PhotoPlaceholder key={label} label={label} />)}</div></div></section>
  </>;
}
