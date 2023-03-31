import logo from "../../assets/logo.svg";

//Import another components
import Quote from "../Quote/Quote";
import OrganizationPreview from "../OrganizationPreview/OrganizationPreview";

//Import Utils
import orgs from "../../utils/organizations.json";
import Page from "../Page";

function Home() {
  return (
    <Page>
      {orgs.map((org) => {
        return <OrganizationPreview org={org} />;
      })}
    </Page>
  );
}

export default Home;
