import { createBrowserRouter } from "react-router";
import App from "@/App";
import User from "@/pages/user";
import Tour from "@/pages/tour";


const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,
    Component: App,
    children: [
      {
        index: true,
        // path: "user",
        Component: User,
      },
      {
        path: "tour",
        Component: Tour,
      },

      
    ],
  },
]);

export default router;
