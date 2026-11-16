import { Link } from 'react-router-dom';
export default function NotFound() {
  return <div className="container section"><p className="eyebrow">404 · Off stage</p><h1>Page not found.</h1><p className="lead">Let’s get you back to the conversation.</p><Link className="button" to="/">Back to Home ↗</Link></div>;
}
