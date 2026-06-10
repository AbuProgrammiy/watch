import { Injectable } from '@angular/core';
import { WatchModel } from '../../features/home/components/watch-card/watch-card';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public watches: WatchModel[] = [
    { id: 1, name: "SABR", description: "Minimalist, qora rang", longDescription: "SABR brendidan soat. Qora rangli. Ajoyib dizayn", price: "199 ming so'm", imgUrl: ["images/image.png"] },
    { id: 2, name: "SABR silver", description: "Kumush rang", longDescription: "SABR brendidan soat. Kumush rangli. Ajoyib dizayn", price: "199 ming so'm", imgUrl: ["images/silver.jpg"] },
    { id: 3, name: "Kanima", description: "Oq rang", longDescription: "Kanima brendidan soat. Oq rangli. Ajoyib dizayn", price: "99 ming so'm", imgUrl: ["images/kanima.jpg"] },
    { id: 4, name: "UZB Gerb soat", description: "Patriot soat", longDescription: "UZB Gerb soat. Patriot soat. Ajoyib dizayn", price: "99 ming so'm", imgUrl: ["images/uzb.jpg"] },
    { id: 5, name: "Kanima", description: "Qora rang", longDescription: "Kanima brendidan soat. Qora rangli. Ajoyib dizayn", price: "99 ming so'm", imgUrl: ["images/kanima_qora.jpg"] },
  ];
}
