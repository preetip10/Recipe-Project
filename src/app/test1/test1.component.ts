import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component {
  serverElements = [{type: 'server', name: 'Test Server1', content: 'Test1 content'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
     this.serverElements.push({
       type: 'server',
       name: serverData.serverName,
       content: serverData.serverContent
     });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string}) {
     this.serverElements.push({
       type: 'blueprint',
       name: blueprintData.serverName,
       content: blueprintData.serverContent
     });
   }

}
