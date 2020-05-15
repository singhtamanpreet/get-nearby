import React from "react";
import { Switch, Route } from "react-router-dom";
import { HOMEPAGE } from "../globals/config/urlMapping";
import { Homepage } from "../modules/homepage";

export const ChiefRouter = () => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            return props.history.push(HOMEPAGE);
          }}
        />
        <Route exact path={HOMEPAGE} component={Homepage} />
      </Switch>
    </div>
  );
};
