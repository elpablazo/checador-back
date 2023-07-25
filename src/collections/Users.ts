import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  labels: {
    singular: "Administrador",
    plural: "Administradores",
  },
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

    // Sidebar panel
    // Foto de perfil
    {
      type: "upload",
      name: "profilePicture",
      label: "Foto de perfil",
      relationTo: "media",
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    // Rol
    {
      type: "select",
      name: "role",
      label: "Rol",
      required: true,
      hasMany: false,
      options: [{ label: "Administrador", value: "admin" }],
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Users;
