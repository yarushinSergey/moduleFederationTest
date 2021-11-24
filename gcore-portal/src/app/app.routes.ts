import { Routes } from '@angular/router';
import { loadRemoteModule } from "@angular-architects/module-federation";

export const APP_ROUTES: Routes = [
  {
    path: 'testproduct',
    loadChildren: () => loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'gcoretp',
        exposedModule: 'MainModule'
      })
      .then(m => m.MainModule)
  },
];
