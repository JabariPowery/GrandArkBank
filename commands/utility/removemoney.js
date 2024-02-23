const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('removemoney')
        .setDescription('Removes money from user specified (Admin Command)')
        .setDefaultMemberPermissions(PermissionFlagsBits.Admin)
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Select User')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Amount of Dollas to remove from user balance')
                .setRequired(true))
}