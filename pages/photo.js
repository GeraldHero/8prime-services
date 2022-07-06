import Photo from '../Components/photoPage/Photo';
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

export default function photo() {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <Photo />
    </motion.section>
  );
}
