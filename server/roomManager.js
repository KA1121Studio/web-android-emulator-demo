// server/roomManager.js

const rooms = new Map();

function createRoom(userId) {
  if (rooms.has(userId)) {
    return rooms.get(userId);
  }

  const room = {
    userId,
    createdAt: Date.now(),
  };

  rooms.set(userId, room);
  console.log(`Room created for ${userId}`);

  return room;
}

function getRoom(userId) {
  return rooms.get(userId);
}

function deleteRoom(userId) {
  if (rooms.has(userId)) {
    rooms.delete(userId);
    console.log(`Room deleted for ${userId}`);
  }
}

module.exports = {
  createRoom,
  getRoom,
  deleteRoom,
};
