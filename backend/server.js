const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes.js');

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const server = http.createServer(app);

mongoose
	.connect(process.env.MONGODB_URI, {})
	.then(() => {
		console.log('MongoDB connected');
		server.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
