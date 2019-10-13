import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { client, Post } from '@monoblog/api';

interface IndexPageProps {
  posts: Post[];
}

const IndexPage: NextPage<IndexPageProps> = ({ posts }) => (
  <div>
    <h1>My blog</h1>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

IndexPage.getInitialProps = async () => {
  const posts = await client.posts.getAllPosts();
  return { posts };
};

export default IndexPage;
