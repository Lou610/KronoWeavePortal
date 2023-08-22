import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { registerLicense } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KronoWeave Portal';


  ngOnInit(): void {
    registerLicense('ORg4AjUWIQA/Gnt2V1hhQlJAfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5bdEdjWn5ZdHVUTmdV');
    initFlowbite();
  }
}
