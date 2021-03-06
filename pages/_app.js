import '../styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPenRuler,
  faHouseChimneyWindow,
  faFaucet,
  faHandHoldingDroplet,
  faBolt,
  faPhone,
  faEnvelope,
  faAngleRight,
  faAngleLeft,
  faBed,
  faBath,
  faArrowsLeftRight,
  faAngleUp,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faPenRuler,
  faBed,
  faHouseChimneyWindow,
  faFaucet,
  faHandHoldingDroplet,
  faBolt,
  faPhone,
  faEnvelope,
  faAngleRight,
  faAngleLeft,
  faBath,
  faArrowsLeftRight,
  faAngleDown,
  faAngleUp
);
library.add(faFacebookF, faGoogle, faInstagram, faGithub, faTwitter);

import Layout from '../Components/Layouts';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
