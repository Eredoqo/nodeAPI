let todos = require('../Todos')

const List ={
    
    type: 'object',
    properties:{
        id:{type: 'string'},
        name:{type: 'string'},
        description:{ type: 'string' }
    }
}
 //Get Items

const getItemsOpts = {
    schema:{
        response:{
            200:{
                type: 'array',
                todos:{List}
            }
        }
    }
}

//Get Item

const getItemOpts = {
    schema:{
        response:{
            200: List
        },
    },
};

//Post Item

const postItemOpts = {
    schema:{
        body:{
            type:'object',
            required:['name', 'description'],
            properties:{
                name: {type: 'string'},
                description: {type: 'string'}
            }
        },
        response:{
            201: List
        },
    },
};

//Update Item

const updateItemOpts = {
    schema:{
        body:{
            type:'object',
            required:['name', 'description'],
            properties:{
                name: {type: 'string'},
                description: {type: 'string'}
            }
        },
        response:{
            201: List
        },
    },
};

//Delete Item

const deleteItemsOpts = {
    schema:{
        response:{
            200:{
                type: 'object',
                properties:{
                    message:{type: 'string'}}
            }
        }
    }
}


const todoRoute = (fastify, options, done)=>{

    fastify.get('/', getItemsOpts, function(req, reply){
        reply.send(todos)
    })

    fastify.get('/:id', getItemOpts, (req, reply)=>{
        const {id} = req.params 
        const todolist1 = todos.find((todolist1)=>todolist1.id === id)

        reply.send(todolist1)
    })

    fastify.post('/',postItemOpts, (req, reply)=>{
        const {name, description} = req.body
        const todolist1 = {id: String(todos.length + 1), name, description}
        todos.push(todolist1)
        reply.code(201).send(todolist1)
    })
    fastify.put('/:id',updateItemOpts, (req, reply)=>{
        const {id} = req.params
        const {name, description}= req.body
        const todolist1 =todos.find((todolist1)=>todolist1.id === id)
        todolist1.name = name
        todolist1.description = description
        reply.send(todolist1)
    })

    fastify.delete('/:id', deleteItemsOpts, (req, reply)=>{
        const {id} = req.params
        const todolist1 = todos.filter((todolist1)=>item.id !== id)
        reply.send(`Todo ${id} got deleted`)
    })

    done()
}


module.exports ={todoRoute}