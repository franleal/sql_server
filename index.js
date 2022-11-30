import ClientSql from "./sql";
import {config} from "./config/mariaDB"

app.set('views','./views')
app.set('view engine','ejs')

const sql = new ClientSql(config);




sql.createTable()
    .then(()=>{
        console.log('tabla creada')

    })
    .then(()=>{
        console.log('produtcos insertados')

        return sql.getProducts()
    })
    .catch((err)=>{
        console.log(err)
        throw err
    })
    .finally(()=>{
        sql.close()
    })

