import { FC, Fragment, useCallback, useEffect, useState } from 'react';
import './App.css';
import startApp from './services/dashboard';
// import startApp2 from './services/details';
import Card from './components/card/card';
import React from 'react';
import Button from './components/button/button';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import startApp2 from './services/details';


const App: FC = () => {

  const [response, setResponse] = useState<{ name: any; old: any; new: any; update: any; }[]>([]);
  const [detailsResponse, setDetailsResponse] = useState<{ name: any; url: any; onList: any; description: any; }[]>([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    startApp().then(item => {
      if (item)
        setResponse(item);
    })
  }, []);
  const detailsList = async (genreName: string) => {
    const detailsList = await startApp2(genreName);
    setDetailsResponse(detailsList);
    setShow(!show);
  }
  return (
    <div className='App'>
      <>
        {
          show && response.map(response => {
            return <Card
              title={response.name}
              nuevo={response.new}
              old={response.old}
              update={response.update}
              onclick={() => { detailsList(response.name) }}
              key={response.name}
            />
          })
        }
      </>
      <>
        {
          !show && detailsResponse.map(details => {
            return <Card
              title={details.name}
              image={details.url}
              description={details.description}
              weeks={details.onList}
              onclick={() => { detailsList('') }}
              key={details.name}
            />
          })
        }
      </>
    </div>


  );
}

export default App;
