

const development = {
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'alchemy.cn18',
            pass: 'codingninjas'
        }
    },
    google_client_id: "313233209747-dnqmail3j800a2jvsuckqhohodhs7i63.apps.googleusercontent.com",
    google_client_secret: "0FXb5EBWa4xRfJ8jR-1HKMd2",
    google_call_back_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial',
}


const production =  {
    name: 'production'
    asset_path:process.env.CODEIAL_ASSET_PATH ,
    session_cookie_key: 'Hugoe9SPmQ7mdHOdvKzHrfhFR2g1rGcR',
    db: 'codeial_production',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'alchemy.cn18',
            pass: 'codingninjas'
        }
    },
    google_client_id: "313233209747-dnqmail3j800a2jvsuckqhohodhs7i63.apps.googleusercontent.com",
    google_client_secret: "0FXb5EBWa4xRfJ8jR-1HKMd2",
    google_call_back_url: "http://codeial.com/users/auth/google/callback",
    jwt_secret: process.env.CODEIAL_JWT_SECRET,
}



module.exports = development;