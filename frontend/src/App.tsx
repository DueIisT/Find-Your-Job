import "./App.css";
import { Home } from "./pages/Home/Home";
import type { CompanyData } from "./pages/Home/Table";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState<CompanyData[]>([
    {
      company: "Bauch, Hirthe and Jones",
      role: "Junior",
      website: "https://earnest-ballpark.info",
      department: "Internal",
      status: "rejected",
      salary: 1400,
      date: "Thu Aug 21 2008 22:21:28",
      uuid: "2343e1cf-0feb-4142-960c-5163115b1be8",
    },
    {
      company: "Cremin, Koch and Satterfield",
      role: "Junior",
      website: "https://pastel-button.net/",
      department: "Chief",
      status: "in progress",
      salary: 2300,
      date: "Thu Nov 17 2022 05:47:32",
      uuid: "56f5f2b7-59e8-4218-8798-ad5c0b2b7281",
    },
    {
      company: "Hackett LLC",
      role: "Middle",
      website: "https://sturdy-deviation.com",
      department: "Investor",
      status: "rejected",
      salary: 1800,
      date: "Tue Nov 12 2024 00:38:31",
      uuid: "a654eb1a-e766-44db-97c6-8d9d74183e62",
    },
    {
      company: "Medhurst LLC",
      role: "Senior",
      website: "https://fumbling-maid.info/",
      department: "Product",
      status: "rejected",
      salary: 1600,
      date: "Sun Apr 19 2009 12:38:11",
      uuid: "ca402933-9cf2-4d0e-a63a-43ac71b914fc",
    },
    {
      company: "Champlin - Franecki",
      role: "Junior",
      website: "https://well-worn-nightclub.biz",
      department: "Dynamic",
      status: "in progress",
      salary: 2500,
      date: "Mon Jul 11 2016 00:42:00",
      uuid: "ce192f80-d17b-42dc-b98b-218b4fd7b5c8",
    },
    {
      company: "Mohr, Bashirian and Murray",
      role: "Trainee",
      website: "https://hard-to-find-leather.org",
      department: "Product",
      status: "in progress",
      salary: 1900,
      date: "Fri Jul 03 2015 23:12:05",
      uuid: "1dd3dfd3-315f-4160-a57d-a01f411bde8d",
    },
    {
      company: "Lynch - Kerluke",
      role: "Senior",
      website: "https://emotional-round.info/",
      department: "Global",
      status: "in progress",
      salary: 2200,
      date: "Wed Jan 02 2008 08:51:46",
      uuid: "5cb88f35-e9f9-4084-9478-9f41c7b13494",
    },
    {
      company: "Nader, Steuber and Marquardt",
      role: "Middle",
      website: "https://suburban-logic.name",
      department: "Investor",
      status: "in progress",
      salary: 1700,
      date: "Tue Aug 23 2011 07:39:50",
      uuid: "9867256e-1534-4675-ade8-790e3cc31080",
    },
    {
      company: "Beier - Bauch",
      role: "Senior",
      website: "https://concerned-decision-making.org",
      department: "Product",
      status: "in progress",
      salary: 1500,
      date: "Wed Aug 15 2012 10:14:29",
      uuid: "c36362c9-e90c-4c29-8800-9025c8bda589",
    },
  ]);

  const updateData = (uuid: string, updates: Partial<CompanyData>) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.uuid === uuid ? { ...item, ...updates } : item
      )
    );
  };

  return (
    <Home
      data={data}
      setData={setData}
      updateData={updateData}
      login={login}
      setLogin={setLogin}
    />
  );
}

export default App;
