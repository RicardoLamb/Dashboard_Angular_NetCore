import { Order } from './../../../shared/order';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sections-orders',
  templateUrl: './sections-orders.component.html',
  styleUrls: ['./sections-orders.component.css']
})
export class SectionsOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer:
      {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2020, 11, 13), fulfilled: new Date(2020, 11, 13)},
    {id: 2, customer:
      {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2020, 11, 13), fulfilled: new Date(2020, 11, 13)},
    {id: 3, customer:
      {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2020, 11, 13), fulfilled: new Date(2020, 11, 13)},
    {id: 4, customer:
      {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2020, 11, 13), fulfilled: new Date(2020, 11, 13)},
    {id: 5, customer:
      {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'}, 
      total: 230, placed: new Date(2020, 11, 13), fulfilled: new Date(2020, 11, 13)},                              
  ];

  ngOnInit(): void {
  }

}
