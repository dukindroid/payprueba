import Frase from '../blocks/Frase';
import Contenido from '../blocks/Contenido';
import Alerta from '../blocks/Alerta';

const Notas = {
  slug: 'notas',
  admin: {
    defaultColumns: ['titulo', 'autor', 'categoria', 'tags', 'status'],
    useAsTitle: 'titulo',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'postMeta',
      type: 'group',
      fields: [
        {
          name: 'titulo',
          type: 'text',
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: 'descripción',
          type: 'textarea',
          required: true,
          minLength: 40,
          maxLength: 160,
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text',
        },
      ],
    },
    {
      name: 'titulo',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Post Media',
          fields: [
            {
              name: 'postImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        {
          label: 'Post Layout',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Frase, Contenido, Alerta],
            },
          ],
        },
      ],
    },
    // add sidebar fields here
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'borrador',
          label: 'Borrador',
        },
        {
          value: 'publicado',
          label: 'Publicado',
        },
      ],
      defaultValue: 'borrador',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'fechaPublicacion',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'autor',
      type: 'relationship',
      relationTo: 'autores',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categoria',
      type: 'relationship',
      relationTo: 'categorias',
      admin: {
        position: 'sidebar',
      },
    },
    // {
    //   name: 'tags',
    //   type: 'relationship',
    //   relationTo: 'tags',
    //   hasMany: true,
    //   admin: {
    //     position: 'sidebar',
    //   },
    // },
  ],
};
export default Notas;
