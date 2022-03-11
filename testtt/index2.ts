
import { Product, ProductRepository } from './Entities/product'
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'knex',
        charset: 'utf8'
    }
})

const connect = async () => {
    const connection = knex;
    // Waiting for a connection to be established
    await connection.raw('SELECT 1')

    return connection
}

(async () => {
    // connecting to database
    const db = await connect()

    // initializing the repository
    const repository = new ProductRepository(db, 'products')

    // call find method from repository
    const product = await repository.fillAll();

    console.log({products: JSON.stringify(product)})

})()