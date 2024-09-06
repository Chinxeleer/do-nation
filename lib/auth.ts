// import { cookies } from "next/headers";
// import { createSessionClient } from "./appwrite.config";
// const auth = {
//   user: null,
//   sessionCookie: null,
//   getUser: async () => {
//     auth.sessionCookie = cookies().get("session");
//
//     try {
//       const { account } = await createSessionClient(auth.sessionCookie.value);
//       auth.user = await account.get();
//     } catch (error) {
//       console.log(error);
//       auth.user = null;
//       auth.sessionCookie = null;
//     }
//
//     return auth.user;
//   },
// };
//
// export default auth;

import { cookies } from "next/headers";
import { createSessionClient } from "./appwrite.config";
import { Models } from "appwrite"; // Assuming you are using Appwrite SDK

// Define types for better safety
interface Auth {
  user: Models.User<Models.Preferences> | null;
  sessionCookie: { name: string; value: string } | null;
  getUser: () => Promise<Models.User<Models.Preferences> | null>;
}

type Session = { value: string } | undefined;
const auth: Auth = {
  user: null,
  sessionCookie: null,

  // Async function to get user
  getUser: async () => {
    // Get session cookie (use optional chaining to ensure `cookies()` works)
    const sessionCookie = cookies()?.get("session");

    // If no session cookie is found, set user and session to null
    if (!sessionCookie) {
      auth.user = null;
      auth.sessionCookie = null;
      return auth.user;
    }

    auth.sessionCookie = sessionCookie;

    const sesh: Session = { value: auth.sessionCookie.value };

    try {
      // Assuming `createSessionClient` returns an object containing the account object
      const { account } = await createSessionClient(sesh);

      // Attempt to fetch user details
      auth.user = await account.get();
    } catch (error) {
      console.error("Error fetching user:", error);
      auth.user = null;
      auth.sessionCookie = null;
    }

    return auth.user;
  },
};

export default auth;
