const Autores = {
  slug: 'autores',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    {
      name: 'nombre',
      type: 'text',
    },
  ],
};

export default Autores;
