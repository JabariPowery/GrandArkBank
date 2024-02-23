const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buy')
        .setDescription('Purchase an item from the shop, enter name of item to purchase')
        .addStringOption(option =>
            option.setName('item')
                .setDescription('Name of item to purchase')
                .setRequired(true))
};