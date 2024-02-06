const Sequelize = require('sequelize');

const sequelize = new Sequelize('database','username','password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

const CurrencyShop = require('./models/CurrencyShop.js')(sequelize, Sequelize.DataTypes);
require('./models/Users.js')(sequelize, Sequelize.DataTypes);
require('./models/UserItems.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
    const shop = [
        CurrencyShop.upsert({ name: 'Ban forever', cost: 1}),
        CurrencyShop.upsert({ name: 'Ban for two days', cost: 2 }),
        CurrencyShop.upsert({ name: 'Ban for three days', cost: 3}),
    ];

    await Promise.all(shop);
    console.log('Database synced');

    sequelize.close();
}).catch(console.error);