import postModel from '../models/posts.model.js';

const getAllPosts = async () => {
  const post = await postModel.getAllPosts();

  return post;
};

const getPostById = async (id) => {
  const post = await postModel.getPostById(id);

  return post;
};

const insertPost = async (owner, title, body, image) => {
  const insertId = await postModel.insertPost(owner, title, body, image);

  if(!insertId) return {type: '404', message: 'Post não inserido'};
    // Verificar melhor essa parte do erro

  const post = await postModel.getPostById(insertId);

  return post;
};

const updatePost = async (id, title, body, image) => {
  await postModel.updatePost(id, title, body, image);
  const updatedPost = await postModel.getPostById(id);

  return updatedPost;
};

const deletePost = async (id) => {
  await postModel.deletePost(id);
  const deletedItem = await postModel.getPostById(id);
  
  if (!deletedItem) return {type: 204, message: 'Excluído com sucesso'};
  
  return null;
};

const postService = {
  getAllPosts,
  insertPost,
  getPostById,
  updatePost,
  deletePost,
};

export default postService;
