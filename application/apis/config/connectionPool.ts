import { createPool, Pool } from 'mysql2';


let pool: Pool;


const getPool = () => {
  if (!pool) {
    pool = createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: Number(process.env.DB_PORT) || 3306,
    });

    pool.getConnection((err, conn) => {
      if (err) console.log('Error connecting to db...');
      else console.log('Connected to db...!');
      conn.release();
    });
  }
  return pool;
};


const executeQuery = (query: any, arrParams: any) => {
  return new Promise((resolve, reject) => {
    try {
      const pool = getPool();
      pool.query(query, arrParams, (err, data) => {
        if (err) {
          console.log('Error in executing the query')
          reject(err)
        }
        console.log('------db.jsx------')
        //console.log(data)
        resolve(data)
      })
    } catch (err) {
      reject(err)
    }
  })
}

export default executeQuery;