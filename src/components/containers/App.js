import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store/store';
import Routes from '../routes/Routes';
import '../../styles/App.scss';
import TopNav from './TopNav';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TopNav />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
