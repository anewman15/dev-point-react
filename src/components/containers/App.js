import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store/store';
import Routes from '../routes/Routes';
import SideNav from './SideNav';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SideNav />
        <div className="mx-auto">
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
