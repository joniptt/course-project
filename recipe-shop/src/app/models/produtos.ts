import { Mouse } from './mouse.model';
import { Teclado } from './teclado.model';

export class Produtos {
  name: string;
  preco: number;

  mouses?: Mouse = new Mouse();
  teclados?: Teclado = new Teclado();
}
