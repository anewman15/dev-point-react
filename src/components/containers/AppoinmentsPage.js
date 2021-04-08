import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import getAppointments from '../../sandbox/getAppointments';

function AppoinmentsPage() {
  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      getAppointments()
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div>
      Hi
    </div>
  );
}

AppoinmentsPage.propTypes = {
  appointments: PropTypes.array,
}.isRequired;

export default AppoinmentsPage;
