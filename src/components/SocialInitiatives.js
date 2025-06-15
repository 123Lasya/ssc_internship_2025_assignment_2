import React from 'react';
import './SocialInitiatives.css';

function SocialInitiatives() {
  return (
    <div className="social-section-wrapper">
      <div className="social-service-section">
        <h2 className="section-title">Social Service Initiatives</h2>
        <p className="section-subtitle">
          Creating positive impact through community service and social responsibility
        </p>

        <div className="card-container">
          {/* Community Outreach */}
          <div className="card">
            <img
              src="https://res.cloudinary.com/dgrqec72k/image/upload/v1749964328/ssc_image1_cp9wep.jpg"
              alt="Community Outreach"
              className="card-image"
            />
            <div className="icon">❤️</div>
            <h3>Community Outreach</h3>
            <p>
              Food distribution, blanket donations. Making a difference in our local communities through direct support.
            </p>
            <ul>
              <li>Food Distribution Drives</li>
              <li>Blanket Donation Campaigns</li>
              <li>Healthcare Support</li>
              <li>Emergency Relief</li>
            </ul>
          </div>

          {/* Celebration Events */}
          <div className="card">
            <img
              src="https://res.cloudinary.com/dgrqec72k/image/upload/v1749964814/ssc_image3_ungsqb.jpg"
              alt="Celebration Events"
              className="card-image"
            />
            <div className="icon yellow">🧑‍🤝‍🧑</div>
            <h3>Celebration Events</h3>
            <p>
              Children's Day, Old Age Home visits. Bringing joy and celebration to those who need it most.
            </p>
            <ul>
              <li>Children’s Day Celebrations</li>
              <li>Old Age Home Visits</li>
              <li>Festival Celebrations</li>
              <li>Cultural Programs</li>
            </ul>
          </div>

          {/* School Support */}
          <div className="card">
            <img
              src="https://res.cloudinary.com/dgrqec72k/image/upload/v1749964489/ssc_image2_qxijfa.jpg"
              alt="School Support"
              className="card-image"
            />
            <div className="icon green">📱</div>
            <h3>School Support</h3>
            <p>
              Education and meal distribution in underprivileged schools. Ensuring access to quality education for all.
            </p>
            <ul>
              <li>School Support Programs</li>
              <li>Free Meal Distribution</li>
              <li>Study Material Donation</li>
              <li>Tutorial Sessions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialInitiatives;
