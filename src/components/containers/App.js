import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store/store';
import Routes from '../routes/Routes';
import '../../styles/App.scss';
import SideNav from './SideNav';
import BrandBar from './BrandBar';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <BrandBar />
        <div className="columns is-desktop is-centered">
          <div className="column is-one-fifth-desktop">
            <SideNav />
          </div>
          <div className="column is-four-fifths-desktop">
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
