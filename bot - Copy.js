const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log('The Bot Is Online!');
});

function pluck(array){
    return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role){
    if(pluck(mem.roles).includes(role)){
        return true;
    } else{
        return false;
    }
}





client.on('message', message => {
    if(message.content.toLowerCase().startsWith('*hello')){
        message.channel.send('Hello There, ' + message.author)
    }
})

client.on('message', message => {
    if(message.content.toLowerCase().startsWith('*dance')){
        if(message.author.id === '316998748737896469'){

        }
       else{
        message.channel.send('*dances with ' + message.author +'*' )
       }
        }
    
})

client.on('message', message => {
    var args = message.content.split(' ')
    if(message.content.toLowerCase().startsWith('*cookie')){
        if(args.length === 1){
            message.channel.send('Incorrect Command Usage. Command Format: `*cookie [User]`')
        }
         else if(args.length === 2){
            message.channel.send(args[1] + ', You got a cookie from ' + message.author ) 
         }
        else{
            message.channel.send('Incorrect Command Usage. Command Format: `*cookie [User]`')
        }
    }
    
})

client.on('message', message => {
    var args = message.content.split(' ')
    if(message.content.toLowerCase().startsWith('*poke')){
        if(args.length === 1){
            message.channel.send('Incorrect Command Usage. Command Format: `*poke [User]`')
            }
        else if(args.length === 2){
        message.channel.send(args[1] + ', You Just Got Poked By ' + message.author)

        }
        else{
            message.channel.send('Incorrect Command Usage. Command Format: `*poke [User]`')
        }

    }
})


client.on('message', message => {
    var args = message.content.split(' ')
    if(message.content.toLowerCase().startsWith('*say ')){
    if(args.length === 1){
        message.channel.send('Incorrect Command Usage. Command Format: `*say [String]`')
    }
    else {
        message.channel.send(args.join(' ').substring(5))
    }
    }
})


client.on('message', message => {
    var args = message.content.split(' ')
    if(message.content.toLowerCase().startsWith('*kick')){
    if(hasRole(message.member, 'Mod')){
        if(args.length === 1){
            message.channel.send('Incorrect Command Usage. Correct Command Format: `*kick [User]`')
        }
        else{
            message.guild.member(message.mentions.users.first()).kick()
        }
    }
    }
})

client.on('message', message => {
    var args = message.content.split(' ')
    if(message.content.toLowerCase().startsWith('*ban')){
    if(hasRole(message.member, 'Mod')){
        if(args.length === 1){
            message.channel.send('Incorrect Command Usage. Correct Command Format: `*ban [User]`')
        }
        else{  message.guild.member(message.mentions.users.first()).ban()
        }
    }
    }
})


client.on('message', message => {
    var args = message.content.split(' ')
    if(message.content.toLowerCase().startsWith('*sayd ')){
    if(args.length === 1){
        message.channel.send('Incorrect Command Usage. Command Format: `*sayd [String]`')
    }
    else {
        message.delete()
        message.channel.send(args.join(' ').substring(5))
    }
    }
})

client.on('message', message => {
    var args = message.content.split(' ')
    if(message.content.toLowerCase().startsWith('*hit')){
        if(args.length === 1){
            message.channel.send('Incorrect Command Usage. Command Format: `*hit [User]`')
            }
        else if(args.length === 2){
        message.channel.send(args[1] + ', You Just Got Hit By ' + message.author)

        }
        else{
            message.channel.send('Incorrect Command Usage. Command Format: `*hit [User]`')
        }

    }
})

client.on('message', message => {
    if(message.content.toLowerCase().startsWith('*cry')){
        message.channel.send('Awh, Don\'t Cry, ' + message.author)
    }
})

client.on('message', message => {
    var args = message.content.split(' ')
    if(message.content.toLowerCase().startsWith('*kiss ')){
    
        if(args.length === 1){
            message.channel.send('Incorrect Command Usage. Correct Command Format: `*kiss [User]`')
        }
        else{
            message.channel.send(message.mentions.users.first() + ', You got kissed by ' + message.author)
        
    }
    }
})

client.on('message', message => {
    if(message.content.toLowerCase().startsWith('*credits') || message.content.toLowerCase().startsWith('*credit') ){
        message.author.send('This bot is a work in progress. All credit goes to Commag.')
        message.channel.send(message.author + ', Check Your DMs!')
    }
})

client.on('guildMemberAdd', member => {
    console.log(member + ' Has Joined The Server')
    member.send('Welcome To The LGBT Robloxians Server. To join the community, go into Rank_Request and state which part of LGBT you are, if you are male or female, if you are single/taken and if you are a furry or not. Enjoy your time here -Commag')
})

client.login('MzE2OTk4NzQ4NzM3ODk2NDY5.DAoNtw.BtJPb5Rz3kEPGvwQmZ2cIioWqyQ')