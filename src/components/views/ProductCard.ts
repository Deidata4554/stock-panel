import { ensureElement } from '../../utils/utils';
import { Component } from '../base/Component';

interface IProductCard {
  title: string;
  price: number;
  stock: number;
}

export class ProductCard extends Component<object> {
  protected titleElement: HTMLElement;
  protected priceElement: HTMLElement;
  protected stockElement: HTMLElement;

  constructor(container: HTMLElement) {
    super(container);

    this.titleElement = ensureElement<HTMLElement>('.card__title', this.container);
    this.priceElement = ensureElement<HTMLElement>('.card__price', this.container);
    this.stockElement = ensureElement<HTMLElement>('.card__stock', this.container);
  }

  protected set title(value: string) {
    this.titleElement.textContent = value;
  }

  protected set price(value: number) {
    this.priceElement.textContent = `${value} ₽`;
  }

  protected set stock(value: number) {
    this.stockElement.classList.toggle('card__stock_empty', value === 0);
    this.stockElement.textContent = `Остаток: ${value} шт`;
  }
}
