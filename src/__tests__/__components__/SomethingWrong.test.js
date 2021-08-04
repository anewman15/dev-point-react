import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SomethingWrong from '../../components/presentational/SomethingWrong';

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

describe('SomethingWrong', () => {
  it('renders the SomethingWrong component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SomethingWrong />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
