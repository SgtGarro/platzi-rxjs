import { Observable, Observer, fromEvent } from "rxjs";

const onMouseMove$ = fromEvent(document, "mousemove") as Observable<MouseEvent>;
const onKeyDown$ = fromEvent(document, "keydown") as Observable<KeyboardEvent>;

const observerMouseMove: Partial<Observer<MouseEvent>> = {
  next: (event) => {
    const { x, y } = event;
    console.log(x, y);
  },
};

const observerKeyDown: Partial<Observer<KeyboardEvent>> = {
  next: (event) => {
    const { key } = event;
    console.log(key);
  },
};

// onMouseMove$.subscribe(observerMouseMove);
onKeyDown$.subscribe(observerKeyDown);
