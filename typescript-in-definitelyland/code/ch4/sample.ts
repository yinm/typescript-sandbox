interface HTMLBodyElement extends HTMLElement {
  addEventListener(
    type: 'change',
    listener: (this: this, ev: Event) => any,
    useCapture?: boolean
  ): void
  addEventListener(
    type: 'click',
    listener: (this: this, ev: MouseEvent) => any,
    useCapture?: boolean
  ): void
  addEventListener(
    type: 'keypress',
    listener: (this: this, ev: KeyboardEvent) => any,
    useCapture?: boolean
  ): void
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    useCapture?: boolean
  ): void
}
