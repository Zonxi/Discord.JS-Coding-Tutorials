const client = require('../index')
const arrayOfStatus = [
    'uhelp for all comands Zonxi is making me.',
]

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`)
    setInterval(() => {
        client.user.setPresence({ activities: [{ name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], status: 'idle', type: "WATCHING" })
    }, 5000)
}) 