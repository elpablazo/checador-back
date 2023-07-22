import { CollectionConfig } from "payload/types";

export const Workers: CollectionConfig = {
  slug: "workers",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  access: {
    read: () => true,
  },
  labels: {
    singular: "Trabajador",
    plural: "Trabajadores",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        // Información personal
        {
          label: "Información personal",
          description: "Nombre y apellidos, RFC, NSS, etc.",
          fields: [
            // Nombre y apellidos
            {
              type: "row",
              fields: [
                {
                  type: "text",
                  name: "name",
                  label: "Nombre",
                  required: true,
                },
                {
                  type: "text",
                  name: "fatherLastName",
                  label: "Apellido paterno",
                  required: true,
                },
                {
                  type: "text",
                  name: "motherLastName",
                  label: "Apellido materno",
                  required: true,
                },
              ],
            },

            // RFC
            {
              type: "row",
              fields: [
                {
                  type: "text",
                  name: "rfc",
                  label: "RFC",
                  required: true,
                  unique: true,
                  maxLength: 13,
                  minLength: 10,
                },
                {
                  type: "text",
                  name: "nss",
                  label: "NSS (Número de seguridad social)",
                  required: true,
                  unique: true,
                },
              ],
            },
          ],
        },

        // Información de contacto
        {
          label: "Información de contacto",
          description: "Teléfono, dirección, etc.",
          fields: [
            {
              type: "row",
              fields: [
                {
                  type: "text",
                  name: "phoneNumber",
                  label: "Número de teléfono",
                  required: true,
                },
                {
                  type: "group",
                  name: "address",
                  label: "Dirección",
                  fields: [
                    // Calle y número
                    {
                      type: "row",
                      fields: [
                        {
                          type: "text",
                          name: "street",
                          label: "Calle",
                          required: true,
                          admin: {
                            width: "60%",
                          },
                        },
                        {
                          type: "text",
                          name: "exteriorNumber",
                          label: "Número exterior",
                          required: true,
                          admin: {
                            width: "20%",
                          },
                        },
                        {
                          type: "text",
                          name: "interiorNumber",
                          label: "Número interior",
                          admin: {
                            width: "20%",
                          },
                        },
                      ],
                    },
                    // Colonia y código postal
                    {
                      type: "row",
                      fields: [
                        {
                          type: "text",
                          name: "colony",
                          label: "Colonia",
                          required: true,
                          admin: {
                            width: "70%",
                          },
                        },
                        {
                          type: "text",
                          name: "postalCode",
                          label: "Código postal",
                          required: true,
                          admin: {
                            width: "30%",
                          },
                        },
                      ],
                    },
                    // Ciudad y estado
                    {
                      type: "row",
                      fields: [
                        {
                          type: "text",
                          name: "city",
                          label: "Ciudad",
                          required: true,
                        },
                        {
                          type: "text",
                          name: "state",
                          label: "Estado",
                          required: true,
                        },
                      ],
                    },
                    // Referencias
                    {
                      type: "textarea",
                      name: "references",
                      label: "Referencias",
                      admin: {
                        description:
                          "Características particulares de la ubicación, como color de la puerta, etc.",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },

        // Base de datos
        {
          label: "Base de datos",
          description:
            "Las fotografías del trabajador. Se necesita un mínimo de 3. Entre más y más variadas, mejor.",
          fields: [
            {
              type: "relationship",
              name: "media",
              label: "Fotografías",
              required: true,
              hasMany: true,
              unique: true,
              relationTo: "media",
            },
          ],
        },
        {
          label: "Obra",
          fields: [
            {
              type: "relationship",
              name: "place",
              label: "Obra",
              relationTo: "places",
            },
            // Array
            {
              type: "array",
              name: "schedule",
              label: "Horario",
              minRows: 1,
              fields: [
                {
                  type: "select",
                  name: "day",
                  label: "Día",
                  options: [
                    { label: "Lunes", value: "monday" },
                    { label: "Martes", value: "tuesday" },
                    { label: "Miércoles", value: "wednesday" },
                    { label: "Jueves", value: "thursday" },
                    { label: "Viernes", value: "friday" },
                    { label: "Sábado", value: "saturday" },
                    { label: "Domingo", value: "sunday" },
                  ],
                },
                {
                  type: "date",
                  name: "startTime",
                  label: "Hora de entrada",
                  required: true,
                },
              ],
              admin: {
                components: {
                  RowLabel: ({ data }) => {
                    if (data.day) {
                      return `${data.day
                        .charAt(0)
                        .toUpperCase()}${data.day.slice(1)}
                        `;
                    } else {
                      return "Día";
                    }
                  },
                },
              },
            },
          ],
        },
      ],
    },

    // Sidebar panel
    // Activo
    // Activo
    {
      type: "checkbox",
      name: "active",
      label: "Activo",
      defaultValue: true,
      admin: {
        position: "sidebar",
      },
    },
    // Foto de perfil
    {
      type: "upload",
      name: "profilePicture",
      label: "Foto de perfil",
      relationTo: "media",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
        description:
          "Esta imagen es meramente ilustrativa. No se tomará en cuenta para el reconocimiento facial.",
      },
    },
    // Puesto
    {
      type: "relationship",
      name: "position",
      label: "Puesto",
      required: true,
      hasMany: false,
      relationTo: "positions",
      admin: {
        position: "sidebar",
        description: "El puesto que desempeña el trabajador en la empresa.",
      },
    },
    // Rol
    {
      type: "select",
      name: "role",
      label: "Rol",
      required: true,
      hasMany: false,
      options: [
        {
          label: "Trabajador",
          value: "worker",
        },
        {
          label: "Supervisor",
          value: "supervisor",
        },
      ],
      admin: {
        position: "sidebar",
        description:
          "Determina los permisos que tendrá el usuario. No se relaciona con el rol que desempeña en la empresa ni tiene efecto en su sueldo.",
      },
    },
    // Outsourced
    {
      type: "checkbox",
      name: "outsourced",
      label: "Subcontratado",
      defaultValue: false,
      admin: {
        position: "sidebar",
        description: "Indica si el trabajador es subcontratado.",
      },
    },
    {
      type: "text",
      name: "outsourcedCompany",
      admin: {
        condition: (fields) => fields.outsourced,
        position: "sidebar",
      },
    },
  ],
};
