const crypto = require('crypto');

const generateHash = (secretWord, secretNumber) => {
  const secretKey = secretWord + secretNumber;
  const md5 = crypto.createHash('md5');

  md5.update(secretKey);
  return md5.digest('hex');
}

const findSecretNumber = (secretWord, zeroes) => {
  let potentialSecretNumber = 1;
  while (true) {
    const hash = generateHash(secretWord, potentialSecretNumber);

    if (hash.startsWith(zeroes))
      return potentialSecretNumber;
    potentialSecretNumber++;
  }
}

const main = () => {
  // PART 1
  let secretNumber = findSecretNumber("iwrupvqb", "00000");
  console.log("SecretNumber for hash starting with five zeros: ", secretNumber);

  // PART 2
  secretNumber = findSecretNumber("iwrupvqb", "000000");
  console.log("SecretNumber for hash starting with six zeros: ", secretNumber);
}

main();