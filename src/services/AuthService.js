import Repository from "../plugins/http";

const resource = "/auth";

const login = (payload) => {
  return Repository.post(`${resource}/login`,payload);
};

const AuthService = {
  login,
};

export default AuthService;