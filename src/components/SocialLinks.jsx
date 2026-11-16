import links from '../content/links.json';
export default function SocialLinks() {
  return <div className="social-links">{links.social.map(link => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>)}</div>;
}
