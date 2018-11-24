interface HTMLBodyElement extends HTMLElement {
  addEventListener(
    type: 'click',
    listener: (this: this, ev: MouseEvent) => any,
    useCapture?: boolean
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void;
}

let el1: HTMLBodyElement = null as any
el1.addEventListener('click', function() {
  this.innerText = 'Hi!'
})
el1.addEventListener('click', () => {
  // this.innerText = 'Haaaaaaaai!'
})

let el2: HTMLDivElement = null as any
el2.addEventListener('click', function() {
  this.innerText = 'Hi!'
})

export { }
