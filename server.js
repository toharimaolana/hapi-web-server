const Hapi = require('@hapi/hapi');
// Import routes.js
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
        });

        server.route(routes);

        await server.start();
        console.log('Server running on %s', server.info.uri);
    };

init();