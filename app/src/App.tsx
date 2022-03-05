
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Router } from './services/routes';
import apiService from './services/api-service';
import { useObservable } from './services/api-service/clientService';

function App() {
  const { change: customerChange, next: customerNext } = useObservable();
  return (
    <>
      <BrowserRouter>
        <Switch>
          {
            Router({...apiService, customerChange, customerNext})
          }
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
