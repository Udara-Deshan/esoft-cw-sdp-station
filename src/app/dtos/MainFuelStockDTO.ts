export class MainFuelStockDTO {
    mfs_id:number;
    status:string;
    available_limit:number;
    requested_limit:number;
    main_stock:number;

  constructor(mfs_id: number, status: string, available_limit: number, requested_limit: number, main_stock: number) {
    this.mfs_id = mfs_id;
    this.status = status;
    this.available_limit = available_limit;
    this.requested_limit = requested_limit;
    this.main_stock = main_stock;
  }
}
