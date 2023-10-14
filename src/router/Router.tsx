import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";

export const Home: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
});
