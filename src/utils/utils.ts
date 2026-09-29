export function ensureElement<T extends HTMLElement>(
  selectorElement: T | string,
  context: HTMLElement = document.body
): T {
  if (typeof selectorElement === 'string') {
    const element = context.querySelector(selectorElement);
    if (!element) {
      throw new Error(`Селектор ${selectorElement} ничего не нашёл`);
    }
    return element as T;
  }
  return selectorElement;
}

export function cloneTemplate<T extends HTMLElement>(
  query: string | HTMLTemplateElement
): T {
  const template = ensureElement<HTMLTemplateElement>(query);
  if (!template.content.firstElementChild) {
    throw new Error(`Шаблон ${query} пуст`);
  }
  return template.content.firstElementChild.cloneNode(true) as T;
}
