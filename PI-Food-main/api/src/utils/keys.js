const { API_KEY } = process.env;

function getKey() {
  function getRandomInt(num) {
    return Math.floor(Math.random() * num);
  }

  let key = API_KEY[getRandomInt(API_KEY.length)];
  return key;
}

// const AllKeys = [
//   "93bfe7e5342448a48f03849063ce5521",
//   "880cf0e63ea24415abdbfa6aab1b7b8a",
//   "82391ac3952a4287978a048301fc1fb6",
//   "bbb4b96713e54cff8ac0b727485510b3",
//   "000bb79cb9974e12a35cde5da18318e5",
//   "237182fee3534b17a9dbd50658ef9825",
//   "f7686d9cd3ee41778ef68e2a103cef06",
//   "29856573cd9549e696ae56e64f4569fc",
//   "51e21320028a400a82fe35535ab3cd1b",
//   "d28a45d38e354c1dbe8490ee25b0f875",
//   "993943c6a7d4a29527f6e9c92b7d0541",
//   "c9bcda99e3494b769f3462ad0abaf80e",
// ];

module.exports = { getKey };
