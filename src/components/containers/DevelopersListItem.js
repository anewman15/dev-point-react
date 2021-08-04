import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import LinkIcon from './LinkIcon';

function DevelopersListItem({ dev }) {
  const { links, skills, employments } = dev;
  const itemLinks = links.length && links.map(link => (
    <a className="p-3 m-2 is-size-5 has-text-grey-light" key={link.id} href={link.url} target="_blank" rel="noreferrer">
      <LinkIcon iconName={link.link_name.toLowerCase()} />
    </a>
  ));

  const itemSkills = skills.length && skills.map(skill => <button type="button" className="m-1 button is-primary is-small is-rounded has-text-weight-bold" key={skill.id}>{skill.skill_name}</button>);
  const employment = employments.length && employments[0];

  return (
    <div className="px-4 py-2">
      <div className="is-flex is-justify-content-center">
        <div className="image carousel-image">
          <Link to={`/developers/${dev.user.id}`}>
            <img className="is-rounded" src={`${process.env.PUBLIC_URL}/dev.png`} alt="dev" />
          </Link>
        </div>
      </div>
      <div>
        <p className="is-uppercase is-size-4 px-2 mt-5"><Link className="has-text-dark" to={`/developers/${dev.user.id}`}>{`${dev.user.first_name} ${dev.user.last_name}`}</Link></p>
        <div className="has-text-weight-bold">
          {employment.title}
        </div>
        <div className="is-divider has-text-grey-lighter has-text-weight-bolder">. . . . . . . . . . . . . . . . </div>
        <div className="m-3">
          {itemSkills}
        </div>
        <div className="is-flex is-justify-content-center is-align-items-center">
          {itemLinks}
        </div>
      </div>
    </div>
  );
}

DevelopersListItem.propTypes = {
  dev: PropTypes.object,
}.isRequired;

export default DevelopersListItem;
