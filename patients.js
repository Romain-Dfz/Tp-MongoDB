const { connectToDatabase } = require('./database');

async function insertPatients() {
    const patientCollection = await connectToDatabase();

    const patients = [
        {
            name: 'Patient1',
            age: 30,
            medicalHistory: ['History1']
        },
        {
            name: 'Patient2',
            age: 25,
            medicalHistory: ['History2']
        },
        {
            name: 'Patient3',
            age: 35,
            medicalHistory: ['History3']
        }
    ];

    await patientCollection.insertMany(patients);
    console.log('Inserted 3 patients with medical history');
}

async function updatePatient(patientId) {
    const patientCollection = await connectToDatabase();

    await patientCollection.updateOne(
        { _id: patientId },
        {
            $set: {
                name: 'NewName',
                age: 32,
                medicalHistory: ['NewHistory']
            }
        }
    );

    console.log('Updated patient data');
}

async function findPatientsWithAgeGreaterThan29() {
    const patientCollection = await connectToDatabase();

    const result = await patientCollection.find({ age: { $gt: 29 } }).toArray();
    console.log('Patients with age greater than 29:', result);
}

async function deletePatientsWithRhume() {
    const patientCollection = await connectToDatabase();

    await patientCollection.deleteMany({ "medicalHistory.desease": "rhume" });
    console.log('Deleted patients with a history of Rhume');
}

async function deletePatientsWithToux() {
    const patientCollection = await connectToDatabase();

    await patientCollection.deleteMany({ "medicalHistory.desease": "toux" });
    console.log('Deleted patients with a history of Toux');
}

module.exports = {
    insertPatients,
    updatePatient,
    findPatientsWithAgeGreaterThan29,
    deletePatientsWithRhume,
    deletePatientsWithToux,
};
