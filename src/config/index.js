const NODE_ENV = process.env.NODE_ENV || 'env';

const ENVS = {
    dev: {
        SECRET: micamisaazulquenuncalavo38483,
        PORT : 8080,
        CLOUD_NAME: danielfo4324,
        API_KEY: 975468616714216,
        API_SECRET: BvNjuqbKtG8cvGjLQcW5uNy - MvQ,
        db: {
            url: "mongodb + srv://mrdanielfo:corvettez6@clustercintanegra-gzdvg.mongodb.net/cintanegra?retryWrites=true&w=majority"
        } 
    },
    production: {
        SECRET: micamisaazulquenuncalavo38483,
        PORT: 8080,
        CLOUD_NAME: danielfo4324,
        API_KEY: 975468616714216,
        API_SECRET: BvNjuqbKtG8cvGjLQcW5uNy - MvQ,
        db: {
            url: "mongodb + srv://mrdanielfo:corvettez6@clustercintanegra-gzdvg.mongodb.net/cintanegra?retryWrites=true&w=majority"
        }
    }
}

module.exports = ENVS[NODE_ENV];
