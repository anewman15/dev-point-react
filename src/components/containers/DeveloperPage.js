/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { saveCurrentDev } from '../../redux/actions/developer';
import getCurrentDev from '../../sandbox/getCurrentDev';
import LinkIcon from './LinkIcon';

function DeveloperPage({
  currentUser,
  currentDev,
  saveCurrentDev,
  match,
}) {
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      getCurrentDev(match.params.id)
        .then(response => response.json())
        .then(data => {
          if (data.user) {
            saveCurrentDev(data.user);
          }
        });
    }
    return () => {
      isCancelled = true;
    };
  }, []);

  const devLinks = currentDev.links && currentDev.links.map(link => (
    <a className="p-3 m-2 is-size-3 has-text-grey-light" key={link.id} href={link.url}>
      <LinkIcon iconName={link.link_name.toLowerCase()} />
    </a>
  ));

  const devSkills = currentDev.skills && currentDev.skills.map(skill => (
    <tr key={skill.id + 1}>
      <td className="is-uppercase has-text-weight-light">{skill.skill_name}</td>
      <td className="has-text-centered">{`${skill.experience} years`}</td>
      <td className="has-text-centered">{`${skill.projects_count}`}</td>
    </tr>
  ));

  const devProfile = (
    <div className="m-6">
      <div className="columns is-centered is-vcentered my-3 px-5 has-background-dark has-text-white">
        <p className="column is-half-tablet is-size-4 has-text-weight-bold">
          {`${currentDev.first_name} ${currentDev.last_name}`}
        </p>
        <div className="column is-half-tablet">
          <p className="has-text-weight-bold">
            <span>{ currentDev.jobs && `${currentDev.jobs[0].title}`}</span>
            <span className="mx-1 is-size-7">@</span>
            <span className="mx-1 is-size-6 has-text-weight-bold">
              {currentDev.jobs ? `${currentDev.jobs[0].company_name}` : null }
            </span>
          </p>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-half-tablet">
          <div className="image profile-image">
            <img className="is-rounded" src={`${process.env.PUBLIC_URL}/dev.png`} alt="dev" />
          </div>
          <div className="my-6 has-text-centered">
            {devLinks}
          </div>
        </div>
        <div className="column is-half-tablet is-centered">
          <table className="table is-striped is-narrower is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th></th>
                <th className="has-text-centered">Exp</th>
                <th className="has-text-centered">Projects</th>
              </tr>
            </thead>
            <tbody className="">
              {devSkills}
            </tbody>
          </table>
          <div className="has-text-centered my-6">
            <Link
              type="button"
              className="button is-primary is-rounded has-text-weight-bold is-uppercase"
              to="/book_appointment"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const content = currentUser.id ? devProfile : <Redirect to="/login" />;

  return content;
}

DeveloperPage.propTypes = {
  currentUser: PropTypes.object,
  currentDev: PropTypes.object,
}.isRequired;

const mapStateToProps = state => (
  {
    currentUser: state.currentUser,
    currentDev: state.currentDev,
  }
);

export default connect(mapStateToProps, { saveCurrentDev })(DeveloperPage);
