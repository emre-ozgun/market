
// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import React from "react";
import { Router } from "react-router-dom";

import type { BrowserHistory } from "history";



type HistoryRouterProps = {
  history: BrowserHistory
  basename?: string
  children: React.ReactNode;
}

const HistoryRouter: React.FC<HistoryRouterProps> = ({ basename, children, history }) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

export default HistoryRouter;