import { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import PastSpeakers from './pages/PastSpeakers.jsx';
import About from './pages/About.jsx';
import GetInvolved from './pages/GetInvolved.jsx';
import NotFound from './pages/NotFound.jsx';
import links from './content/links.json';
function Site() {
  const { pathname, hash } = useLocation();
  const main = useRef(null);
  useEffect(() => {
    document.title = `${links.navigation.find(link => link.to === pathname)?.label || 'Page not found'} | DUU Speakers & Stage`;
    const anchor = hash && document.getElementById(hash.slice(1));
    if (anchor) { anchor.scrollIntoView(); anchor.focus({ preventScroll: true }); }
    else { window.scrollTo(0, 0); main.current.focus({ preventScroll: true }); }
  }, [pathname, hash]);
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex="-1" ref={main}><Routes>
    <Route path="/" element={<Home />} /><Route path="/events" element={<Events />} /><Route path="/past-speakers" element={<PastSpeakers />} /><Route path="/about" element={<About />} /><Route path="/get-involved" element={<GetInvolved />} /><Route path="*" element={<NotFound />} />
  </Routes></main><Footer /></>;
}
export default function App() { return <BrowserRouter><Site /></BrowserRouter>; }
