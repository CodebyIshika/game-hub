// App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import ghostRunner from './images/ghostrunner.png';
import redDead from './images/red-dead.png';
import tsushima from './images/tsushima.png';
import watchDogs from './images/watch-dogs.png';

function App() {
  const imageUrls = [
    ghostRunner,
    redDead,
    tsushima,
    watchDogs,
  ];

  return (
    <div className="App">
      <Header title="Game Hub" />
      <main>
        <Banner
          heading="Welcome to Game Hub"
          text="Dive into a universe of endless excitement and discover
                the pulse-pounding world of gaming"
          primaryBtn="Buy Now"
          secondaryBtn="Learn More"
        />
        <Gallery imageUrls={imageUrls} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
