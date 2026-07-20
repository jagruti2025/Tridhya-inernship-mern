import { useState } from 'react';

function FeatureCard({ image, title, description }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="feature-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>

      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <button
          className={`like-btn ${liked ? 'liked' : ''}`}
          onClick={() => setLiked((prev) => !prev)}
          aria-label="Like this feature"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={liked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
          <span>{liked ? 'Liked' : 'Like'}</span>
        </button>
      </div>
    </div>
  );
}

export default FeatureCard;