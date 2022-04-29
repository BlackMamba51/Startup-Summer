export const userInfo = {
  name: '',
  login: '',
  repos: '',
  followers: '',
  following: '',
  avatar: '',
};

export default class PostService {
  static async getAll(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = response.json();
    return data;
  }
}

export async function getUser(name) {
  const user = await PostService.getAll(name);
  console.log(user);
  userInfo.name = user.name;
  userInfo.login = user.login;
  userInfo.repos = user.public_repos;
  userInfo.avatar = user.avatar_url;
  userInfo.followers = user.followers;
  userInfo.following = user.following;
  return userInfo;
}