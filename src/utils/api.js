export const userInfo = {
  userUrl: '',
  name: '',
  login: '',
  repos: '',
  followers: '',
  following: '',
  avatar: '',
  reposList: []
};

export default class PostService {
  static async getUserInfo(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = response.json();
    return data;
  }

  static async getUserRepos(name) {
    const response = await fetch(`https://api.github.com/users/${name}/repos`);
    const data = response.json();
    return data;
  }
}

export async function getUser(name) {
  const user = await PostService.getUserInfo(name);
  const userRepos = await PostService.getUserRepos(name);
  console.log(user);
  console.log(userRepos);
  userInfo.name = user.name;
  userInfo.login = user.login;
  userInfo.repos = user.public_repos;
  userInfo.avatar = user.avatar_url;
  userInfo.followers = user.followers;
  userInfo.following = user.following;
  userInfo.userUrl = user.html_url;
  userInfo.reposList = userRepos;
  return userInfo;
}