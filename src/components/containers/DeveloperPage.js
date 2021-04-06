/* eslint-disable no-unused-vars */
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { saveCurrentDev } from '../../redux/actions/developer';
import getCurrentDev from '../../sandbox/getCurrentDev';
import LinkIcon from './LinkIcon';

function DeveloperPage({
  authStatus,
  currentDev,
  saveCurrentDev,
  match,
}) {
  useEffect(() => {
    let cancelled = false;
    if (!cancelled) {
      getCurrentDev(match.params.id)
        .then(response => response.json())
        .then(data => {
          if (data.user) {
            saveCurrentDev(data.user);
          }
        });
    }
    return () => {
      cancelled = true;
    };
  }, []);

  const devLinks = currentDev.links.map(link => (
    <a className="p-3 m-2 is-size-3 has-text-grey-light" key={link.id} href={link.url}>
      <LinkIcon iconName={link.link_name.toLowerCase()} />
    </a>
  ));

  const devSkills = currentDev.skills.map(skill => (
    <tr key={skill.id + 1}>
      <td className="is-uppercase has-text-weight-light">{skill.skill_name}</td>
      <td>2 years</td>
    </tr>
  ));

  return (
    <div className="m-6">
      <div className="columns is-centered is-vcentered my-3 px-5 has-background-dark has-text-white">
        <p className="column is-half-tablet is-size-4 has-text-weight-bold">
          {`${currentDev.first_name} ${currentDev.last_name}`}
        </p>
        <div className="column is-half-tablet">
          <p className="has-text-weight-bold">
            <span>{`${currentDev.jobs[0].title}`}</span>
            <span className="mx-1 is-size-7">@</span>
            <span className="mx-1 is-size-6 has-text-weight-bold">
              {`${currentDev.jobs[0].company_name}`}
            </span>
          </p>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-half-tablet">
          <div className="profile-image">
            <img className="" src={`${process.env.PUBLIC_URL}/dev.png`} alt="dev" />
          </div>
          <div className="my-6 has-text-centered">
            {devLinks}
          </div>
        </div>
        <div className="column is-half-tablet is-centered">
          <table className="table is-striped is-narrower is-hoverable is-fullwidth">
            <tbody className="">
              {devSkills}
            </tbody>
          </table>
          <div className="has-text-centered my-6">
            <button type="button" className="button is-primary is-rounded has-text-weight-bold is-uppercase">Book an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

DeveloperPage.propTypes = {
  authStatus: PropTypes.bool,
  currentDev: PropTypes.object,
}.isRequired;

const mapStateToProps = state => (
  {
    authStatus: state.authStatus,
    currentDev: state.currentDev,
  }
);

export default connect(mapStateToProps, { saveCurrentDev })(DeveloperPage);
