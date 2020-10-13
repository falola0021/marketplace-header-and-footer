import http from "./http-common";

const forgotpassword = (email) => {
  return http
    .post("/api/user/password/forgot",
    
     {
  email
    }
    
    )
   
};

export default {
   forgotpassword

};
