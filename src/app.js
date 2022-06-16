const fastify = require('fastify');
const fastifySwagger = require('@fastify/swagger');
const fastifyPostgres = require("@fastify/postgres");

const { todoRoute } = require ('./routes/todolist');
const { todoRoute_v2 } = require("./routes/v2/todolist");

const build=(options={},optionsSwagger={}, optionsPostgres={} )=>{
    const app = fastify(options)
    app.register(fastifyPostgres, optionsPostgres);
    app.register(fastifySwagger, optionsSwagger)
    app.register(todoRoute);
    app.register(todoRoute_v2, { prefix: "/v2" });
    return app
};

module.exports={build};