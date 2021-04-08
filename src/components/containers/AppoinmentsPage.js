import React, { useEffect } from 'react';
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

export default AppoinmentsPage;
