import React from "react";
import { userInfo } from "../utils/api";
import InitialState from "./InitialState/InitialState";
import UserNotFound from "./UserNotFound/UserNotFound";

function States() {

  return(
    <div>
      {userInfo.status === 404
      ? <UserNotFound/>
      : <InitialState/>
      }
    </div>
  )
}

export default States;