const Tags = {
  slug: 'tags',
  admin: {
    useAsTitle: 'nombre',
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

export default Tags;
