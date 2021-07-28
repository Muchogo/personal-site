import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/Muchogo',
    label: '',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/eric.muchogo/',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'www.linkedin.com/in/eric-muchogo-1b7249135',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/kenyanbrain',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:ericmuchogo@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
