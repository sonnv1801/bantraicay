import { Link } from "react-router-dom";
import SectionSocialNetwork from "./SectionSocialNetwork";
import SectionLink from "./SectionLink";
export default function Footer() {
  return (
    <footer className="text-center ">
      <SectionSocialNetwork />
      <SectionLink />
      <div className="text-center p-4">
        © 2021 Copyright:
        <Link className="text-reset fw-bold" to="/">
          SQTVz.com
        </Link>
      </div>
    </footer>
  );
}
