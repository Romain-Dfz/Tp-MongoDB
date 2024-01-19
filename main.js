const { insertPatients, updatePatient, findPatientsWithAgeGreaterThan29, deletePatientsWithRhume, deletePatientsWithRhume, deletePatientsWithToux } = require('./patients');

async function main() {
    await insertPatients();

    const patientIdToUpdate = '1234567890';
    await updatePatient(patientIdToUpdate);

    await findPatientsWithAgeGreaterThan29();

    await deletePatientsWithRhume();

    await deletePatientsWithToux();
}

main();
