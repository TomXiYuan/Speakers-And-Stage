import PhotoPlaceholder from './PhotoPlaceholder.jsx';
export default function TeamCard({ member }) {
  return <article className="team-card"><PhotoPlaceholder label={member.image} /><h3>{member.name}</h3><p><strong>{member.role}</strong></p>{member.funFact && <p>{member.funFact}</p>}</article>;
}
