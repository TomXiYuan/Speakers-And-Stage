const paths = {
  Speakers: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" /><path d="M8 21h8" /></>,
  'Event Planning': <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="m9 15 2 2 4-4" /></>,
  Promotion: <><path d="M3 10v4h3l7 5V5L6 10H3Z" /><path d="M17 9a4 4 0 0 1 0 6" /><path d="M19.5 6.5a8 8 0 0 1 0 11" /></>,
  Hosting: <><path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z" /></>,
};
export default function PillarIcon({ name, step }) {
  return <div className="pillar-icon" aria-hidden="true">{step && <span className="pillar-step">{String(step).padStart(2, '0')}</span>}<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg></div>;
}
