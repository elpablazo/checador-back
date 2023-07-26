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
      admin: {
        description:
          "Nombre del puesto. Puede ser compartido por varios trabajadores. No determina su rol o sueldo.",
      },
    },
    {
      type: "textarea",
      name: "description",
      label: "Descripción",
      admin: {
        description:
          "Características que ayuden a identificar el puesto (opcional).",
      },
    },
  ],
};
