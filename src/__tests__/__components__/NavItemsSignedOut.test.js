import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavItemsSignedOut from '../../components/presentational/NavItemsSignedOut';

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

describe('NavItemsSignedOut', () => {
  it('renders the NavItemsSignedOut component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <NavItemsSignedOut />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
