import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

export default function Footer() {
  const { isDarkTheme } = useContext(AppContext);
  const imageTheme = isDarkTheme ? "White" : "Black";

  return (
    <div className="flex justify-center pt-[50px]">
      <img
        className="w-[141.781px]"
        src={`./assets/AmazonCompany${imageTheme}.png`}
        alt="Amazon Company"
      />
    </div>
  );
}
