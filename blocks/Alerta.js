const Alerta = {
  slug: 'alerta',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        {
          value: 'info',
          label: 'Info',
        },
        {
          value: 'exito',
          label: 'Éxito',
        },
        {
          value: 'precaucion',
          label: 'precaucion',
        },
        {
          value: 'peligro',
          label: 'peligro',
        },
      ],
    },
    {
      name: 'mensaje',
      type: 'textarea',
    },
  ],
};
export default Alerta;
