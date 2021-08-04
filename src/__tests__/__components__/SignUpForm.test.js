import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SignUpForm from '../../components/containers/SignUpForm';

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

describe('SignUpForm', () => {
  it('renders the SignUpForm component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <SignUpForm />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
