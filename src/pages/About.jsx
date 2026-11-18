import about from '../content/about.json';
import team from '../content/team.json';
import TeamCard from '../components/TeamCard.jsx';
import PillarIcon from '../components/PillarIcon.jsx';
export default function About() {
  return <>
    <section className="mission-block section"><div className="container"><p className="eyebrow">Duke University Union · Speakers & Stage</p><h1>About Us</h1><h2>Our mission</h2><p className="mission-text">{about.mission}</p></div></section>
    <section className="duu-section section"><div className="container duu-layout"><div><p className="eyebrow">Who we are part of</p><h2>{about.duu.heading}</h2>{about.duu.text.map(paragraph => <p className="lead" key={paragraph}>{paragraph}</p>)}</div><dl className="stat-list">{about.duu.stats.map(stat => <div className="stat" key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl></div></section>
    <section className="container section"><p className="eyebrow">From the first idea to the final applause</p><h2>What We Do</h2><p className="lead what-we-do-intro">{about.whatWeDo}</p><div className="pillar-grid">{about.pillars.map((pillar, index) => <article className="pillar" key={pillar.name}><PillarIcon name={pillar.name} step={index + 1} /><h3>{pillar.name}</h3><p>{pillar.description}</p></article>)}</div></section>
    <section className="container section"><p className="eyebrow">The people behind the stage</p><h2>Meet the Team</h2><div className="team-grid">{team.map(member => <TeamCard key={member.id} member={member} />)}</div></section>
    <section className="culture-section section"><div className="container"><p className="eyebrow">Life on the committee</p><h2>Committee Culture</h2><p className="lead">{about.cultureIntro}</p><div className="culture-strip">{about.cultureImages.map(photo => <figure className="culture-photo" key={photo.src}><img src={photo.src} alt={photo.alt} loading="lazy" width="800" height="600" /><figcaption>{photo.caption}</figcaption></figure>)}</div><p className="photo-credit">{about.cultureCredit}</p></div></section>
  </>;
}
