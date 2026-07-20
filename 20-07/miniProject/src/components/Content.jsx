import { useTheme } from '../context/ThemeContext';
import FeatureCard from './FeatureCard';

const features = [
  {
    "title": "Mountain Adventure",
    "description": "Explore breathtaking mountain landscapes and enjoy thrilling outdoor adventures with nature.",
    "image": "https://picsum.photos/id/1018/400/300"
  },
  {
    "title": "Beach Paradise",
    "description": "Relax on golden sandy beaches with crystal-clear water and stunning sunsets.",
    "image": "https://picsum.photos/id/1015/400/300"
  },
  {
    "title": "City Lights",
    "description": "Experience the vibrant nightlife, iconic landmarks, and modern architecture of the city.",
    "image": "https://picsum.photos/id/1011/400/300"
  },
  {
    "title": "Forest Escape",
    "description": "Take a peaceful journey through lush green forests filled with wildlife and fresh air.",
    "image": "https://picsum.photos/id/1020/400/300"
  },
  {
    "title": "Desert Safari",
    "description": "Ride across golden sand dunes and enjoy an unforgettable desert adventure.",
    "image": "https://picsum.photos/id/1002/400/300"
  },
  {
    "title": "Snow Wonderland",
    "description": "Enjoy skiing, snowboarding, and beautiful snowy landscapes during the winter season.",
    "image": "https://picsum.photos/id/1036/400/300"
  },
  {
    "title": "Countryside Charm",
    "description": "Discover peaceful villages, scenic farms, and beautiful countryside views.",
    "image": "https://picsum.photos/id/1043/400/300"
  },
  {
    "title": "Ocean Adventure",
    "description": "Dive into the deep blue sea and explore colorful marine life and coral reefs.",
    "image": "https://picsum.photos/id/1056/400/300"
  },
  {
    "title": "Ancient Heritage",
    "description": "Visit historical monuments, ancient ruins, and learn about fascinating civilizations.",
    "image": "https://picsum.photos/id/1069/400/300"
  },
  {
    "title": "Camping Night",
    "description": "Spend a memorable night under the stars with a cozy campfire and peaceful surroundings.",
    "image": "https://picsum.photos/id/1074/400/300"
  }
]

function Content() {
  const { theme } = useTheme();

  return (
    <div className={`content ${theme}`}>
      <p className= {`show-current-theme ${theme}`}>
        This is the Current Theme: <strong>{theme}</strong>
      </p>

      <div className="feature-grid">
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;