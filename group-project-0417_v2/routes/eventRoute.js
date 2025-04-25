const express = require('express');
const multer = require("multer");
const router = express.Router();
const path = require('path');
const Event = require('../models/event');

// 獲取所有事件
router.get('/events', async (req, res) => {
  try {
      let events;
      const userid = req.query.userid;

      // Filter by user id
      if (userid) {
          events = await Event.find({userid})
      } else {
          events = await Event.find()
      }

    const formattedEvents = events.map(event => ({
        id: event._id.toString(),
        title: event.title,
        start: event.start.toISOString().split('T')[0],
        end: event.end.toISOString().split('T')[0],
        description: event.description,
        allDay: true
    }));

    res.json(formattedEvents);
  } catch (err) {
    res.status(500).send(err);
  }
});


// 創建新事件
router.post('/events', (req, res) => {
  const newEvent = new Event(req.body);
  newEvent.save()
    .then(event => res.json({
      id: event._id.toString(),
      title: event.title,
      start: event.start,
      end: event.end,
      description: event.description,
    }))
    .catch(err => res.status(400).send(err));
});

// 更新事件
router.put('/events/:id', (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(event => res.json({
      id: event._id.toString(),
      title: event.title,
      start: event.start,
      end: event.end,
      description: event.description,
    }))
    .catch(err => res.status(400).send(err));
});

// 刪除事件
router.delete('/events/:id', (req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.send('Event deleted successfully'))
    .catch(err => res.status(400).send(err));
});

module.exports = router;