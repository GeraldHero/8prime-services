import MyBackToBack from '../Components/homePage/myBackToBack/MyBackToBack';
import MyBanner from '../Components/homePage/myBanner/MyBanner';
import MyProjects from '../Components/homePage/myProjects/MyProjects';
import MyServices from '../Components/homePage/myServices/MyServices';
import MySubscribeBox from '../Components/homePage/mySubscribeBox/MySubscribeBox';
import MySlider from '../Components/homePage/mySlider/MySlider';

export default function Home() {
  return (
    <main>
      <MyBanner />
      <MyServices />
      <MyBackToBack />

      <MySubscribeBox />
      <MySlider />
      <MyProjects />
    </main>
  );
}
