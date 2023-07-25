// Todo; usar o borrar
import _ from "lodash";
import payload from "payload";

export const logger = {
  slug: "logs",
  create: async ({ user, doc }) => {
    console.log("doc: ", doc);

    return await payload.create({
      collection: logger.slug,
      data: {
        action: `${user.name} ${user.fatherLastName} creó ${doc.name}`,
        user: user.id,
        date: new Date(),
        type: "create",
        coleccion: "places",
        description: `Se creó la obra ${
          doc.name
        } con la siguiente información: \n\n${JSON.stringify(doc, null, 2)}`,
      },
    });
  },
};
