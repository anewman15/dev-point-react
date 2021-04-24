import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavItemAppointments from '../../components/containers/NavItemAppointments';

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

describe('NavItemDevelopers', () => {
  it('renders the NavItemDevelopers component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <NavItemAppointments />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
