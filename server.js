const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.post('/execute', async (req, res) => {
    const { script, language, versionIndex } = req.body;
    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch('https://api.jdoodle.com/v1/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                script,
                language,
                versionIndex,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            })
        });
        const result = await response.json();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
