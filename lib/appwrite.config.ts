const {
  PROJECT_ID,
  API_KEY,
  // DO_NATION_DB,
  // DONEE_COLLECTION_ID,
  // DONOR_COLLECTION_ID,
} = process.env;

import { Client, Databases, Account } from "node-appwrite";

type Session = { value: string } | undefined;

const createAdminClient = async () => {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!); // Replace with your project ID

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};

const createSessionClient = async (session: Session) => {
  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID!);
  if (session) {
    client.setSession(session.value);
  }

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};
export { createAdminClient, createSessionClient };
// export const account = new Account(client);
// export const databases = new Databases(client);
//
