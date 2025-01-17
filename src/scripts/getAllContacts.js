import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB)
    const contacts = JSON.parse(data)
    return contacts
  } catch (e) {
    console.error(e)
  }
};

console.log(await getAllContacts());
