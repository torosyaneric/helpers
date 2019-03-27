function deepEqual(obj1, obj2) {
  // Check if obj1 and obj are objects
  if (
    typeof obj1 === typeof obj2 &&
    typeof obj1 === "object" &&
    obj1 !== null
  ) {
    // Check if obj1 and obj have same amount of properties
    if (Object.keys(obj1).length === Object.keys(obj2).length) {
      return Object.keys(obj1).every(el => {
        // Recursively call deepEqual for every property
        return deepEqual(obj1[el], obj2[el]);
      });
    } else return false;
  }
  // If obj1 and obj are not objects simply compare
  else if (obj1 !== obj2) return false;

  return true;
}
