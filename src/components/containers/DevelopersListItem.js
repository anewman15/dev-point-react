import { PropTypes } from 'prop-types';

function DevelopersListItem({ dev }) {
  return (
    <div className="p-6">
      <div className="image">
        <img className="is-rounded" src={`${process.env.PUBLIC_URL}/dev.png`} alt="dev" />
      </div>
      <div>{`${dev.user.first_name} ${dev.user.last_name}`}</div>
    </div>
  );
}

DevelopersListItem.propTypes = {
  dev: PropTypes.object,
}.isRequired;

export default DevelopersListItem;
