import { Fragment } from 'react';
import Cards from './components/Cards';
import Title from './components/Title';
import './style.css';

function App() {
  return (
    <Fragment>
      <Title />
      <Cards />
    </Fragment>
  );
}

export default App;
