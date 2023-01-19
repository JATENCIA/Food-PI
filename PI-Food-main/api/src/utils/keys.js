function getKey() {
  function getRandomInt(num) {
    return Math.floor(Math.random() * num);
  }

  let key = AllKeys[getRandomInt(AllKeys.length)];
  return key;
}

const AllKeys = [
  "93bfe7e5342448a48f03849063ce5521",
  "880cf0e63ea24415abdbfa6aab1b7b8a",
  "82391ac3952a4287978a048301fc1fb6",
  "bbb4b96713e54cff8ac0b727485510b3",
  "237182fee3534b17a9dbd50658ef9825",
  "d28a45d38e354c1dbe8490ee25b0f875",
];

module.exports = { getKey };
