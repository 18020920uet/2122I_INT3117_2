const mood = {
  BORED: 1,
  STABLE: 2,
  HAPPY: 3,
};

const action = {
  DELETE_GAME: 'Delete game',
  WATCH_MOVIE: 'Watch movie',
  PLAY_AGAIN: 'Play again',
  WRITE_REVIEW: 'Write review',
  READ_BOOK: 'Read book',
  REST: 'Rest',
};

// status: number(int) in mood HAPPY, STABLE, UNHAPPY
// beforeMidnight: true/false
// point: number(int)
const predictAction = (status, beforeMidnight, point) => {
  console.log(status)
  switch(status) {
    case mood.HAPPY: {
      if (point >= 0 && point < 100) {
        return beforeMidnight ? action.PLAY_AGAIN : action.REST;
      } else if (point >= 100 && point <= 899) {
        return action.PLAY_AGAIN;
      } else if (point >= 900 && point <= 999) {
        return beforeMidnight ? action.PLAY_AGAIN : action.REST;
      } else if (point == 1000) {
        return beforeMidnight ? action.DELETE_GAME : action.REST;
      } else {
        throw new Error("Error");
      }
    }
    case mood.STABLE: {
      if (point >= 0 && point < 100) {
        return action.REST;
      } else if (point >= 100 && point <= 899) {
        return beforeMidnight ? action.PLAY_AGAIN : action.REST;
      } else if (point >= 900 && point <= 999) {
        return action.REST;
      } else if (point == 1000) {
        return beforeMidnight ? action.WRITE_REVIEW : action.REST;
      } else {
        throw new Error("Error");
      }
    }
    case mood.BORED: {
      if (point >= 0 && point < 100) {
        return beforeMidnight ? action.DELETE_GAME : action.REST;
      } else if (point >= 100 && point <= 899) {
        return action.REST;
      } else if (point >= 900 && point <= 999) {
        return beforeMidnight ? action.WATCH_MOVIE : action.REST;
      } else if (point == 1000) {
        return beforeMidnight ? action.DELETE_GAME : action.REST;
      } else {
        throw new Error("Error")
      }
    }
    default: {
      throw new Error("Error");
    }
  }
}

module.exports = {
  predictAction,
  action,
  mood,
};
