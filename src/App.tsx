import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useLazyGetUserQuery } from "./services/user";
import { useEffect } from "react";
import { CacheUtils } from "./utils";
import { CONSTANT } from "./config";

export default function App() {
  const [getUser] = useLazyGetUserQuery();

  useEffect(() => {
    if (CacheUtils.get(CONSTANT.USER_TOKEN_KEY)) getUser(null);
  }, [getUser]);

  return <RouterProvider router={router} />;
}
