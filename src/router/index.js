import React from "react";
import { Switch, Route } from "react-router-dom";
import { HOMEPAGE } from "../globals/config/urlMapping";
import { Homepage } from "../modules/homepage";

export const ChiefRouter = ({ history }) => {
  return (
    <div>
      <Switch>
        <Route
          path="/"
          render={() => {
            console.log("coming", history);
          }}
        />
        <Route exact path={HOMEPAGE} component={Homepage} />
      </Switch>
    </div>
  );
};
