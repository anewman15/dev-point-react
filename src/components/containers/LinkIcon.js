import { PropTypes } from 'prop-types';
import { ImGithub, ImLinkedin, ImStackoverflow } from 'react-icons/im';

function LinkIcon({ iconName }) {
  let icon;
  if (iconName === 'github') {
    icon = <ImGithub />;
  }
  if (iconName === 'linkedin') {
    icon = <ImLinkedin />;
  }
  if (iconName === 'zoom') {
    icon = <ImStackoverflow />;
  }

  return (
    <>
      {icon}
    </>
  );
}

LinkIcon.propTypes = {
  iconName: PropTypes.string,
}.isRequired;

export default LinkIcon;
