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
  hooks: {
    // Logs
    afterChange: [
      async ({ operation, req: { payload, user }, previousDoc, doc }) => {
        // Create log
        if (operation === "create") {
          await payload.create({
            collection: "logs",
            data: {
              action: `${user.name} ${user.fatherLastName} creó la obra ${doc.name}`,
              user: user.id,
              date: new Date(),
              type: "create",
              coleccion: "places",
              description: `Se creó la obra ${
                doc.name
              } con la siguiente información: \n\n${JSON.stringify(
                doc,
                null,
                2
              )}`,
            },
          });
        } else if (operation === "update") {
          // Obtenemos la lista de campos que cambiaron y filtramos los que siguen igual
          // Ejemplo: ["name", "age"]
          const changedFields = Object.keys(doc).filter(
            (key) => doc[key] !== previousDoc[key]
          );

          // Creamos un array con los campos que cambiaron en formato "campo: valor anterior -> valor actual" sin tomar en cuenta los que siguen igual
          // Ejemplo: ["name: Juan -> Pedro", "age: 20 -> 21"]
          const changedFieldsWithPreviousAndNewValue = changedFields.map(
            (key) => `${key}: ${previousDoc[key]} -> ${doc[key]}`
          );

          // Todo: extraer lógica a una función
          // Todo: eliminar campos que no han cambiado
          // Update log
          await payload.create({
            collection: "logs",
            data: {
              action: `${user.name} ${user.fatherLastName} actualizó la obra ${doc.name}`,
              user: user.id,
              date: new Date(),
              type: "update",
              coleccion: "places",
              description: `Se actualizó la obra ${
                doc.name
              } con la siguiente información: \n\n${JSON.stringify(
                changedFieldsWithPreviousAndNewValue,
                null,
                2
              )}`,
            },
          });
        }
      },
    ],
    afterDelete: [
      async ({ req: { payload, user }, doc }) => {
        // Delete log
        await payload.create({
          collection: "logs",
          data: {
            action: `${user.name} ${user.fatherLastName} eliminó la obra ${doc.name}`,
            user: user.id,
            date: new Date(),
            type: "delete",
            coleccion: "places",
            description: `Se eliminó la obra ${
              doc.name
            } con la siguiente información: \n\n${JSON.stringify(
              doc,
              null,
              2
            )}`,
          },
        });
      },
    ],
  },
};
