export class FuelStationDTO {
  fid:string;
  stationName:string;
  city:string;
  district:string;
  max_limit:string;
  available_limit:string;
  customer_requested_limit:string;
  status:string;
  station_requested_limit:string;
  username_fk:string;


  constructor(fid: string, stationName: string, city: string, district: string, max_limit: string,
              available_limit: string, customer_requested_limit: string, status: string, station_requested_limit: string,
              username_fk: string) {
    this.fid = fid;
    this.stationName = stationName;
    this.city = city;
    this.district = district;
    this.max_limit = max_limit;
    this.available_limit = available_limit;
    this.customer_requested_limit = customer_requested_limit;
    this.status = status;
    this.station_requested_limit = station_requested_limit;
    this.username_fk = username_fk;
  }
}
