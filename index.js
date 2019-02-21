const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// const _Router = require('./_');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));

// server.use('/api/_', _Router);

server.get('/test', (req, res) => {
  server
    .get()
    .then(res => res.status(200).json({ success: true, res }))
    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to retrieve actions. Please try again.'
      })
    );
});

server.listen(4000, () => {
  console.log('*** Listening on port 4000 ***');
});
