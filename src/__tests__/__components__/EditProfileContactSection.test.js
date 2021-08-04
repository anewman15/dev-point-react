import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import EditProfileContactSection from '../../components/containers/EditProfileContactSection';

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

describe('EditProfileContactSection', () => {
  it('renders the EditProfileContactSection component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <EditProfileContactSection />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
