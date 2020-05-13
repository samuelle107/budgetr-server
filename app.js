// Imports
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config()

// Initiailization
const app = express();
// Found by doing `heroku config --app <APP_NAME>` where app name is your heroku app
const connectionString = process.env.CONNECTION_URL;
const pool = new Pool({
    connectionString,
    ssl: true
});

if (process.env.IS_PRODUCTION != 'true') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}

// Endpoints
app.get('/transactions/:user_id', (req, res) => {
    const query = `SELECT * FROM transactions where user_id = '${ req.params.user_id }'`;

    pool.query(query, (querryError, querryResponse) => {
        try {
            if (querryError) {
                throw querryError;
            } else {
                res.status(200).json({
                    payload: querryResponse.rows
                });
            }
        } catch (err) {
            res.status(400).json({
                payload: { [] },
                err: 'There was an error attempting to get the data',
                hint: err.hint
            });
        }
    });
});

app.listen(process.env.PORT_NUMBER, () => {
    console.log(`The server has started on port ${ PORT_NUMBER }`);
});
