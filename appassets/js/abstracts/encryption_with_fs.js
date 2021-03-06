// functions to get decrypted JSON from file, and to encrypt and write JSON to file

// encrypt
const encryptJSONToFile = (filename, password, obj) => {
    // variable for encrypted text
    const encryptedText = encryptJSON(password, obj);

    // write encrypted text to filename
    writeFile(filename, encryptedText);
}

// decrypt
const decryptJSONInFile = (filename, password) => {
    // get encrypted text from file and store in variable
    const encryptedText = readFile(filename);
    
    // variable for decrypted JSON
    const decryptedJSON = decryptJSON(password, encryptedText);

    // return decryptedJSON
    return decryptedJSON;
}