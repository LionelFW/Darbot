const pingPhrases = [
    'R-R-R-R-R-RAISE ?!',
    'GOOD !'
]

function getRandomPingPhrase(){
    return pingPhrases[Math.floor(Math.random() * (pingPhrases.length))];
}

module.exports = {
    name: 'ping',
    description: 'Vérifier le statut du bot',
    execute(message, client){
        return message.reply(getRandomPingPhrase());
    } 
}
