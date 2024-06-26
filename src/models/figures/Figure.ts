import logo from '../../assets/black-king.png'
import { Cell } from "../Cell";
import { Colors } from "../Colors";

export enum FigureNames {
  'FIGURE' = 'Figure',
  'KING' = 'KING',
  'KNIGHT' = 'KNIGHT',
  'PAWN' = 'PAWN',
  'QUEEN' = 'QUEEN',
  'ROOK' = 'ROOK',
  'BISHOP' = 'BISHOP',
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FigureNames.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color)
      return false;
    if (target.figure?.name === FigureNames.KING) {
      console.log(FigureNames.KING)
      console.log(target.figure?.name)
      return false;
    }
    return true;
  }

  moveFigure(target: Cell) {
    // return true
  }
}