import { CollectionConfig } from "payload/types";

export const Positions: CollectionConfig = {
  slug: "positions",
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "Puesto",
    plural: "Puestos",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "text",
      name: "name",
      label: "Nombre",
      required: true,
    },
    {
      type: "text",
      name: "description",
      label: "Descripción",
    },
    {
      type: "text",
      name: "salary",
      label: "Salario base",
    },
  ],
};
