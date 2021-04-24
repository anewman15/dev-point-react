import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavItemDevelopers from '../../components/containers/NavItemDevelopers';

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

describe('NavItemAppointments', () => {
  it('renders the NavItemApointments component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <NavItemDevelopers />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
