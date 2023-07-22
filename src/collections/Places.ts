import { CollectionConfig } from "payload/types";

export const Places: CollectionConfig = {
  slug: "places",
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "Obra",
    plural: "Obras",
  },
  fields: [
    {
      type: "text",
      name: "name",
      label: "Nombre",
      required: true,
    },
    {
      type: "textarea",
      name: "description",
      label: "Descripción",
    },
    {
      type: "group",
      name: "location",
      label: "Ubicación",
      fields: [
        {
          type: "row",
          fields: [
            {
              type: "text",
              name: "latitude",
              label: "Latitud",
              required: true,
            },
            {
              type: "text",
              name: "longitude",
              label: "Longitud",
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "number",
      name: "radius",
      label: "Radio de cobertura (en mts.)",
      required: true,
      min: 0,
    },
  ],
};
