import { Suspense } from "react";
import { Loading } from ".";

export default function SuspenseFallback({ component }: { component: JSX.Element }) {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
}
