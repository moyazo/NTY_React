import { FC } from 'react';
import { CustomApp } from './components/styles';
import Router from './container';


const App: FC = () => {
  return (
      <CustomApp className='App'>
        <Router />
      </CustomApp>
  );
}

export default App;
