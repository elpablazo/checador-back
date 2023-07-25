import { CollectionConfig } from "payload/types";
import _ from "lodash";
import { logger } from "../lib/logger";

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
    // afterChange: [
    //   async ({ operation, req: { payload, user }, previousDoc, doc }) => {
    //     // Create log
    //     if (operation === "create") {
    //       logger.create({ user, doc });
    //     } else if (operation === "update") {
    //       // Obtenemos la lista de campos que cambiaron y filtramos los que siguen igual
    //       // Ejemplo: ["Name: Antes -> Después", "Description: Antes -> Después"]
    //       const changedFields = Object.keys(doc).filter((key) => {
    //         return (
    //           !_.isEqual(doc[key], previousDoc[key]) && key !== "updatedAt"
    //         );
    //       });
    //       // Todo: extraer lógica a una función
    //       // Todo: eliminar campos que no han cambiado
    //       // Update log
    //       await payload.create({
    //         collection: "logs",
    //         data: {
    //           action: `${user.name} ${user.fatherLastName} actualizó ${doc.name}`,
    //           user: user.id,
    //           date: new Date(),
    //           type: "update",
    //           coleccion: "places",
    //           description: `Se actualizó la obra ${
    //             doc.name
    //           } en los siguientes campos: \n\n${changedFields
    //             .map((field) => {
    //               return `${field}: ${JSON.stringify(
    //                 previousDoc[field],
    //                 null,
    //                 2
    //               )} -> ${JSON.stringify(doc[field], null, 2)}`;
    //             })
    //             .join("\n")}
    //                 `,
    //         },
    //       });
    //     }
    //   },
    // ],
    // afterDelete: [
    //   async ({ req: { payload, user }, doc }) => {
    //     // Delete log
    //     await payload.create({
    //       collection: "logs",
    //       data: {
    //         action: `${user.name} ${user.fatherLastName} eliminó la obra ${doc.name}`,
    //         user: user.id,
    //         date: new Date(),
    //         type: "delete",
    //         coleccion: "places",
    //         description: `Se eliminó la obra ${
    //           doc.name
    //         } con la siguiente información: \n\n${JSON.stringify(
    //           doc,
    //           null,
    //           2
    //         )}`,
    //       },
    //     });
    //   },
    // ],
  },
};
