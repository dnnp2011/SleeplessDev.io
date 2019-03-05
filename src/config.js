import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/PermPhoneMsg';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import React from 'react';
import { FaBitcoin, FaChartLine } from 'react-icons/fa';

import themes from './themes';

export const configuredTheme = themes[0].theme;

export const configuredLayout = {
  currentLayout: 'classic',
  notificationsOpen: false,
};

const iconStyle = {
  fontSize: 16,
};

export const menuItems = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon style={iconStyle} />,
  },
  {
    title: 'About Me',
    href: '/about-me',
    icon: <PersonIcon style={iconStyle} />,
  },
  {
    title: 'My Projects',
    href: '/projects',
    icon: <WorkIcon style={iconStyle} />,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <PhoneIcon style={iconStyle} />,
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <ForumIcon style={iconStyle} />,
  },
  {
    title: 'Developer Resources',
    type: 'header',
  },
  {
    title: 'Reference',
    href: '/resources/reference',
    icon: <WorkIcon style={iconStyle} />,
  },
  {
    title: 'Tutorials',
    href: '/resources/tutorials',
    icon: <SchoolIcon style={iconStyle} />,
  },
  {
    title: 'Financial Markets',
    type: 'header',
  },
  {
    title: 'Stock Market',
    href: '/markets/stock',
    icon: <FaChartLine style={iconStyle} />,
  },
  {
    title: 'Crypto Market',
    href: '/markets/crypto',
    icon: <FaBitcoin style={iconStyle} />,
  },
];

/* Pages that require Toolbar Labels but should not be linked on the navbar */
export const hiddenMenuItems = [
  {
    title: 'Admin Login',
    href: '/admin/login',
  },
  {
    title: 'Admin Dashboard',
    href: '/admin/dashboard',
  },
  {
    title: 'Blog Entry',
    href: '/blog/:id',
  },
];
/*export const menuItems = [{
 title: 'Dashboards',
 icon: <HomeIcon style={iconStyle} />,
 children: [{
 title: 'Analytics',
 href: '/',
 icon: <DashboardIcon style={iconStyle} />
 }, {
 title: 'Ecommerce',
 href: '/dashboards/ecommerce',
 icon: <ShoppingCartIcon style={iconStyle} />
 }, {
 title: 'Crypto',
 href: '/dashboards/crypto',
 icon: <EuroSymbolIcon style={iconStyle} />
 }, {
 title: 'Project',
 href: '/dashboards/project',
 icon: <EventNoteIcon style={iconStyle} />
 }
 ]
 }, {
 title: 'Theming',
 href: '/theming',
 icon: <BuildIcon style={iconStyle} />
 }, {
 title: 'APPS',
 type: 'header'
 }, {
 title: 'Apps',
 icon: <DesktopWindowsIcon style={iconStyle} />,
 children: [{
 title: 'Email',
 href: '/apps/email',
 icon: <EmailIcon style={iconStyle} />
 }, {
 title: 'Todo',
 href: '/apps/todo',
 icon: <CheckCircleIcon style={iconStyle} />
 }, {
 title: 'Maps',
 href: '/apps/maps',
 icon: <PinDropIcon style={iconStyle} />
 }, {
 title: 'Calendar',
 href: '/apps/calendar',
 icon: <DateRangeIcon style={iconStyle} />
 }, {
 title: 'Notes',
 href: '/apps/notes',
 icon: <EventNoteIcon style={iconStyle} />
 }, {
 title: 'Contacts',
 href: '/apps/contacts',
 icon: <FaceIcon style={iconStyle} />
 }, {
 title: 'Chat',
 href: '/apps/chat',
 icon: <ChatIcon style={iconStyle} />
 }]
 }, {
 title: 'USER INTERFACE',
 type: 'header'
 }, {
 title: 'Typography',
 href: '/pages/typography',
 icon: <TextFormatIcon style={iconStyle} />
 }, {
 title: 'Colors',
 href: '/pages/colors',
 icon: <PaletteIcon style={iconStyle} />
 }, {
 title: 'ELEMENTS',
 type: 'header'
 }, {
 title: 'Form Controls',
 icon: <ExtensionIcon style={iconStyle} />,
 children: [{
 title: 'Autocomplete',
 href: '/elements/autocomplete'
 }, {
 title: 'Selection Controls',
 href: '/elements/selection-controls'
 }, {
 title: 'Picker',
 href: '/elements/picker'
 }, {
 title: 'Text Fields',
 href: '/elements/text-fields'
 }, {
 title: 'Selects',
 href: '/elements/selects'
 }]
 }, {
 title: 'Navigation',
 icon: <MenuIcon style={iconStyle} />,
 children: [{
 title: 'App Bar',
 href: '/elements/app-bar'
 }, {
 title: 'Menu',
 href: '/elements/menu'
 }]
 }, {
 title: 'Layout',
 icon: <ViewModuleIcon style={iconStyle} />,
 children: [{
 title: 'List',
 href: '/elements/list'
 }, {
 title: 'Cards',
 href: '/elements/cards'
 }, {
 title: 'Paper',
 href: '/elements/paper'
 }, {
 title: 'Avatars',
 href: '/elements/avatars'
 }, {
 title: 'Steppers',
 href: '/elements/steppers'
 }]
 }, {
 title: 'Buttons & Indicators',
 icon: <InfoIcon style={iconStyle} />,
 children: [{
 title: 'Buttons',
 href: '/elements/buttons'
 }, {
 title: 'Progress',
 href: '/elements/progress'
 }]
 }, {
 title: 'PAGES',
 type: 'header'
 }, {
 title: 'Authentication',
 icon: <PersonIcon style={iconStyle} />,
 children: [{
 title: 'Login',
 href: '/login'
 }, {
 title: 'Register',
 href: '/register'
 }, {
 title: 'Forgot Password',
 href: '/forgot-password'
 }, {
 title: 'Profile',
 href: '/profile'
 }, {
 title: 'Lock Screen',
 href: '/lock'
 }]
 }, {
 title: 'Errors',
 icon: <InfoIcon style={iconStyle} />,
 children: [{
 title: '404',
 href: '/errors/404'
 }, {
 title: '500',
 href: '/errors/500'
 }]
 }];*/
