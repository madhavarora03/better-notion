"use client";
import { use } from "react";

function DocumentPage({
  params: paramsPromise,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(paramsPromise);
  return <div>Document Page: {id}</div>;
}
export default DocumentPage;
