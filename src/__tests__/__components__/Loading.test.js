import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Loading from '../../components/presentational/Loading';

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

describe('Loading', () => {
  it('renders the Loading component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Loading />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
