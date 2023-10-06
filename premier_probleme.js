const input = [656, 756, 5345, 67, 43, 76, 54, 768, 34];
const divideArray = (arr, size) => {
   return arr.reduce((acc, val, ind) => {
      const subIndex = ind % size;
      if(!Array.isArray(acc[subIndex])){
          acc[subIndex] = [val];
      }else{
          acc[subIndex].push(val);
      }
      return acc;
   }, []);
};
console.log(divideArray(input, 3));