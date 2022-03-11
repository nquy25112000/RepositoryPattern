
import { Customers, CustomersRepository } from './Entities/customers'
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

    (async () => {
        // connecting to database
        const db = await knex;

        // initializing the repository
        const repository = new CustomersRepository(db, 'customers')

        // call find method from repository
        const product = await repository.fillAll();

        console.log({ customers: JSON.stringify(product) })

    })()