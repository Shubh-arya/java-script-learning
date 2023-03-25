const iterable = ["aa", "bb", "cc"];
const iterator = iterable[Symbol.iterator]();
while (true) {
  const nextValue = iterator.next();
  if (nextValue.done) {
    break;
  }
  console.log(nextValue.value);
}

for (nextValue of iterator) {
  if (!nextValue) {
    break;
  }
  console.log(nextValue);
}