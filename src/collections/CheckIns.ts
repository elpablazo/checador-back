import { CollectionConfig } from "payload/types";

export const CheckIns: CollectionConfig = {
  slug: "checkins",
  admin: {
    useAsTitle: "name",
  },
  labels: {
    singular: "Check-in",
    plural: "Check-ins",
  },
  versions: {
    maxPerDoc: 10,
  },
  fields: [
    {
      type: "text",
      name: "name",
      label: "Nombre",
    },
    {
      type: "relationship",
      name: "worker",
      label: "Trabajador",
      relationTo: "workers",
      hasMany: false,
      required: true,
    },
    {
      type: "relationship",
      name: "place",
      label: "Obra",
      relationTo: "places",
      hasMany: false,
      required: true,
    },
    {
      type: "date",
      name: "checkInDate",
      label: "Fecha de check-in",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          timeIntervals: 30,
        },
      },
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
      ],
    },
    {
      type: "upload",
      relationTo: "media",
      name: "image",
      label: "Imagen de evidencia",
      required: true,
      admin: {
        description: "Imagen que ayuda a identificar la obra.",
      },
    },

    // Sidebar position
    // Todo: hook para que se active el checbox cuando se hace un check-in manual (por un usuario de la app)
    {
      type: "row",
      fields: [
        {
          type: "checkbox",
          name: "isManual",
          label: "Manual",
          admin: {
            description:
              "Para casos extraordinarios. Se registrará como incidente.",
          },
        },
        {
          type: "checkbox",
          name: "isValid",
          label: "Es válido",
          admin: {
            description:
              "Si la ubicación del check-in fue dentro de la obra, y el reconocimiento facial es exitoso, se considera válido.",
          },
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "select",
      name: "type",
      label: "Tipo",
      required: true,
      options: [
        { label: "Entrada", value: "in" },
        { label: "Salida", value: "out" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "textarea",
      name: "notes",
      label: "Notas",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
