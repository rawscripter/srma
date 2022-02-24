import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import is from 'is_js';
import MainLayout from './MainLayout';

import ErrorLayout from './ErrorLayout';
import Landing from 'components/pages/landing/Landing';
import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from 'components/common/Toast';
import LoginPage from 'components/pages/auth/login.page';
import RegisterPage from 'components/pages/auth/register.page';
import { AuthPorviderContext } from 'services/auth/auth.context';
import { BikeServiceContext } from 'services/bikeService/bikeService.context';
import { UserProfileContext } from 'services/profile/userProfile.context';
import { AppoinmentContext } from 'services/appoinment/appoinment.context';

const Layout = () => {
  const HTMLClassList = document.getElementsByTagName('html')[0].classList;

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.chrome()) {
      HTMLClassList.add('chrome');
    }
    if (is.firefox()) {
      HTMLClassList.add('firefox');
    }
  }, [HTMLClassList]);

  return (
    <AuthPorviderContext>
      <UserProfileContext>
        <BikeServiceContext>
          <AppoinmentContext>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/auth/login" exact component={LoginPage} />
              <Route path="/auth/register" exact component={RegisterPage} />
              <Route path="/errors" component={ErrorLayout} />
              <Route component={MainLayout} />
              <Redirect to="/errors/404" />
            </Switch>
            {/* <SettingsToggle /> */}
            {/* <SettingsPanel /> */}
            <ToastContainer
              transition={Fade}
              closeButton={CloseButton}
              closeOnClick
              position={toast.POSITION.BOTTOM_LEFT}
            />
          </AppoinmentContext>
        </BikeServiceContext>
      </UserProfileContext>
    </AuthPorviderContext>
  );
};

export default Layout;
