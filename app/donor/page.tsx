import { getUser } from "@/lib/actions/users.actions";
import React from "react";

async function Donor() {
  const result = await getUser();
  console.log(result);
  return <div>Donor</div>;
}

export default Donor;
