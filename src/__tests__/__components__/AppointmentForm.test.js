import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import AppointmentForm from '../../components/containers/AppointmentForm';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('AppointmentsForm', () => {
  it('renders the AppointmentForm component to the dom', () => {
    const tree = renderer
      .create(<AppointmentForm />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
