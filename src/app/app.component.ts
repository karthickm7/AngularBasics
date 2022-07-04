import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss'],
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  name: string = 'karthick';
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'just a test' },
  ];
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBluePrintAdded(bluePrintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'server',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent,
    });
  }
}
