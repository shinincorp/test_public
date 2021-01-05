export function lookUp(key, obj) {
  return obj[key];
}

export function mayBeUndefined(c) {
  if (c) {
    return {};
  }
}

export function doesNotReturnAValue() {
  lib.doSomething((c) => {
    return doSomethingElse(e);
  });
}

export function doesNotLikeUndefinedArg1(a) {
  return Object.create(a);
}
