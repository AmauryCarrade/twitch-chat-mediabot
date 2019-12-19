const config = {
  'channel': 'eskimon', // Change here the name of your channel
  'cooldown': {
    'user': 10,    // Minimal time (seconds) before a user can play again a track
    'track': 10,   // Minimal time (seconds) before the same track can be played again
    'command': 1,  // Minimal time (seconds) before the command can be used again
  },
  'commands': {
    'play': '!play',  // Command to which your bot respond (e.g. !play mysupermusic)
    'stop': '!stop'   // Command to which your bot stops the music when sent by a mod or the owner (e.g. !stop)
  },
  'rights': {
    'user': true,  // Allow users to use the bot
    'mods': true,  // Allow moderators to use the bot
    'subs': true,  // Allow subs to use the bot
    'vips': true,  // Allow vips to use the bot
  }
}

const tracks = [
  {
    'command': 'toast',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/a_la_volette1.mp3'
  },
  {
    'command': 'toast2',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/a_moi.mp3'
  },
  {
    'command': 'assassin',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/a_moi_a_lassassin.mp3'
  },
  {
    'command': 'bucher',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/bucher1.mp3'
  },
  {
    'command': 'grelotine',
    'file': '/home/eskimon/Documents/Bot_twitch_audio/Grelotine.mp3'
  }
]
