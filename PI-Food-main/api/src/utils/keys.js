function getKey() {
  function getRandomInt(num) {
    return Math.floor(Math.random() * num);
  }

  let key = AllKeys[getRandomInt(AllKeys.length)];
  return key;
}

const AllKeys = [
  "93bfe7e5342448a48f03849063ce5521",
  "bbb4b96713e54cff8ac0b727485510b3",
  "237182fee3534b17a9dbd50658ef9825",
  "d28a45d38e354c1dbe8490ee25b0f875",
];

module.exports = { getKey };
