export function lookUp(key, obj) {
  return obj[key];
}

function fileHashCollisionDefJs() {}

function thisIsNotMinimizedCode(key, obj) {
  return obj[key];
}

function thisIsAlsoNotMinimizedCode(c) {
  if (c) {
    return {};
  }
}

function doSomethingWithThis() {
  lib.doSomething((c) => {
    return doSomething(e);
  });
}

function createAnObjectFromThis(a) {
  return Object.create(a);
}
