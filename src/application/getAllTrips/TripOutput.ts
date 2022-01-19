export default class TripOutput {
  label: string;
  startDate: string;
  endDate: string;
  total: number;
  id: number;
  
  constructor(id: number, label: string, startDate: string, endDate: string, total: number) {
    this.id = id;
    this.label = label;
    this.startDate = startDate;
    this.endDate = endDate;
    this.total = total;
  }
}