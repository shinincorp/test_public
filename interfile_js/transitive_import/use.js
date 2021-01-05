import * as d from './a/transitive.js'

function directImportTest1() {
  d.lookUp("key", undefined);
}

function directImportTest2() {
  d.mayBeUndefined(cond()).foo();
}

function directImportTest3() {
  d.doesNotReturnAValue().foo();
}

function directImportTest4() {
  const a = undefined;
  d.doesNotLikeUndefinedArg1(a);
}

function directImportTest5() {
  d.lookUp("key");
}
