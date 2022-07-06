import MyAbout from '../Components/aboutPage/MyAbout';
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

export default function about() {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <MyAbout />
    </motion.section>
  );
}
