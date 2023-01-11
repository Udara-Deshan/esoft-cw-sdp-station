export class FuelTokenDTO {
    tid:string;
    vehicleRegNo:string;
    status:string;
    tokenExp:string;
    requestQuota:string;
    fillingTimeAnd:string;
    usernameFk:any;
    pidFk:any;
    fuelStationFk:any;

  constructor(tid: string, vehicleRegNo: string, status: string, tokenExp: string, requestQuota: string,
              fillingTimeAnd: string, usernameFk: any, pidFk: any, fuelStationFk: any) {
    this.tid = tid;
    this.vehicleRegNo = vehicleRegNo;
    this.status = status;
    this.tokenExp = tokenExp;
    this.requestQuota = requestQuota;
    this.fillingTimeAnd = fillingTimeAnd;
    this.usernameFk = usernameFk;
    this.pidFk = pidFk;
    this.fuelStationFk = fuelStationFk;
  }
}
