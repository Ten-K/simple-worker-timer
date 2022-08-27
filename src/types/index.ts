export interface IDate {
  [key: string]: number
}

export interface HTMLElementPlus extends HTMLElement {
  flipUp: Function
  flipDown: Function
  setFront: Function
  setBack: Function
}
