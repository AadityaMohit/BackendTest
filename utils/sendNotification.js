const sendNotification = (userId, task) => {
  console.log(`Notify user ${userId}: Task "${task.title}" assigned.`);
};

module.exports = sendNotification;
