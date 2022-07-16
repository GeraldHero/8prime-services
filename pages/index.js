import { motion } from 'framer-motion';
import MainBanner from '../Components/homePage/myMainBanner/MainBanner';
import MyBackToBack from '../Components/homePage/myBackToBack/MyBackToBack';
import MyBanner from '../Components/homePage/myBanner/MyBanner';
import MyProjects from '../Components/homePage/myProjects/MyProjects';
import MyServices from '../Components/homePage/myServices/MyServices';
import MySubscribeBox from '../Components/homePage/mySubscribeBox/MySubscribeBox';
import MySlider from '../Components/homePage/mySlider/MySlider';

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
export default function Home() {
  return (
    <motion.main
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <MainBanner />
      <MyProjects />
      <MyServices />
      <MyBackToBack />
      <MyBanner />
      <MySubscribeBox />
      <MySlider />
    </motion.main>
  );
}
