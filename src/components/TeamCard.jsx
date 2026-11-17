import PhotoPlaceholder from './PhotoPlaceholder.jsx';
export default function TeamCard({ member }) {
  const details = [member.classYear, member.major].filter(Boolean).join(' · ');
  return <article className="team-card">
    {member.placeholder ? <PhotoPlaceholder label={member.image} /> : <img className="team-photo" src={member.image} alt={`Portrait of ${member.name}`} loading="lazy" width="480" height="480" />}
    <p className="team-role">{member.role}</p>
    <h3>{member.name}</h3>
    {details && <p className="team-details">{details}</p>}
    {member.quote && <blockquote className="team-quote">“{member.quote}”</blockquote>}
    {member.funFact && <p>{member.funFact}</p>}
  </article>;
}
