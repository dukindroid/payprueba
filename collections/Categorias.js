const Categorias = {
  slug: 'categorias',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
    },
  ],
  timestamps: false,
};

export default Categorias;
