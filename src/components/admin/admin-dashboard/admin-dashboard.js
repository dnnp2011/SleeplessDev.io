import React from 'react';
import AuthUserContext from '../../../auth/AuthUserContext';
import withAuthorization from '../../../auth/withAuthorization';

const AdminPage = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser =>
        !authUser ?
        <div>
          <p>
            Only Administrators can view this page.
          </p>
        </div>
        :
        <div>
          <p>
            Welcome Administrator!
          </p>
        </div>
      }
    </AuthUserContext.Consumer>
  );
};

const authCondition = (authUser) => !!authUser && authUser.flag === 'ADMIN';

export default withAuthorization(authCondition)(AdminPage);
