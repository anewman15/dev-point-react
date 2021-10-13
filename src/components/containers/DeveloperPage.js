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
import AppointmentForm from './AppointmentForm';

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
    <a className="my-2 text-2xl text-gray-400" key={link.id} href={link.url}>
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

  return (
    <div className="page-container bg-gray-50 page-border page-shadow">
      <div className="md:w-10-12 lg:w-9/12">
        <div className="my-4 flex justify-around items-center space-x-4">
          <div className="">
            <img className="rounded-full" src={`${process.env.PUBLIC_URL}/dev.png`} alt="dev" width="180" />
          </div>
          <div className="">
            <p className="my-3 text-3xl text-primary-700 font-bold">
              {`${currentDev.first_name} ${currentDev.last_name}`}
            </p>
            <div className="my-3">
              <h2 className="text-xl text-gray-800 font-semibold">
                <span className="text-gray-300 mr-2"><i className="fas fa-suitcase" /></span>
                { currentDev.employments && `${currentDev.employments[0].title}`}
              </h2>
              <h3 className="text-gray-800">
                <span className="text-gray-300 mr-2"><i className="fas fa-building" /></span>
                {currentDev.employments && `${currentDev.employments[0].company_name}`}
              </h3>

            </div>
            <div className="flex justify-start space-x-4">
              {devLinks}
            </div>
          </div>
        </div>
      </div>

      <hr className="mx-8 border-1 border-gray-200" />

      <div className="mx-auto flex flex-col justify-center lg:flex-row lg:justify-start items-center space-x-4">
        <div className="px-8 order-last lg:order-first">
          <AppointmentForm devId={currentDev.id} devConfLink={currentDev.links[2].url} />
        </div>
        <div className="order-first lg:order-last">
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
        </div>
      </div>
    </div>
  );
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
