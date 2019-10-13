import faker from 'faker';
import { Post } from './models';

function randomPost(): Post {
  return {
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
  };
}

export function getAllPosts() {
  const posts: Post[] = Array.from({ length: 10 }).map(randomPost);

  return posts;
}
