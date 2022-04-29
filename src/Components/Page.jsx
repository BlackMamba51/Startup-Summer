import React, {useState} from "react";
import Header from "./Header/Header";
import Loader from "./Loader/Loader";

import MainScreen from "./MainScreen/MainScreen";

function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFind, setIsFind] = useState(false);
  return (
    <div>
      <Header setIsLoading={setIsLoading} setIsFind={setIsFind}/>
      {isLoading
      ? <Loader/>
      : <MainScreen isFind={isFind}/>
      }
    </div>
  )
}

export default Page;