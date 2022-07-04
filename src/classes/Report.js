class Report{

    static idCounter=0;

    constructor(startDate, endDate, city, location, patientId){
        this._id = Report.idCounter++;
        this._startDate = startDate;
        this._endDate = endDate;
        this._city = city;
        this._location = location;
        this._patientId = patientId;
    }

    //getters & setters
    get id(){
        return this._id;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        this._startDate = startDate;;
    }
    get endDate(){
        return this._endDate;
    }
    set endDate(endDate){
        this._endDate = endDate;
    }
    get city(){
        return this._city;
    }
    set city(city){
        this._city = city;
    }
    get location(){
        return this._location;
    }
    set location(location){
        return this._location = location;
    }
    get patientId(){
        return this._patientId;
    }
    set patientId(patientId){
        return this._patientId = patientId;
    }
}