import sql from 'mssql';

//DB Configuration
const dbSettings = {
    user: "sa",
    password: "123",
    server: "localhost",
    database: "DB_SCADERA",
    port: 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
};

//Connection test
async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
        
    }
}

getConnection();