import MyBackToBack from "../Components/myBackToBack/MyBackToBack";
import MyBanner from "../Components/myBanner/MyBanner";
import MyProjects from "../Components/myProjects/MyProjects";
import MyServices from "../Components/myServices/MyServices";
import MySubscribeBox from "../Components/mySubscribeBox/MySubscribeBox";

export default function Home() {
  return (
    <main>
      <MyBanner />
      <MyServices />
      <MyBackToBack />
      <MySubscribeBox />
      <MyProjects />
    </main>
  );
}
