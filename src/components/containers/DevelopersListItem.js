import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import LinkIcon from './LinkIcon';

function DevelopersListItem({ dev }) {
  const { links, skills, jobs } = dev;
  const itemLinks = links.map(link => (
    <a className="p-3 m-2 is-size-5 has-text-grey-light" key={link.id} href={link.url} target="_blank" rel="noreferrer">
      <LinkIcon iconName={link.link_name.toLowerCase()} />
    </a>
  ));

  const itemSkills = skills.map(skill => <span className="m-1 button is-primary is-small is-rounded has-text-weight-bold" key={skill.id}>{skill.skill_name}</span>);
  const job = jobs[0];

  return (
    <div className="p-2">
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
          {job.title}
        </div>
        <div className="is-divider has-text-grey-lighter has-text-weight-bolder">. . . . . . . . . . . . . . . . </div>
        <div className="px-6 m-3">
          {itemSkills}
        </div>
        <div>
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
