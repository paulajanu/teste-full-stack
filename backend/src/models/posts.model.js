import db from './connection.js';

const getAllPosts = async () => {
  const [result] = await db.execute('SELECT * FROM posts');

  return result;
};

const getPostById = async (id) => {
  const [result] = await db.execute('SELECT * FROM posts WHERE id = ?', [id]);
  
  return result;
};

const insertPost = async (owner, title, body, image) => {
  const [{ insertId }] = await db.execute('INSERT INTO posts (owner, title, body, image) VALUES (?, ?, ?, ?)', [owner, title, body, image]);

  return insertId;
};

const updatePost = async (id, title, body, image) => {
  await db.execute('UPDATE posts SET title = ?, body = ?, image = ? WHERE id = ?', [title, body, image, id]);
};

const deletePost = async (id) => {
  await db.execute('DELETE FROM posts WHERE id = ?', [id]);
};

const postModel = {
  getAllPosts,
  getPostById,
  insertPost,
  updatePost,
  deletePost,
};

export default postModel;
