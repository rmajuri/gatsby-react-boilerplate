const db = require('../server/db');

const { Request } = require('../server/db/models');
const requestData = require('../requests');

async function seed() {
    await db.sync({ force: true });
    console.log('db synced!');
    const requests = requestData.map((request) => (
        Request.create({
            date: !request.date ? '' : String(request.date).slice(0, 10),
            name: request.name || '',
            make: request.make || '',
            model: request.model || '',
            year: !request.year ? '' : String(request.year),
            telephone: !request.telephone ? '' : String(request.telephone),
            email: request.email || '',
            lastContact: request.lastContact || '',
        })
    ));

    await Promise.all(requests);
}

async function runSeed() {
    console.log('seeding...');
    try {
        await seed();
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    } finally {
        console.log('closing db connection');
        await db.close();
        console.log('db connection closed');
    }
}

if (module === require.main) {
    runSeed();
}

module.exports = seed;
