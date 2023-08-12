import { buildConfig } from "payload/config";
import path from "path";

// Collections
import Users from "./collections/Users";
import { Media } from "./collections/Media";
import { Workers } from "./collections/Workers";
import { Positions } from "./collections/Positions";
import { Places } from "./collections/Places";
import { CheckIns } from "./collections/CheckIns";

// Plugins
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";
import { Schedules } from "./collections/Schedules";
import { Clients } from "./collections/Clients";
// import { Logs } from "./collections/Logs";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
    avatar: "default",
  },
  collections: [
    Users,
    Media,
    Workers,
    Positions,
    Places,
    Schedules,
    CheckIns,
    Clients,
    // Logs,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  plugins: [cloudinaryPlugin()],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  // Todo: cambiar en producción
  cors: ["http://localhost:5173"],
  csrf: ["http://localhost:5173"],
});
