import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GcoreSharedLibraryService {
  private _status: Array<string> = ["Initial"];
  private _http: HttpClient;
  private _freeAPIs: Array<any>;

  constructor() { }

  public get status(): string {
    return this._status.join(";");
  }

  public addStatus(status:string)  {
    this._status.push(status);
  }

  public get freeAPIs(): Array<any>{
    return this._freeAPIs;
  }

  public set freeAPIs(APIs:Array<any>){
    this._freeAPIs = APIs;
  }

  public getHttpClient(): HttpClient {
    return this._http;
  }

  public setHttpClient(http: HttpClient){
    this._http = http;
  }
}
