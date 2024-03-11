import sql from 'mssql';

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

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        throw error;
    }
}

export { sql };
