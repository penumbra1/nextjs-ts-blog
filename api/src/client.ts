import ky from 'ky-universal';
import { Post } from './models';

const BASE_URL = 'http://localhost:5000';
const api = ky.create({ prefixUrl: BASE_URL });

export const client = {
  posts: {
    getAllPosts(): Promise<Post[]> {
      const data = api.get('posts').json<Post[]>();
      return data;
    },
  },
};
