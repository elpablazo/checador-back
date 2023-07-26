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
  versions: {
    maxPerDoc: 10,
  },
  fields: [
    {
      type: "upload",
      name: "image",
      relationTo: "media",
      // Todo: required: true,
      admin: {
        description: "Imagen que ayuda a identificar la obra.",
      },
    },
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
      admin: {
        description:
          "Determina el área de cobertura de la obra. Cualquier check-in fuera de este radio no será válido.",
      },
    },
  ],
};
