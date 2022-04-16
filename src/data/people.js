import { faker } from '@faker-js/faker';

const people = [
    {
        name: faker.name.findName(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        telephone: faker.phone.phoneNumber(),
        birthday: faker.date.past().toDateString(),
    },
    {
        name: faker.name.findName(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        telephone: faker.phone.phoneNumber(),
        birthday: faker.date.past().toDateString(),
    },
    {
        name: faker.name.findName(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        telephone: faker.phone.phoneNumber(),
        birthday: faker.date.past().toDateString(),
    },
    {
        name: faker.name.findName(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        telephone: faker.phone.phoneNumber(),
        birthday: faker.date.past().toDateString(),
    },
    {
        name: faker.name.findName(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        telephone: faker.phone.phoneNumber(),
        birthday: faker.date.past().toDateString(),
    },
];

export const getpeople = (humans) => {
    return new Promise((resolve, reject) => {
        if (humans) {
            setTimeout(() => {
                resolve(people);
            }, 2000);
        } else {
            setTimeout(() => reject(new Error('Something went wrong')), 2000);
        }
    });
};

export default people;
