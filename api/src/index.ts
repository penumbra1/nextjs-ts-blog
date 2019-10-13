import Koa from 'koa';
import { getAllPosts } from './posts';

const app = new Koa();

app.use(async ctx => {
  const posts = await getAllPosts();
  ctx.body = posts;
});

app.listen(5000);
