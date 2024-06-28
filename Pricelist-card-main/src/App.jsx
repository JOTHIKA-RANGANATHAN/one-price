import React from "react";
import Card from "./Components/Card";

const App = () => {
  const arrObj = [
    {
      member: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "50GB Storage",
      project: "Unlimited Public Project",
      access: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      Sub: "Free Subdomain",
      status: "Monthly Status Reports",
      btn: "Button",
    },
    {
      member: "PLUS",
      price: "$9/month",
      user: "5 Users",
      storage: "50GB Storage",
      project: "Unlimited Public Project",
      access: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      Sub: "Free Subdomain",
      status: "Monthly Status Reports",
      btn: "Button",
    },
    {
      member: "PRO",
      price: "$49/month",
      user: "Unlimited Users",
      storage: "50GB Storage",
      project: "Unlimited Public Project",
      access: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      Sub: "Free Subdomain",
      status: "Monthly Status Reports",
      btn: "Button",
    },
  ];

  return (
    <div>
      <Card arrObj={arrObj} />
    </div>
  );
};

export default App;
