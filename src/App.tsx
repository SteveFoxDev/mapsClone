import { useState } from 'react';
import type { Place } from './api/Place';
import Map from './components/Map';
import LocationSearch from './components/LocationSearch';


function App() {
  const [place, setPlace] = useState<Place | null>(null);
  
  return (
    <div className="h-screen w-screen grid grid-cols-12 bg-blue-900">
      <div className="col-span-3 p-2 bg-gray-200 m-1 rounded">
        <LocationSearch onPlaceClick={(p) => setPlace(p)}/>
      </div>
      <div className="col-span-9 m-1">
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;
