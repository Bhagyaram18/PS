import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface StudentData {
  id: any;
  Name: string;
  Class: string;
  Section: string;
  Subject1: string;
  Subject2: string;
}

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss'],
})
export class Route5Component implements OnInit {
  studentDataFromApi: StudentData[] = [];
  studentData: StudentData[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://retoolapi.dev/5oGdJO/student_data')
      .subscribe((data: any) => {
        this.studentDataFromApi = data;
        this.studentData = data;
      });
  }
  clickCount = 0;

  sortTable(colName: string) {
    switch (colName) {
      case 'Name': {
        this.studentData = [...this.studentDataFromApi];
        this.clickCount++;
        if (this.clickCount === 1) {
          this.studentData.sort((x, y) => {
            let a = x.Name.toUpperCase(),
              b = y.Name.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
          });
        } else if (this.clickCount === 2) {
          this.studentData.sort((x, y) => {
            let a = x.Name.toUpperCase(),
              b = y.Name.toUpperCase();
            return a == b ? 0 : a < b ? 1 : -1;
          });
        } else if (this.clickCount === 3) {
          this.studentData = this.studentDataFromApi;
          this.clickCount = 0;
        }
        break;
      }
      case 'Class': {
        this.studentData = [...this.studentDataFromApi];
        this.clickCount++;
        if (this.clickCount === 1) {
          this.studentData.sort((x, y) => {
            let a = x.Class.toUpperCase(),
              b = y.Class.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
          });
        } else if (this.clickCount === 2) {
          this.studentData.sort((x, y) => {
            let a = x.Class.toUpperCase(),
              b = y.Class.toUpperCase();
            return a == b ? 0 : a < b ? 1 : -1;
          });
        } else if (this.clickCount === 3) {
          this.studentData = this.studentDataFromApi;
          this.clickCount = 0;
        }
        break;
      }
      case 'Section': {
        this.studentData = [...this.studentDataFromApi];
        this.clickCount++;
        if (this.clickCount === 1) {
          this.studentData.sort((x, y) => {
            let a = Number(x.Section),
              b = Number(y.Section);
            return a == b ? 0 : a > b ? 1 : -1;
          });
        } else if (this.clickCount === 2) {
          this.studentData.sort((x, y) => {
            let a = Number(x.Section),
              b = Number(y.Section);
            return a == b ? 0 : a < b ? 1 : -1;
          });
        } else if (this.clickCount === 3) {
          this.studentData = this.studentDataFromApi;
          this.clickCount = 0;
        }
        break;
      }
      case 'Sub1': {
        this.studentData = [...this.studentDataFromApi];
        this.clickCount++;
        if (this.clickCount === 1) {
          this.studentData.sort((x, y) => {
            let a = Number(x.Subject1),
              b = Number(y.Subject1);
            return a == b ? 0 : a > b ? 1 : -1;
          });
        } else if (this.clickCount === 2) {
          this.studentData.sort((x, y) => {
            let a = Number(x.Subject1),
              b = Number(y.Subject1);
            return a == b ? 0 : a < b ? 1 : -1;
          });
        } else if (this.clickCount === 3) {
          this.studentData = this.studentDataFromApi;
          this.clickCount = 0;
        }
        break;
      }
      case 'Sub2': {
        this.studentData = [...this.studentDataFromApi];
        this.clickCount++;
        if (this.clickCount === 1) {
          this.studentData.sort((x, y) => {
            let a = Number(x.Subject2),
              b = Number(y.Subject2);
            return a == b ? 0 : a > b ? 1 : -1;
          });
        } else if (this.clickCount === 2) {
          this.studentData.sort((x, y) => {
            let a = Number(x.Subject2),
              b = Number(y.Subject2);
            return a == b ? 0 : a < b ? 1 : -1;
          });
        } else if (this.clickCount === 3) {
          this.studentData = this.studentDataFromApi;
          this.clickCount = 0;
        }
        break;
      }
      default: {
        this.studentData = this.studentDataFromApi;
        break;
      }
    }
  }
}
