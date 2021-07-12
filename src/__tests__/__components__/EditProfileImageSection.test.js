import { unmountComponentAtNode } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import EditProfileImageSection from '../../components/containers/EditProfileImageSection';

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

describe('EditProfileImageSection', () => {
  it('renders the EditProfileImageSection component to the dom', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <EditProfileImageSection />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
