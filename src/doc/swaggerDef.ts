const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 2000
export const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'istore',
        version: '1.0.0',
    },
    servers: [
        {
            url: process.env.URL || `http://${HOST}:${PORT}/`,
        },
    ],
};