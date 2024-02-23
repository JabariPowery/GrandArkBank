const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('transfer')
        .setDescription('Transfers money to another user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Select User to transfer to')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Amount of Dollas to transfer to User specified')
                .setRequired(true))
};