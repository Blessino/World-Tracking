import { useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'

function Map() {
  const [searchParms, setSearchParams] = useSearchParams();
  const lat = searchParms.get("lat");
  const lng = searchParms.get("lng");
  return (
    <div className={styles.mapContainer}>
        <p>Map</p>
        <h1>
          position: {lat}, {lng}
        </h1>
    </div>
  )
}

export default Map