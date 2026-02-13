import fastify from 'fastify';

const server = fastify();

server.get('/usuarios' , () => {
        return 'Ola Mundo!'
}) 

server.post('/usuarios' , (request, reply) => {
        return 'Ola Mundo!'
})

server.listen({
    port:3000
})