import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
selectedDay: string = '';
days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday'
];

wday = [
    {
	Monday: 'It is monday'
    },
      
    {
	Tuesday: 'It is Tuesday'
    },
    {
	Wednesday: 'It is Wednesday'
    },
    {
	Thursday: 'It is Thursday'
    },
    {
	Friday: 'It is Friday'
    }
    
  ];

  radioChangeHandler (event) {
    
    this.selectedDay = event.target.value;
  }
}

