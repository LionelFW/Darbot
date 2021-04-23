const Discord = require("discord.js");

module.exports = class Darbot extends Discord.Client{
    constructor(config, options = {}){
        super(options);
        this.commands = new Discord.Collection();
    }
}