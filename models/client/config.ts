import env from "@/app/env";

import { Client, Account, Avatars, Databases, Storage } from "appwrite";

export const client = new Client();

client.setEndpoint(env.appwrite.endpoint).setProject(env.appwrite.projectId);

const databases = new Databases(client);
const account = new Account(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { databases, account, avatars, storage };
