import { CollectionConfig } from "payload/types";

export const Clients: CollectionConfig = {
  slug: "clients",
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "Cliente",
    plural: "Clientes",
  },
  fields: [
    {
      type: "text",
      name: "name",
      label: "Nombre completo",
      required: true,
    },
    {
      type: "text",
      name: "email",
      label: "Correo electrónico",
    },
    {
      type: "text",
      name: "phone",
      label: "Teléfono",
    },
    {
      type: "text",
      name: "company",
      label: "Empresa",
    },
  ],
};
