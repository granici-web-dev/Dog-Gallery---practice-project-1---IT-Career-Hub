import DogCard from '../dogCard';
import styles from './styles.module.css';

function DogGallery({ dogs }) {
  return (
    <div className={styles.dogGallery}>
      {dogs.map((dog, index) => (
        <DogCard key={index} dog={dog} />
      ))}
    </div>
  );
}

export default DogGallery;
