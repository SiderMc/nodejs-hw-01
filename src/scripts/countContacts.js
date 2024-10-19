import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () =>{
    const allContacts =await readContacts();
    return allContacts.length;
};

console.log(`You have ${await countContacts()} contact(s)`);
