function isValidWalk(walk) {
  let north = 0;
  let south = 0;
  let east = 0;
  let west = 0;
  if (walk.length != 10) return false
  for (let i = 0; i < walk.length; i++) {
      if (walk[i] == 'n') {
          north++;
      } else if (walk[i] == 's') {
          south++;
      } else if (walk[i] == 'e') {
          east++;
      } else if (walk[i] == 'w') {
          west++;
      }
  }
  console.log(north, south, east, west);
  if (north == south && east == west) {
      return true
  }
  return false
}