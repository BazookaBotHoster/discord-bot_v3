exports.run = (bot, msg, params) => {
    Message.reply(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
         

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};


exports.help = {
  name: "ping",
  description: "Get a simple Pong response",
  usage: "ping"
};
