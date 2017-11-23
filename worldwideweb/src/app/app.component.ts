import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  fontSize: number = 40;

  headerStyle = {'font-size': (this.fontSize + 'px')};

  handleDoIt(): void {
    this.fontSize = this.fontSize * 1.1;
    if (this.fontSize > 1000) {
      this.fontSize = 40;
    }
    this.updateHeaderStyle(this.fontSize);
  }

  updateHeaderStyle(fontSize: number): void {
    this.headerStyle['font-size'] = fontSize + 'px';
  }

}
