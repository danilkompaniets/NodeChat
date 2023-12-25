const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Import the axios library

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            {
                username: username,
                secret: username,
                first_name: username,
                last_name: username
            },
            {
                headers: {
                    "private-key": "8edd7635-00e8-4e21-9827-fe7c70e125ff"
                }
            }
        );
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');})
