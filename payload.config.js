import {buildConfig} from 'payload/config';
import Categorias from './collections/Categorias';
import Notas from './collections/Notas';
import Autores from './collections/Autores';
import Media from './collections/Media';

export default buildConfig({
  serverURL: 'https://henry.dkndrd.com',
  admin: {
    user: Autores.slug,
  },
  collections: [
    Categorias,
    Notas,
    Autores,
    Media,
  ],
});
