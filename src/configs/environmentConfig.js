
const dev = {
    API_ENDPOINT_URL: 'http://localhost:4000/api/'
}

const prod = {
    API_ENDPOINT_URL: 'http://api.commscrm.com.au/api/'
}

const getEnv = () => {
    let env;
    switch(process.env.APP_ENVIRONMENT) {
        case 'production':
            env = prod;
            break;
        case 'development':
            env = dev;
            break;
        default:
            env = dev;
    }
    return env;
}

export const env = getEnv();