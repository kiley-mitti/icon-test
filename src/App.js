import './App.css';
import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css';
import { RuxIcon, RuxIconStar } from '@astrouxds/react';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <section>
          <p>Ok! So there is a problem with RuxIcon in CRA in production.</p>
          <p>If you import RuxIcon AND whatever icon you want to use (RuxIconStar in my example) and render them both, there's no problem.</p>
          <RuxIcon icon='star' />
          <RuxIconStar />
        </section>
        <section>
          <p>However, if you only import RuxIcon, it won't show the icon you've actually chosen in production mode.</p>
          <RuxIcon icon='satellite-receive' /> <span>Satellite-receive is supposed to show here.</span>
          <p>I think it has to do with treeshaking and the CRA in production doesn't realize that RuxIconSatelliteReceive is a dependency of RuxIcon with icon="satellite-receive"</p>
        </section>
      </header>
    </div>
  );
}

export default App;
