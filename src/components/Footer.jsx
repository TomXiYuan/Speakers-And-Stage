import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks.jsx';
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-inner">
    <Link to="/" aria-label="Speakers & Stage home"><img className="footer-logo" src="/images/ss-logo.png" alt="Speakers & Stage, DUU" width="600" height="600" /></Link>
    <div><p className="eyebrow">Duke University Union</p><p className="footer-title">Your campus. Your conversation.</p><p>Speakers & Stage · Duke University</p></div>
    <SocialLinks />
  </div></footer>;
}
