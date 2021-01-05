/*
Both imports have the same file content and therefore hash
As a result we will just build one namedb. This namedb will have the exports only for one of the two
relative paths.
The other import will not work and not resolve.
 */
import {lookUp as lookUp1} from './def.js';
import {lookUp as lookUp2} from './a/def.js';
lookUp1('key', undefined);
lookUp2('key', undefined);

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
