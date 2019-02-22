const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
// const _Router = require('./_');

const dish = require('./data/models/dish-model');
const recipe = require('./data/models/recipe-model');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));

// server.use('/api/_', _Router);

server.get('/api/dish', (req, res) => {
  dish
    .get()
    .then(dishes => res.status(200).json({ success: true, dishes }))
    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to retrieve dishes. Please try again.'
      })
    );
});

server.get('/api/dish/:id', (req, res) => {
  const id = req.params.id;
  dish
    .getById(id)
    .then(dish => {
      if (!dish) {
        res.status(404).json({ success: false, message: 'id not found.' });
      } else {
        res.status(200).json({ success: true, data: dish });
      }
    })

    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to retrieve dish. Please try again.'
      })
    );
});

server.post('/api/dish', (req, res) => {
  const newDish = req.body;
  const { name } = req.body;

  if (!name) {
    res.status(500).json({ success: false, message: 'Required input missing' });
  }

  dish
    .add(newDish)
    .then(dish => res.status(200).json({ success: true, dish }))
    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to add dish. Please try again.'
      })
    );
});

server.get('/api/recipe', (req, res) => {
  recipe
    .get()
    .then(recipes => res.status(200).json({ success: true, recipes }))
    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to retrieve recipe. Please try again.'
      })
    );
});

server.get('/api/recipe/:id', (req, res) => {
  const id = req.params.id;
  recipe
    .getById(id)
    .then(data => {
      if (!dish) {
        res.status(404).json({ success: false, message: 'id not found.' });
      } else {
        res.status(200).json({ success: true, data });
      }
    })

    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to retrieve recipes. Please try again.'
      })
    );
});

server.post('/api/recipe', (req, res) => {
  const newRecipe = req.body;
  const { name, instructions } = req.body;

  if ((!name, !instructions)) {
    res.status(500).json({ success: false, message: 'Required input missing' });
  }

  recipe
    .add(newRecipe)
    .then(recipe => res.status(200).json({ success: true, recipe }))
    .catch(err =>
      res.status(500).json({
        success: false,
        message: 'Unable to add dish. Please try again.'
      })
    );
});

server.listen(4000, () => {
  console.log('*** Listening on port 4000 ***');
});
