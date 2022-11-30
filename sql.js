import knexLib  from 'knex';

class ClientSql{
    constructor(config){
        this.knex = knexLib(config)
    }

    createTable(){
        return this.knex.schema.dropTableIfExists('productos')
        .finally(()=>{
            return this.knex.schema.createTable('productos',table =>{
                table.increments('id_product').primary();
                table.string('nombre',50).notNullable()
                table.string('codigo',10).notNullable;
                table.float('precio');
                table.integer('stock');
            })
        })
    }

    insertProduct(products){
        return this.knex('productos').insert(products);
    }

    getProducts(){
        return this.knex('productos').select('*')
    }

    getProductById(id){
        return this.knex('productos').select('*').where('id_product',id)
    }

    updateProduct(id,product){
        return this.knex('productos').where('id_product',id).update(product)
    }

    deleteProduct(id){
        return this.knex('productos').where('id_product',id).del()
    }

    updateStock(id,newStock){
        return this.knex('productos').where('id_product',id).update({stock: newStock})

    }

    close(){
        return this.knex.destroy()
    }
}

export default ClientSql