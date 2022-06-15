const fastify = require('fastify')
const fastifySwagger = require('@fastify/swagger')

const {todoRoute} = require ('./routes/todolist')

const build=(options={},optionsSwagger={} )=>{
    const app = fastify(options)
    app.register(fastifySwagger, optionsSwagger)
    app.register(todoRoute)
    return app
}

module.exports={build}