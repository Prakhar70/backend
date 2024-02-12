function* fetchNextElement() {
    yield 11;
    yield 12;
}

let iter=fetchNextElement();
console.log(iter.next())