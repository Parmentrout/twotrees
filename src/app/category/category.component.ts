import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from './category';
import { MatCard } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [MatCard, NgIf],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  @Input() category: Category | null = null;
  @Output() edit = new EventEmitter<Category>();
}
