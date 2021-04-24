import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import BrandBar from '../../components/containers/BrandBar';

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

describe('BrandBar', () => {
  it('renders the BrandBar component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <BrandBar />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
