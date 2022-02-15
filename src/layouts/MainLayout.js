import React, { useContext, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Dashboard from 'components/dashboards/default';
import NavbarTop from 'components/navbar/top/NavbarTop';
import AppContext from 'context/Context';
import Footer from 'components/footer/Footer';
import classNames from 'classnames';
import UserDetailsPage from 'components/pages/dashboard/user-details.page';
import UserAddressPage from 'components/pages/dashboard/user-address.page';
import UserBikePage from 'components/pages/dashboard/user-bike.page';
import { AuthProvider } from 'services/auth/auth.context';
import { useHistory } from 'react-router-dom';

const MainLayout = () => {
  const { isLoggedIn } = useContext(AuthProvider);

  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/auth/login');
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);


  const { hash, pathname } = useLocation();
  const isKanban = pathname.includes('kanban');
  // const isChat = pathname.includes('chat');

  const {
    config: { isFluid, navbarPosition }
  } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (

    <div className={isFluid ? 'container-fluid' : 'container'}>
      <>
        <div className={classNames('content', { 'pb-0': isKanban })}>
          <NavbarTop />
          <Switch>
            <Route path="/meine-daten" exact component={UserDetailsPage} />
            <Route path="/meine-adressen" exact component={UserAddressPage} />
            <Route path="/meine-farrader" exact component={UserBikePage} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
          {!isKanban && <Footer />}
        </div>
      </>
    </div>
  );
};

export default MainLayout;
