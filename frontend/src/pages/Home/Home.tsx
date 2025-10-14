import Header from "../../components/Header/Header/Header";
import { AccountInfo } from "../../components/Header/AccountInfo/AccountInfo";
import { ShowTable } from "./Table";
import type { CompanyData } from "./Table";
import "./Home.scss";
import { Login } from "../Login/Login";
import { Route, Routes } from "react-router";
import Statistics from "../Statistics/Statistics";
import { Register } from "../Register/Register";

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
          <Routes>
            <Route
              path="*"
              index
              element={<Login login={login} setLogin={setLogin} />}
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        ) : (
          <>
            <div className="account-info">
              <AccountInfo login={login} setLogin={setLogin} />
            </div>
            <div className="content">
              <Routes>
                <Route
                  index
                  element={
                    <ShowTable
                      key={data.length + JSON.stringify(data)}
                      data={data}
                      setData={setData}
                      updateData={updateData}
                    />
                  }
                />
                <Route path="/statistics" element={<Statistics data={data}/>} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </>
  );
}
