import React from "react";
import { Route, Routes } from "react-router-dom";

import { IRoute } from "@base/interfaces";
import { getRouteConfig } from "@services/route.service";

import { history } from "@components/History";
import HistoryRouter from "@components/History/HistoryRouter";


const App = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        {
          getRouteConfig().map((item: IRoute) => item.path ?
            <Route key={item.key} path={item.path} element={
              <React.Suspense fallback="Loading...">
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