import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import LinkIcon from './LinkIcon';

function DevelopersListItem({ dev }) {
  const { links, skills, employments } = dev;
  const itemLinks = links.length && links.map(link => (
    <a className="text-l text-secondary-300 hover:text-primary-500" key={link.id} href={link.url} target="_blank" rel="noreferrer">
      <LinkIcon iconName={link.link_name.toLowerCase()} />
    </a>
  ));

  const itemSkills = skills.length && skills.map(skill => <span className="skill-pill" key={skill.id}>{skill.skill_name}</span>);
  return (
    <div className="dev-item-container bg-secondary-50 rounded filter drop-shadow-lg">
      <div className="px-2 md:px-4 flex flex-wrap justify-start items-start space-x-6">
        <div className="">
          <Link to={`/developers/${dev.user.id}`}>
            <img className="rounded-full" src={`${process.env.PUBLIC_URL}/dev.png`} alt="dev" width="128" />
          </Link>
        </div>
        <div className="my-3">
          <p className="text-primary-700 text-xl font-semibold">
            <Link to={`/developers/${dev.user.id}`}>{`${dev.user.first_name} ${dev.user.last_name}`}</Link>
          </p>

          {
            employments.length
              ? (
                <p className="text-l text-secondary-700 font-bold">
                  {employments[0].title}
                </p>
              )
              : null
          }

          <div className="my-3 flex flex-wrap justify-start items-center space-x-4">
            {itemLinks}
          </div>
        </div>
      </div>

      <hr className="my-0 mx-6 border-1 border-gray-100" />

      <div className="my-4 mx-6 px-4 flex flex-wrap">
        {itemSkills}
      </div>
    </div>
  );
}

DevelopersListItem.propTypes = {
  dev: PropTypes.object,
}.isRequired;

export default DevelopersListItem;
