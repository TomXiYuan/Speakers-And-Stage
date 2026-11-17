
import links from '../content/links.json';
import SocialLinks from '../components/SocialLinks.jsx';

export default function GetInvolved() {
  return (
  <div className="container section get-involved-page">
      <div className="page-intro">
        <p className="eyebrow">
          Students help decide who comes to campus
        </p>
        <h1>Get Involved</h1>
        <p className="lead">
          Bring your ideas. Help build the next conversation.
        </p>
      </div>

      <div className="action-list">
        {links.actions.map((action, index) => (
          <section
            key={action.id}
            id={action.id}
            tabIndex="-1"
            className="action-card"
            aria-labelledby={`${action.id}-title`}
          >
            <p className="eyebrow">0{index + 1}</p>

            <div>
              <h2 id={`${action.id}-title`}>{action.title}</h2>
              <p>{action.description}</p>
            </div>

            <div>
              <p>{action.details}</p>

              {action.url && (
                <a
                  href={action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link"
                >
                  {action.buttonText} ↗
                </a>
              )}

              {action.id === 'contact' && (
                <div className="contact-details">
                  <p>{action.contactName}</p>

                  <p>
                    General inquiries:{' '}
                    <a href={`mailto:${action.email}`}>
                      {action.email}
                    </a>
                  </p>

                  <p>
                    Chair:{' '}
                    <a href={`mailto:${action.chairEmail}`}>
                      {action.chairEmail}
                    </a>
                  </p>

                  <SocialLinks />
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
