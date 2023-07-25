import { CollectionConfig } from "payload/types";

// Estos logs permiten saber qué usuario hizo qué acción y cuándo para todas las colecciones
export const Logs: CollectionConfig = {
  slug: "logs",
  access: {
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  admin: {
    useAsTitle: "action",
  },
  fields: [
    // Acción
    {
      type: "text",
      name: "action",
      label: "Acción",
      required: true,
    },
    {
      type: "textarea",
      name: "description",
      label: "Descripción",
    },
    // Sidebar panel
    // Usuario
    {
      type: "relationship",
      name: "user",
      label: "Usuario",
      relationTo: "users",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    // Fecha
    {
      type: "date",
      name: "date",
      label: "Fecha",
      required: true,
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    // Tipo
    {
      type: "select",
      name: "type",
      label: "Tipo",
      required: true,
      hasMany: false,
      options: [
        { label: "Creación", value: "create" },
        { label: "Actualización", value: "update" },
        { label: "Eliminación", value: "delete" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    // Colección
    {
      type: "text",
      name: "collection",
      label: "Colección",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
