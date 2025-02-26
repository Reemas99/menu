import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface MenuItem {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm = '';
  total = 0;

  menuItems: MenuItem[] = [
    { name: 'عصير برتقال', price: 10, image: 'juice copy.jpeg' },
    { name: 'بيتزا', price: 35, image: 'pizza copy.jpeg' },
    { name: 'سلطة', price: 15, image: 'salad copy.jpeg' },
    { name: 'باستا', price: 30, image: 'pasta copy.jpeg' },
    { name: 'تشيز كيك', price: 25, image: 'cake.jpeg' },
    { name: 'فلات وايت', price: 15, image: 'coofe.jpeg' },
    { name: 'آيس كريم', price: 18, image: 'ice.jpeg' },  
    { name: 'تراميسو', price: 20, image: 'termico.jpeg' },  
    { name: 'قهوة مثلجة', price: 12, image: 'icde.jpeg' },
    { name: 'ماء', price: 5, image: 'water.jpeg' }             
  
  ];

  cart: MenuItem[] = [];

  get filteredItems(): MenuItem[] {
    return this.menuItems.filter(item =>
      item.name.includes(this.searchTerm)  // الفلتر هنا يبحث في الأسماء
    );
  }

  addToCart(item: MenuItem) {
    this.cart.push(item);
    this.total += item.price;
  }

  removeFromCart(index: number) {
    const item = this.cart[index];
    this.total -= item.price;
    this.cart.splice(index, 1);
  }
}