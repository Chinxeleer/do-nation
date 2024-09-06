import { getUser } from "@/lib/actions/users.actions";
import React from "react";

async function Donee() {
  const result = await getUser();
  console.log(result);

  return <div>Donee</div>;
}

export default Donee;
