

const development = {
    name: 'development',
    asset_path:'/assets',
    session_cookie_key: 'nVRW3QewxYD8dmAjR1M2BtitlKomvW0r',
    db: 'codeial_development',
    smtp:  {
    service:'gmail',
    host: 'smtp.gmail.com',
    port:587,
    secure: false,
    auth: {
        user: 'partikb640@gmail.com',
        pass: 'rqifdakxcvfstmhr'
    }
  },
  google_client_id: "700996801820-1q0hs4reoagih0j064p13fv7ra30444v.apps.googleusercontent.com",
  google_client_secret:"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",
  google_call_back_url:"http://localhost:8000/users/auth/google/callback",
  jwt_secret:'codeial',

}


const production = {
    name: 'production',
    
    asset_path: process.env.CODEIAL_ASSET_PATH,
    session_cookie_key: process.env.CODEIAL_SESSION_COOKIE_KEY,
    db: process.env.CODEIAL_DB,
    smtp:  {
    service:'gmail',
    host: 'smtp.gmail.com',
    port:587,
    secure: false,
    auth: {
      user: 'partikb640@gmail.com',
      pass: 'rqifdakxcvfstmhr'
  }
  },
  google_client_id: "700996801820-1q0hs4reoagih0j064p13fv7ra30444v.apps.googleusercontent.com",
  google_client_secret: "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",
  google_call_back_url: "http://localhost:8000/users/auth/google/callback",
  jwt_secret:"codeial",
}



module.exports = eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);