import {lookUp, mayBeUndefined, doesNotReturnAValue, doesNotLikeUndefinedArg1} from './def.js';

function directImportTest1() {
  lookUp('key', undefined);
}

function directImportTest2() {
  mayBeUndefined(cond()).foo();
}

function directImportTest3() {
  doesNotReturnAValue().foo();
}

function directImportTest4() {
  const a = undefined;
  doesNotLikeUndefinedArg1(a);
}

function directImportTest5() {
  lookUp('key');
}

