
import fs from 'fs';
import path from 'path';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
	const html = fs.readFileSync(path.resolve(process.cwd(), './templates/index.html'), 'utf-8');
	res.send(html);
});

app.get('/*', (req, res) => {
	const html = fs.readFileSync(path.resolve(process.cwd(), './templates/index.html'), 'utf-8');
	res.send(html);
});

app.listen(3000, () => {
	console.log('server running');
});