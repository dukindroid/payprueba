import {buildConfig} from 'payload/config';
import Categorias from './collections/Categorias';
import Notas from './collections/Notas';
import Autores from './collections/Autores';
import Media from './collections/Media';

export default buildConfig({
  serverURL: 'https://639070aaa015e376a855989f--super-palmier-47d6b7.netlify.app/',
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
