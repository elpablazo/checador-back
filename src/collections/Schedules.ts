import { CollectionConfig } from "payload/types";

// Todo: Add validation to check if the schedule is not duplicated or overlaps with another schedule
export const Schedules: CollectionConfig = {
  slug: "schedules",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      type: "text",
      name: "name",
      label: "Nombre",
      required: true,
    },
    // Array de días
    {
      type: "array",
      name: "schedule",
      label: "Días",
      minRows: 1,
      fields: [
        // Día de la semana
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
        // Hora de entrada
        {
          type: "group",
          name: "startTime",
          label: "Hora de entrada",
          fields: [
            {
              type: "row",
              fields: [
                // Hora
                {
                  type: "number",
                  name: "hour",
                  label: "Hora",
                  required: true,
                  min: 0,
                  max: 23,
                },
                // Minuto
                {
                  type: "number",
                  name: "minute",
                  label: "Minuto",
                  required: true,
                  min: 0,
                  max: 59,
                },
                // Tolerancia
                {
                  type: "number",
                  label: "Tolerancia (minutos)",
                  name: "tolerance",
                  min: 0,
                  max: 59,
                  defaultValue: 0,
                },
              ],
            },
          ],
        },
        // Hora de salida
        {
          type: "group",
          name: "endTime",
          label: "Hora de salida",
          fields: [
            {
              type: "row",
              fields: [
                // Hora
                {
                  type: "number",
                  name: "hour",
                  label: "Hora",
                  required: true,
                  min: 0,
                  max: 23,
                },
                // Minuto
                {
                  type: "number",
                  name: "minute",
                  label: "Minuto",
                  required: true,
                  min: 0,
                  max: 59,
                },
                // Tolerancia
                {
                  type: "number",
                  label: "Tolerancia (minutos)",
                  name: "tolerance",
                  min: 0,
                  max: 59,
                  defaultValue: 0,
                },
              ],
            },
          ],
        },
      ],
      admin: {
        components: {
          // Este componente se encarga de mostrar el día de la semana, la hora de entrada y la hora de salida
          RowLabel: ({ data }) => {
            const translateDay = (day: string) => {
              switch (day) {
                case "monday":
                  return "Lunes";
                case "tuesday":
                  return "Martes";
                case "wednesday":
                  return "Miércoles";
                case "thursday":
                  return "Jueves";
                case "friday":
                  return "Viernes";
                case "saturday":
                  return "Sábado";
                case "sunday":
                  return "Domingo";
                default:
                  return "Día";
              }
            };

            if (
              data.day &&
              data.startTime.hour &&
              data.startTime.minute &&
              data.endTime.hour &&
              data.endTime.minute
            ) {
              return (
                translateDay(data.day) +
                " de " +
                data.startTime.hour +
                ":" +
                data.startTime.minute +
                " a " +
                data.endTime.hour +
                ":" +
                data.endTime.minute
              );
            } else {
              return "Día";
            }
          },
        },
      },
    },
  ],
};
