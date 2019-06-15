import dayjs from 'dayjs';
dayjs().format();

export const Email = 'daltonpierce@sleeplessdev.io';
export const Gender = 'Male';
export const Age = Math.abs(dayjs('06/09/1993', 'MM/DD/YYYY').diff(dayjs(), 'year'));
export const Region = 'New York City, NY';
export const LinkedIn = 'https://www.linkedin.com/in/dalton-glenn-pierce/';
export const Github = 'https://github.com/dnnp2011';
export const CreddleResumeLink = 'https://resume.creddle.io/embed/7wqefr81r5z';

// TODO: Make sure the BackendUrl is correctly set in production
export const BackendUrl = 'https://backend.sleeplessdev.io/api/graphql';
// export const BackendUrl = 'https://sleeplessdev-backend.herokuapp.com/api/graphql';
// export const BackendUrl = 'http://localhost:5000/api/graphql';

export const HrefHome = '/',
  HrefContact = '/contact',
  HrefAbout = '/about-me',
  HrefBlog = '/blog';
