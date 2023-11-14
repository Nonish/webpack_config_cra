import React from "react";
import Loadable from "react-loadable";
const LoadApp = Loadable({
   loader: () => import("./App"),
   loading() {
      return <div>Loading...</div>;
   },
   timeout: 10000 // 10 seconds
});

export default function LoadableApp() {
   return (<LoadApp />)
}