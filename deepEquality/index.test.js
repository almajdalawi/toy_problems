/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * isDeepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * isDeepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures and the keys order.
 *
 */

function isDeepEquals(obj1, obj2) {
  if (obj1 == null || obj2 == null) { return false }

  let obj1Keys = Object.keys(obj1)
  let obj2Keys = Object.keys(obj2)

  if (obj1Keys.length != obj2Keys.length) { return false }

  for (let key of obj1Keys) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const isNotNull = val1 !== null || val2 !== null;
    const isObjects = typeof val1 === "object" && typeof val2 === "object";

    if ((isNotNull && isObjects && !isDeepEquals(val1, val2)) ||
      (isNotNull && !isObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}


describe('Tests', () => {
  const mockObj = {
    a: 1,
    b: {
      c: 3,
    },
  };

  it('test isDeepEquals #case1', () => {
    const result = isDeepEquals(null, {});
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case2', () => {
    const result = isDeepEquals();
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case3', () => {
    const result = isDeepEquals(mockObj, mockObj);
    expect(result).toEqual(true);
  });

  it('test isDeepEquals #case4', () => {
    const result = isDeepEquals(null, null);
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case5', () => {
    const result = isDeepEquals(mockObj, {
      ...mockObj,
      b: {
        c: '3',
      },
    });
    expect(result).toEqual(false);
  });

  it('test isDeepEquals #case6', () => {
    const result = isDeepEquals(mockObj, {
      ...mockObj,
      b: {
        c: 6,
      },
    });
    expect(result).toEqual(false);
  });
});
