import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Spin } from "antd";

import { IStore } from "@store/IStore";
import { IRoute } from "@base/interfaces";
import { getRouteConfig } from "@services/route.service";

import { history } from "@components/History";
import { HistoryRouter } from "./components";


const App = () => {

  const { loader } = useSelector((state: IStore) => ({
    loader: state.system.loader
  }))

  return (
    <HistoryRouter history={history}>
      <Routes>
        {
          getRouteConfig().map((item: IRoute) => item.path ?
            <Route key={item.key} path={item.path} element={
              <React.Suspense fallback={<Spin spinning={loader} />}>
                <item.component />
              </React.Suspense>
            } /> :
            null)
        }
      </Routes>
    </HistoryRouter>
  );
}

export default App;