import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import ResourceCard from '../ResourceCard';
import { resources } from '../../data/homepage';
import './HomeResources.css';

// Section 11 — Study Resources. Stitch shows left-aligned header + footer
// "Explore Resource → #contact" link per card. Cards stay informational
// (no fake URLs); the footer link routes to /resources.
export default function HomeResources() {
  return (
    <section className="rrc-section" aria-labelledby="rrc-resources-title">
      <div className="rrc-container">
        <SectionHeader
          eyebrow={resources.eyebrow}
          title={resources.title}
          description={resources.text}
          align="left"
        />
        <div className="rrc-grid-3 rrc-stagger">
          {resources.items.map((item) => (
            <article key={item.id} className="rrc-resource-wrap">
              <ResourceCard resource={item} />
              <div className="rrc-resource-wrap__foot">
                <Link to="/resources" className="rrc-resource-wrap__link">
                  Explore Resource →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
