import postService from '../services/posts.service.js';

const getAllPosts = async (_req, res) => {
  const post = await postService.getAllPosts();
  res.status(200).json(post);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const post = await postService.getPostById(id);

  if(!post.length) res.status(400).json('Post não foi encontrado');

  return res.status(200).json(post);
};

const insertPost = async (req, res) => {
  const {owner, title, body, image} = req.body;

  const post = await postService.insertPost(owner, title, body, image);

  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, body, image } = req.body;

  await postService.updatePost(id, title, body, image);

  return res.status(200).json('Post atualizado com sucesso');
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await postService.deletePost(id);

  if (post) return res.status(post.type).json(post.message);

  return null;
}

const postController = {
  getAllPosts,
  getPostById,
  insertPost,
  updatePost,
  deletePost,
};

export default postController;
