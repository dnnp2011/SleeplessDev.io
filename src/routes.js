import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "./components/async.component";
import LayoutLoader from "./layouts/components/layout-loader/layout-loader.component";
import Classic from "./layouts/layout-classic/layout-classic.component";
import Compact from "./layouts/layout-compact/layout-compact.component";
import Toolbar from "./layouts/layout-toolbar/layout-toolbar.component";
import Boxed from "./layouts/layout-boxed/layout-boxed.component";
import Funky from "./layouts/layout-funky/layout-funky.component";
import Tabbed from "./layouts/layout-tabbed/layout-tabbed.component";
import NoLayout from "./layouts/layout-none/layout-none.component";

// SLEEPLESSDEV ROUTES
const AsyncLandingPage = asyncComponent(() => import("./components/landing/index"));
const AsyncHomePage = asyncComponent(() => import("./components/home/home"));
const AsyncAboutMe = asyncComponent(() => import("./components/about-me/aboutme"));
const AsyncProjects = asyncComponent(() => import("./components/projects/projects"));
const AsyncContact = asyncComponent(() => import("./components/contact/contact"));
const AsyncBlog = asyncComponent(() => import("./components/blog/blog"));
const AsyncReference = asyncComponent(() => import("./components/reference/reference"));
const AsyncTutorials = asyncComponent(() => import("./components/tutorials/tutorials"));

// SLEEPLESSDEV ADMIN ROUTES
const AsyncAdminLogin = asyncComponent(() => import("./components/admin/admin-login/admin-login"));
const AsyncAdminDashboard = asyncComponent(() => import("./components/admin/admin-dashboard/admin-dashboard"));

//  SLEEPLESSDEV FINANCIAL MARKET ROUTES
// const AsyncStockMarket = asyncComponent(() => import("./components/market/stock-market/stock"));
const AsyncCryptoMarket = asyncComponent(() => import("./components/market/crypto-market/crypto"));

// DASHBOARD ROUTE

// const AsyncAnalyticsDashboard = lazy(() => import("./containers/dashboards/analytics/analytics.component"));
// const AsyncEcommerceDashboard = lazy(() => import("./containers/dashboards/ecommerce/ecommerce.component"));
// const AsyncCryptoDashboard = lazy(() => import("./containers/dashboards/crypto/crypto.component"));
// const AsyncProjectDashboard = lazy(() => import("./containers/dashboards/project/project.component"));
// const AsyncTheming = lazy(() => import("./containers/theming/theming.component"));

// APP ROUTES
// const AsyncEmailApp = lazy(() => import("./containers/apps/email/email.component"));
// const AsyncTodoApp = lazy(() => import("./containers/apps/todo/todo.component"));
// const AsyncMapsApp = lazy(() => import("./containers/apps/maps/maps.component"));
// const AsyncNotesApp = lazy(() => import("./containers/apps/notes/notes.component"));
// const AsyncContactsApp = lazy(() => import("./containers/apps/contacts/contacts.component"));
// const AsyncChatApp = lazy(() => import("./containers/apps/chat/chat.component"));
// const AsyncCalendarApp = lazy(() => import("./containers/apps/calendar/calendar.component"));

// EXAMPLE ROUTES
// const AsyncAutocompleteExample = lazy(() => import("./containers/elements/autocomplete/autocomplete.component"));
// const AsyncSelectionControlsExample = lazy(() => import("./containers/elements/selection-controls/selection-controls.component"));
// const AsyncPickerExample = lazy(() => import("./containers/elements/picker/picker.component"));
// const AsyncSelectExample = lazy(() => import("./containers/elements/select/select.component"));
// const AsyncTextFieldExample = lazy(() => import("./containers/elements/text-field/text-field.component"));
// const AsyncAppBarExample = lazy(() => import("./containers/elements/app-bar/app-bar.component"));
// const AsyncMenuExample = asyncComponent(() => import("./containers/elements/menu/menu.component"));
// const AsyncListExample = lazy(() => import("./containers/elements/list/list.component"));
// const AsyncCardExample = lazy(() => import("./containers/elements/card/card.component"));
// const AsyncPaperExample = lazy(() => import("./containers/elements/paper/paper.component"));
// const AsyncAvatarExample = lazy(() => import("./containers/elements/avatars/avatars.component"));
// const AsyncSteppersExample = lazy(() => import("./containers/elements/steppers/steppers.component"));
// const AsyncButtonExample = lazy(() => import("./containers/elements/button/button.component"));
// const AsyncProgressExample = lazy(() => import("./containers/elements/progress/progress.component"));

// AUTHENTICATION ROUTES
// const AsyncLogin = asyncComponent(() => import("./containers/authentication/login/login.component"));
// const AsyncRegister = asyncComponent(() => import("./containers/authentication/register/register.component"));
// const AsyncProfile = asyncComponent(() => import("./containers/authentication/profile/profile.component"));
// const AsyncLock = asyncComponent(() => import("./containers/authentication/lock/lock.component"));
// const AsyncForgot = asyncComponent(() => import("./containers/authentication/forgot-password/forgot-password.component"));

// ERROR ROUTES
const AsyncError404 = asyncComponent(() => import("./containers/errors/404.component"));
const AsyncError500 = asyncComponent(() => import("./containers/errors/500.component"));


// PAGES ROUTES
// const AsyncTypography = lazy(() => import("./containers/pages/typography.component"));
// const AsyncColors = lazy(() => import("./containers/pages/colors.component"));

