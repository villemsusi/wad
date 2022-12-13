const express = require('express');
const pool = require('./database');
const cors = require('cors')
const port = process.env.PORT || 3000;
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json());

app.use(cookieParser());

const secret = "reighreGInergnRGBRGInr9897RbB";
const maxAge = 60 * 60;

const generateJWT = (id) => {
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
}




app.get("/api/posts", cors(), async(req, res) => {
    try {
        console.log("GET posts request arrived")
        const posts = await pool.query(
            "SELECT * FROM posttable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.log(err.message);
    }
});

app.get('/api/posts/:id', cors(), async(req, res) => {
    try {
        console.log("get a post with route parameter  request has arrived");
        const { id } = req.params;
        const posts = await pool.query(
            "SELECT * FROM posttable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]); 
    } catch (err) {
        console.error(err.message);
    }
});


app.post('/api/addpost', cors(), async(req, res) => {
    try {
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            `INSERT INTO "posttable" ("author", "title", "body") VALUES ($1, $2, $3)`, [post.author, post.title, post.body]
        )
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/deleteall', cors(), async(req, res) => {
   try {
       console.log("delete all request has arrived");
       const deletePosts = await pool.query(
           `DELETE FROM "posttable"`
       )
       res.status(200);
   } catch (err) {
       console.error(err.message);
   }
});


app.get('/auth/authenticate', async(req, res) => {
    console.log('authentication request has been arrived');
    const token = req.cookies.jwt;
    let authenticated = false;
    try {
        if (token) {
            await jwt.verify(token, secret, (err) => {
                if (err) {
                    console.log(err.message);
                    console.log('token is not verified');
                    res.send({ "authenticated": authenticated });
                } else {
                    console.log('author is authenticated');
                    authenticated = true;
                    res.send({ "authenticated": authenticated });
                }
            })
        } else {
            console.log('author is not authenticated');
            res.send({ "authenticated": authenticated });
        }
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
});

app.post('/auth/signup', cors(), async(req, res) => {
    try {
        console.log("signup request has arrived");

        const data = req.body;
        const salt = await bcrypt.genSalt(); //  generates the salt, i.e., a random string
        const bcryptPassword = await bcrypt.hash(data.password, salt) // hash the password and the salt
        const updateuser = await pool.query(
            `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`, [data.name, data.email, bcryptPassword]
        )
        const users = await pool.query(
            `SELECT * FROM "users"`
        )
        console.log(users.rows)
        const token = await generateJWT(users.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: users.rows[0].id })
            .send;
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/auth/login', async(req, res) => {
    try {
        console.log("a login request has arrived");
        const data = req.body;
        const user = await pool.query(`SELECT * FROM "users"`);
        let account = null;
        for (const userElement of user.rows) {
            if (userElement.email === data.email)
                account = userElement;
        }
        if (account === null) return res.status(401).json({ error: "User is not registered" });

        const validPassword = await bcrypt.compare(data.password, account.password);

        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

        const token = await generateJWT(user.rows[0].id);
        res
            .status(201)
            .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
            .json({ user_id: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

app.put('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE posttable SET (author, title, body) = ($2, $3, $4) WHERE id = $1", [id, post.author, post.title, post.body]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});



app.delete('/api/posts/:id', cors(), async(req, res) => {
    try {
        const { id } = req.params;
        //const post = req.body; // we do not need a body for a delete request
        console.log("delete a post request has arrived");
        console.log(id)
        const deletepost = await pool.query(
            "DELETE FROM posttable WHERE id = $1", [id]
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
});



app.get('/auth/logout', (req, res) => {
    console.log('delete jwt request arrived');
    res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
});

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});