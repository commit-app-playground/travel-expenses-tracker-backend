export default class Expense {
  sequence: number;
  value: number;
  date: Date;
  description: string;
  idAuthor: number;
  idCategory: number;
  
  constructor(sequence: number = 1, value: number, date: Date = new Date(), description: string, idAuthor: number, idCategory: number) {
    this.sequence = sequence;
    this.value = value;
    this.date = date;
    this.description = description;
    this.idAuthor = idAuthor;
    this.idCategory = idCategory;
  }
}