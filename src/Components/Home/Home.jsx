import OrganizationPreview from "../OrganizationPreview/OrganizationPreview";

import orgs from "../../Content/Projects/store";

function Home() {
  return (
    <>
      {orgs.map((org) => {
        return <OrganizationPreview org={org} />;
      })}
    </>
  );
}

export default Home;
