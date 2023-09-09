import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import { request } from 'http'

const server = fastify()

const database = new DatabaseMemory()

server.post('/user', (request, reply) => {
    const {nome, email, senha} = request.body
    
    database.create({
        nome,
        email,
        senha
    })
   
    console.log(database.list())

    return reply.status(201).send()
})

server.get('/user', (request, reply) => {
    const user = database.list()

    return user
})

server.put('/user/:id', (request, reply) => {
    const userId = request.params.id
   
    const {nome, email, senha} = request.body

    database.update(userId, {
        nome,
        email,
        senha
        
    })

    return reply.status(204).send()
})

server.delete('/user/:id', (request, reply) => {
    const userId = request.params.id

    database.delete(userId)

    return reply.status(204).send()
    
})



server.listen({
    port: 3333,
})