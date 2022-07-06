import ContactPage from '../Components/myContact/ContactPage';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delay: 0.5,
    },
  },
};

function contact() {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <ContactPage />
    </motion.section>
  );
}

export default contact;
