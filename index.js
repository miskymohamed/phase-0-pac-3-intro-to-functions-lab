function shout(hello) {
    return hello.toUpperCase()
  } 

  
  function whisper(HELLO) {
    return HELLO.toLowerCase()
  }
  
  function logShout(hello) {
    console.log( hello.toUpperCase())
  } 

  
  function logWhisper(HELLO) {
    console.log(HELLO.toLowerCase())
  }

  function sayHiToHeadphonedRoommate (message) {
    var cantHear = "I can't hear you!";
    var yes = "YES INDEED!";
    var iWould = "I would love to!";
    if (message.toLowerCase(message) === message) {
      return cantHear;
    }
    else if (message.toUpperCase(message) === message) {
      return yes;
    }
    else if ("Let's have dinner together!" === message) {
      return iWould;
    }
  }