export const userInfo = {
  userUrl: '',
  name: '',
  login: '',
  repos: '',
  followers: '',
  following: '',
  avatar: '',
  status: null,
  reposList: []
};

export default class PostService {
  static async getUserInfo(userName) {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      
      if (!response.ok) {
        userInfo.status = 404;
        throw new Error(`${response.status}`);
      }
      userInfo.status = 200;
      const data = await response.json();
      return data;
    } catch(err) {
      console.log(err);
    }
  
    // userInfo.status = response.status; 
    // if (response.status === 404) {
    //   throw new Error('Пользователь не найден');
    // } else {
    //   const data = response.json();
    //   return data;
    // }
  }

  static async getUserRepos(name) {
    const response = await fetch(`https://api.github.com/users/${name}/repos?per_page=100&page=1`);
    const data = await response.json();
    return data;
  }
}

export async function getUser(name) {
  const user = await PostService.getUserInfo(name);
  if(userInfo.status !== 404) {
    const userRepos = await PostService.getUserRepos(name)
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
}