const AsyncNotFound = asyncComponent(() => import("./containers/not-found/not-found.component"));

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    { ...rest }
    render={ props => (
      <Layout>
        <Suspense fallback={ <LayoutLoader /> }>
          <Component { ...props } />
        </Suspense>
      </Layout>
    ) }
  />
);

const ClassicLayout = props => (
  <Classic>{ props.children }</Classic>
);

const CompactLayout = props => (
  <Compact>{ props.children }</Compact>
);

const ToolbarLayout = props => (
  <Toolbar>{ props.children }</Toolbar>
);

const BoxedLayout = props => (
  <Boxed>{ props.children }</Boxed>
);

const FunkyLayout = props => (
  <Funky>{ props.children }</Funky>
);

const TabbedLayout = props => (
  <Tabbed>{ props.children }</Tabbed>
);

export default ({ childProps, layout }) => {
  let activeLayout;
  switch (layout.currentLayout) {
    case "classic":
      activeLayout = ClassicLayout;
      break;
    case "compact":
      activeLayout = CompactLayout;
      break;
    case "toolbar":
      activeLayout = ToolbarLayout;
      break;
    case "boxed":
      activeLayout = BoxedLayout;
      break;
    case "funky":
      activeLayout = FunkyLayout;
      break;
    case "tabbed":
      activeLayout = TabbedLayout;
      break;
    default:
      activeLayout = ClassicLayout;
  }

  return (
    <Switch>
      <AppRoute path={ "/" } exact component={ AsyncLandingPage } props={ childProps } layout={ activeLayout } />
      <AppRoute path={ "/home" } exact component={ AsyncHomePage } props={ childProps } layout={ activeLayout } />
      <AppRoute path={ "/about-me" } exact component={ AsyncAboutMe } props={ childProps } layout={ activeLayout } />
      <AppRoute path={ "/portfolio" } exact component={ AsyncProjects } props={ childProps } layout={ NoLayout } />
      <AppRoute path={ "/contact" } exact component={ AsyncContact } props={ childProps } layout={ activeLayout } />
      <AppRoute path={ "/blog" } exact component={ AsyncBlog } props={ childProps } layout={ activeLayout } />
      <AppRoute path={ "/blog/:id" } exact component={ AsyncBlog } props={ childProps } layout={ activeLayout } />
      <AppRoute path={ "/resources/reference" } exact component={ AsyncReference } props={ childProps } layout={ activeLayout } />
      <AppRoute path={ "/resources/tutorials" } exact component={ AsyncTutorials } props={ childProps } layout={ activeLayout } />

      <AppRoute path={ "/admin/login" } exact component={ AsyncAdminLogin } props={ childProps } layout={ activeLayout } />
      <AppRoute path={ "/admin/dashboard" } exact component={ AsyncAdminDashboard } props={ childProps } layout={ activeLayout } />

      {/*<AppRoute path={ "/markets/stock" } exact component={ AsyncStockMarket } props={ childProps } layout={ activeLayout } />*/}
      <AppRoute path={ "/markets/crypto" } exact component={ AsyncCryptoMarket } props={ childProps } layout={ activeLayout } />


      {/*<AppRoute path='/dashboards/analytics' exact component={ AsyncAnalyticsDashboard } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/dashboards/ecommerce' exact component={ AsyncEcommerceDashboard } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/dashboards/crypto' exact component={ AsyncCryptoDashboard } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/dashboards/project' exact component={ AsyncProjectDashboard } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/theming' exact component={ AsyncTheming } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/apps/email' exact component={ AsyncEmailApp } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/apps/todo' exact component={ AsyncTodoApp } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/apps/maps' exact component={ AsyncMapsApp } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/apps/notes' exact component={ AsyncNotesApp } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/apps/contacts' exact component={ AsyncContactsApp } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/apps/chat' exact component={ AsyncChatApp } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/apps/calendar' exact component={ AsyncCalendarApp } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/autocomplete' exact component={ AsyncAutocompleteExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/selection-controls' exact component={ AsyncSelectionControlsExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/picker' exact component={ AsyncPickerExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/selects' exact component={ AsyncSelectExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/text-fields' exact component={ AsyncTextFieldExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/app-bar' exact component={ AsyncAppBarExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/menu' exact component={ AsyncMenuExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/list' exact component={ AsyncListExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/cards' exact component={ AsyncCardExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/paper' exact component={ AsyncPaperExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/avatars' exact component={ AsyncAvatarExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/steppers' exact component={ AsyncSteppersExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/buttons' exact component={ AsyncButtonExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/elements/progress' exact component={ AsyncProgressExample } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/login' exact component={ AsyncLogin } props={ childProps } layout={ NoLayout } />*/}
      {/*<AppRoute path='/register' exact component={ AsyncRegister } props={ childProps } layout={ NoLayout } />*/}
      {/*<AppRoute path='/profile' exact component={ AsyncProfile } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/lock' exact component={ AsyncLock } props={ childProps } layout={ NoLayout } />*/}
      {/*<AppRoute path='/forgot-password' exact component={ AsyncForgot } props={ childProps } layout={ NoLayout } />*/}
      <AppRoute path='/errors/404' exact component={ AsyncError404 } props={ childProps } layout={ NoLayout } />
      <AppRoute path='/errors/500' exact component={ AsyncError500 } props={ childProps } layout={ NoLayout } />
      {/*<AppRoute path='/pages/typography' exact component={ AsyncTypography } props={ childProps } layout={ activeLayout } />*/}
      {/*<AppRoute path='/pages/colors' exact component={ AsyncColors } props={ childProps } layout={ activeLayout } />*/}


      <AppRoute component={ AsyncNotFound } layout={ activeLayout } />
    </Switch>);
};
