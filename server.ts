import * as express from 'express';
import { Request, Response } from 'express'; // Add this line

import * as path from 'path';

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Redirect all routes to index.html
app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
