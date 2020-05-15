import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { HOMEPAGE, FEATURE } from "../globals/config/urlMapping";
import { Homepage } from "../modules/homepage";
import { Feature } from "../modules/feature";

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
      </Switch>
    </div>
  );
};

export default withRouter(ChiefRouter);
