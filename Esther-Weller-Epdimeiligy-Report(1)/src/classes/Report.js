class Report {
  static idCounter = 0;

  constructor(startDate, endDate, city, location, patientId) {
    this.id = Report.idCounter++;
    this.city = city;
    this.location = location;
    this.endDate = endDate;
    this.startDate = startDate;
  }
}
