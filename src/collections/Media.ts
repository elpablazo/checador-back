import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    disableLocalStorage: true,
    mimeTypes: ["image/*"],
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: undefined,
        position: "centre",
      },
      {
        name: "card",
        width: 768,
        height: undefined,
        position: "centre",
      },
      {
        name: "tablet",
        width: 1024,
        height: undefined,
        position: "centre",
      },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description: "Una descripción de la imagen",
      },
    },
  ],
};
