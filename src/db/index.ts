import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const applicants = sqliteTable("tbl_students", {
	id: text("index_no", { length: 50, mode: "text" }).notNull(),
	name: text("name", { length: 255, mode: "text" }),
	email: text("email", { length: 255, mode: "text" }),
	nic: text("nic", { length: 15, mode: "text" }).notNull(),
});

// export type Applicant = {
// 	id: string;
// 	name: string;
// 	email: string;
// 	nic: string;
// };

// insecure implementation. find a way to initiate the client on server side and use in in client side.
export const client = createClient({
	url: import.meta.env.PUBLIC_TURSO_DATABASE_URL,
	authToken: import.meta.env.PUBLIC_TURSO_DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema: { applicants } });
