import sql from 'mssql';

const dbSettings = {
    user: 'sa',
    password: '123',
    server: 'GWTN156-9',
    database: 'DB_SCADERA'
};

sql.connect(dbSettings);