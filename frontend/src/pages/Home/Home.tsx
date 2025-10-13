import Header from "../../components/Header/Header/Header";
import { AccountInfo } from "../../components/Header/AccountInfo/AccountInfo";
import { FilterBlock } from "./FilterBlock";
import { ShowTable } from "./Table";
import type { CompanyData } from "./Table";
import "./Home.scss";

export function Home({
  data,
  setData,
  updateData,
  login,
  setLogin,
}: {
  data: CompanyData[];
  setData: React.Dispatch<React.SetStateAction<CompanyData[]>>;
  updateData: (uuid: string, update: Partial<CompanyData>) => void;
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Header />
      <div className="home-page">
        {!login ? (
          <div className="account-info">
            <AccountInfo login={login} setLogin={setLogin} />
          </div>
        ) : (
          <>
            <div className="account-info">
              <AccountInfo login={login} setLogin={setLogin} />
            </div>
            <div className="content">
              <FilterBlock data={data} setData={setData} />
              <ShowTable
                key={data.length + JSON.stringify(data)}
                data={data}
                updateData={updateData}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
