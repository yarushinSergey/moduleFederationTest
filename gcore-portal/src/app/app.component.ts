import { Component, OnInit } from '@angular/core';
import { GcoreSharedLibraryService } from 'gcore-shared-library';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  private _id;
  public message = "Init";
  constructor(private _gcoreSharedLibraryService: GcoreSharedLibraryService,
              private _http: HttpClient){
    this._gcoreSharedLibraryService.addStatus("AppComponentInitilized");
  }

  ngOnInit() {
    this._gcoreSharedLibraryService.setHttpClient(this._http);

    this._gcoreSharedLibraryService.incomingMessageSent.subscribe((msg:string)=>{
      this.message = msg;
    })

    this._http.get("https://api.publicapis.org/entries").subscribe({
      next: (result:any) => {
        this._gcoreSharedLibraryService.addStatus("AppComponentGotEntries");
        this._gcoreSharedLibraryService.freeAPIs = result?.entries;
      },
      error: (errMsg:any)=>{
        console.error(errMsg);
      }
    });

    this._id = setInterval(() => {
      console.log(this._gcoreSharedLibraryService.status);
    }, 3000);
  }

  public buttonClicked(){
    this._gcoreSharedLibraryService.shellButtonClicked.next("Button clicked!");
  }

  public getTitle(): string{
    return this._gcoreSharedLibraryService.status;
  }

  ngOnDestroy(){
    if (this._id) {
      clearInterval(this._id);
    }
  }
}
