import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    console.log(contacts)
    for (let i = 1; i <= number; i += 1) {
      contacts.push(createFakeContact())
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2))
  }catch (e) {
    console.error(e)
  }
};

await generateContacts(5);
