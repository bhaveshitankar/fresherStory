export const server = "https://df7c93a8-43b0-434b-977b-7f5e12665f7d-prod.e1-us-cdp-2.choreoapis.dev/fresherstory/backend/v1.0";

const apiList = {
  login: `${server}/auth/login`,
  signup: `${server}/auth/signup`,
  uploadResume: `${server}/upload/resume`,
  uploadProfileImage: `${server}/upload/profile`,
  jobs: `${server}/api/jobs`,
  applications: `${server}/api/applications`,
  rating: `${server}/api/rating`,
  user: `${server}/api/user`,
  applicants: `${server}/api/applicants`,
};

export default apiList;
