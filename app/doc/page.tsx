"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
export default Page;
