import pg from 'pg';
import  { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } from './config.js';

const { Pool } = pg;

export const pool = new Pool({
    user: "postgres",
    host: "databaselab0.chu0w0iw8ubf.us-east-2.rds.amazonaws.com" ,
    database: "postgres" ,
    password: "admin12345.",    
    port: 5432 ,
    ssl: {
        rejectUnauthorized: false // Deshabilitar validación del certificado (opcional, para desarrollo)
    }
});

