const Task = require('../models/Task');
const sendNotification = require('../utils/sendNotification');

exports.createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, createdBy: req.user._id });
  if (task.assignedTo) sendNotification(task.assignedTo, task);
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const { search, status, priority, dueDate } = req.query;
  const filter = {
    $or: [
      { createdBy: req.user._id },
      { assignedTo: req.user._id }
    ]
  };
  if (search) filter.title = { $regex: search, $options: 'i' };
  if (status) filter.status = status;
  if (priority) filter.priority = priority;
  if (dueDate) filter.dueDate = { $lte: new Date(dueDate) };

  const tasks = await Task.find(filter).populate('assignedTo', 'name').populate('createdBy', 'name');
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Task deleted' });
};

exports.getDashboard = async (req, res) => {
  const now = new Date();
  const assignedTasks = await Task.find({ assignedTo: req.user._id });
  const createdTasks = await Task.find({ createdBy: req.user._id });
  const overdueTasks = await Task.find({ dueDate: { $lt: now }, status: { $ne: 'Completed' } });

  res.json({ assignedTasks, createdTasks, overdueTasks });
};
