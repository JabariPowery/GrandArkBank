const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('givemoney')
        .setDescription('Gives money to user specified (Admin Command)')
        .setDefaultMemberPermissions(PermissionFlagsBits.Admin)
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Select User')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Amount of Dollas to add to user balance')
                .setRequired(true))
}