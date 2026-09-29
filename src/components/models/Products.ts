import type { IProduct } from '../../types';

export class Products {

  protected items: IProduct[] = [];

  setItems(items: IProduct[]): void {
    this.items = items;
  }

  getItems(): IProduct[] {
    return this.items;
  }

  getItem(id: string): IProduct | undefined {
    return this.items.find((item) => item.id === id);
  }

  receive(id: string, amount: number): void {
    const item = this.getItem(id);
    if (!item) {
      console.log(`Товар с id "${id}" не найден`);
      return;
    }
    if (!Number.isInteger(amount) || amount <= 0) {
      console.log('Количество должно быть положительным целым числом');
      return;
    }
  }

  getOutOfStock(): IProduct[] {
    const items = this.getItems();
    return items.filter(item => item.stock === 0);
  }
}
