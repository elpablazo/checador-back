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

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
    avatar: "default",
  },
  collections: [Users, Media, Workers, Positions, Places, CheckIns],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  plugins: [cloudinaryPlugin()],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
