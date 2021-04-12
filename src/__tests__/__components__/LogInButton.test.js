import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SignUpButton from '../../components/presentational/SignUpButton';

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

describe('SignUpButton', () => {
  it('renders the SIgnUpButton component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SignUpButton />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
