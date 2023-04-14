import PrimarySearchAppBar from "../UTILS/appBar";
import { LandingPage } from "../UTILS/landing-page";
import { Login } from "../UTILS/Login";

export const Home = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      {/* <Login /> */}
      <LandingPage />
    </div>
  );
};
