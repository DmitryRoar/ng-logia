import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IProduct {
  id: number;
  name: string;
  composition: string[];
  image: {
    src: string;
  };
}

@Injectable()
export class ProductService {
  menu: IProduct[] = [
    {
      id: 1,
      name: 'Мясная Делюкс',
      composition: [
        'Пепперони',
        'лук',
        'бекон',
        'томатная паста',
        'колбаски',
        'перец',
        'грибы',
        'соус чили',
        'ананасы',
      ],
      image: {
        src: '/assets/images/menu/meet-deluxe.png',
      },
    },
    {
      id: 2,
      name: 'Морская Премиум',
      composition: ['Перец', 'сыр', 'креветки', 'кальмары', 'мидии', 'лосось'],
      image: {
        src: '/assets/images/menu/maritime-deluxe.png',
      },
    },
    {
      id: 3,
      name: 'Бекон и Сосиски',
      composition: ['Бекон', 'сыр', 'сосиски', 'ананас', 'томатная паста'],
      image: {
        src: '/assets/images/menu/bacon-sausage.png',
      },
    },
    {
      id: 4,
      name: 'Куриная Делюкс',
      composition: [
        'Курица',
        'ананас',
        'сыр',
        'пепперони',
        'соус для пиццы',
        'томатная паста',
      ],
      image: {
        src: '/assets/images/menu/chicken-deluxe.png',
      },
    },
    {
      id: 5,
      name: 'Барбекю Премиум',
      composition: [
        'свининна bbq',
        'соус Барбкею',
        'сыр',
        'курица',
        'соус для пиццы',
        'соус чили',
      ],
      image: {
        src: '/assets/images/menu/bbq-deluxe.png',
      },
    },
    {
      id: 6,
      name: 'Пепперони Дабл',
      composition: [
        'пепперони',
        'сыр',
        'колбаса 2 видов: обжаренная и вареная',
      ],
      image: {
        src: '/assets/images/menu/pepperoni-double.png',
      },
    },
    {
      id: 7,
      name: 'Куриное трио',
      composition: [
        'Жареная курицв',
        'тушеная курица',
        'куриные наггетсы',
        'перец',
        'сыр',
        'грибы',
        'соус для пиццы',
      ],
      image: {
        src: '/assets/images/menu/chicken-trio.png',
      },
    },
    {
      id: 8,
      name: 'Сырная',
      composition: [
        'Сыр джюгас',
        'сыр с плесенью',
        'сыр моцарелла',
        'сыр секретный',
      ],
      image: {
        src: '/assets/images/menu/cheese.png',
      },
    },
  ];

  getAll(): Observable<IProduct[]> {
    return new BehaviorSubject(this.menu);
  }
}
