import React from 'react';
import { render } from 'react-dom';

// import Counter from './Counter';
// import Counter from './Counter2';
import Application from './components/Application';

// import './styles.scss';
import './components/styles.css';
import { GrudgeProvider } from './components/GrudgeContext';

// const Application = () => {
//   return (
//     <main className="Application">
//       <section className="Counters">
//         <Counter max={15} step={1} />
//       </section>
//     </main>
//   );
// };

render(
  <GrudgeProvider> 
    <Application /> 
  </GrudgeProvider>, 
  document.getElementById('root')
  );
