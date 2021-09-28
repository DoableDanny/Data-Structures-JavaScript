// This Hash Table uses "separate chaining" to store more than one key-value pair at each hash index.
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);

    // If the space is empty, initialise to empty array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // Prevent duplicate values in keysArr
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // Prevent duplicate values in valuesArr
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(7);
ht.set('white', '#ffffff');
ht.set('white', '#ffffff');
ht.set('blue', '#0000ff');
ht.set('green', '#00ff00');
ht.set('red', '#ff0000');
ht.set('olive', '#808000');
ht.set('yellow', '#808000');
ht.set('maroon', '#808000');
console.log(ht);

console.log(ht.get('olive')); // #808000
console.log(ht.keys()); // ['green', 'maroon', 'yellow', 'olive', 'white', 'blue', 'red']
console.log(ht.values()); // ['#00ff00', '#808000', '#ffffff', '#0000ff', '#ff0000']
