const { MongoClient } = require('mongodb');

async function connectToDatabase() {
    const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to the database');

        return client.db('hopital').collection('patient');
    } catch (error) {
        console.error('Erreur connection database', error);
        throw error;
    }
}

module.exports = {
    connectToDatabase,
};
