const { PROJECT_ID, API_KEY } = process.env;
import { Client, Databases, Account, Users, ID } from "node-appwrite";
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
interface UserData {
  name: string;
  phone: string;
  password: string;
  email: string;
}
const createUserClient = async (formData: UserData) => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(PROJECT_ID!) // Your project ID
    .setKey(API_KEY!); // Your secret API key

  const users = new Users(client);
  const { email, password, phone, name } = formData;
  const result = await users.create(
    ID.unique(), // email (optional)
    `${email}`, // phone (optional)
    `${phone}`, // password (optional)
    `${password}`, // name (optional)
    `${name}`,
  );
  return result;
};

export { createAdminClient, createSessionClient, createUserClient };
