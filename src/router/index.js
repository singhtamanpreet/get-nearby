import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { HOMEPAGE, FEATURE, DETAILS } from "../globals/config/urlMapping";
import { Homepage } from "../modules/homepage";
import { Feature } from "../modules/feature";
import { Details } from "../modules/deatails";

const ChiefRouter = (props) => {
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
        <Route
          exact
          key={props.location.key}
          path={FEATURE}
          component={Feature}
        />
        <Route
          exact
          key={props.location.key}
          path={DETAILS}
          component={Details}
        />
      </Switch>
    </div>
  );
};

export default withRouter(ChiefRouter);
