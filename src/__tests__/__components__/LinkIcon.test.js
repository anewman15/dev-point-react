import { unmountComponentAtNode } from 'react-dom';
import renderer from 'react-test-renderer';
import LinkIcon from '../../components/containers/LinkIcon';

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

describe('LinkIcon', () => {
  it('renders the github link icon when icon name is github', () => {
    const tree = renderer
      .create(
        <LinkIcon iconName="github" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
