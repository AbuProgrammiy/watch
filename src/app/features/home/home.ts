import { Component } from '@angular/core';
import { WatchCard, WatchModel } from "./components/watch-card/watch-card";

@Component({
  selector: 'app-home',
  imports: [
    WatchCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  protected watches: WatchModel[] = [
    { name: "Classic Silver", description: "Minimalist silver design", price: "25$", imgUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-s11-202509_GEO_US_FMT_WHH?wid=508&hei=472&fmt=jpeg&qlt=90&.v=RGt6QnVpU0piVDZnRHZnWmNNbHB2OTBjZHdHYTQrK3J3cVBweW1TWmNrUHNPK21NTmFtSkpWQ3ZBMFB1WTlMTzltWDc4aXJHcmduU0dwUHg2UmFtWXoyTkNERHVqSk12b05selRrakVBT3RhdGlsQnN1VnlIL253Vk5XcC9NbEM" },
    { name: "Ocean Blue", description: "Blue dial with leather strap", price: "30$", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_lgcs2VurZBoEbeSnAOLqCxhp7ZH_6wG6A&s" },
    { name: "Midnight Black", description: "Elegant all-black finish", price: "28$", imgUrl: "https://www.maximawatches.com/cdn/shop/files/69100CMGY.jpg?v=1739601046" },
    { name: "Rose Gold", description: "Luxury rose gold style", price: "45$", imgUrl: "https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw294e3664/2025/HO25/set_10272025_global_holiday_lp/watches/Watches_LP_carousel_Style_Mens_classic.jpg" },
    { name: "Sport Pro", description: "Durable sporty design", price: "35$", imgUrl: "https://m.media-amazon.com/images/I/61LQq1+UVoL._AC_UY350_.jpg" },
    { name: "Digital X", description: "Modern digital interface", price: "22$", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmZ7cWfJFldg2VFPpX6XjMdBmr2HJXVyE_Gg&s" },
    { name: "Vintage Brown", description: "Classic brown leather", price: "32$", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PdEIqInz45BU4EPwGw9g4_8kQxVlHD6eAw&s" },
    { name: "Steel Edge", description: "Sharp stainless steel look", price: "40$", imgUrl: "https://m.media-amazon.com/images/I/61QeNWSSHaL._AC_SL1001_.jpg" },
    { name: "Carbon Fit", description: "Lightweight carbon body", price: "38$", imgUrl: "https://timex.ph/cdn/shop/files/TW2Y24700.jpg?v=1758511205&width=1080" },
    { name: "Golden Hour", description: "Premium gold finish", price: "50$", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1sK7XkmJoc3zUm39p3bEOFhN1tckCkYcs3Q&s" },
    { name: "Explorer", description: "Built for adventure", price: "42$", imgUrl: "https://cdn.shopify.com/s/files/1/0278/9723/3501/files/Breguet-Type-XX-2.jpg?v=1686159523" },
    { name: "Urban Grey", description: "Modern city style", price: "27$", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JLTLq5V6QFlVmCUROROr5d6ot2If_l7y7w&s" },
    { name: "Night Rider", description: "Dark theme with glow", price: "36$", imgUrl: "https://m.media-amazon.com/images/I/61srikhJ1IL._AC_SL400_.jpg" },
    { name: "Crystal Shine", description: "Glossy polished look", price: "48$", imgUrl: "https://res.garmin.com/subcategory/68178/wearables-Instinct-3.png" },
    { name: "Eco Time", description: "Energy-efficient design", price: "29$", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsS1jCEDXEk-eh119UP-66zeysKqfaFhPp1Q&s" },
    { name: "Smart Lite", description: "Light smart features", price: "33$", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsnMrxXcWQ9qZX-166iSr42NWqfIoJbZJ56A&s" },
    { name: "Bold Red", description: "Eye-catching red accents", price: "26$", imgUrl: "https://preview.redd.it/looking-for-affordable-full-white-watches-for-men-v0-s5mu6yjdz01d1.png?auto=webp&s=3b316812529f8bf5121b2e0146bcfdeba6e69bef" },
    { name: "Arctic White", description: "Clean white aesthetic", price: "31$", imgUrl: "https://i.etsystatic.com/19429186/r/il/ee0192/7175677984/il_570xN.7175677984_2bpn.jpg" },
    { name: "Titan Pro", description: "Strong titanium body", price: "55$", imgUrl: "https://i5.walmartimages.com/seo/Weicam-Unisex-Cool-Watches-Roman-Numerals-Creative-Magnetic-Levitation-Balls-Dial-Waterproof-Quartz-Wrist-Watches-Couple-Watch_e62d3912-5e13-4bcd-8bc6-0a5165ba2a90.52d2e68f5dc1636bd2ca52c386002bf6.jpeg" },
    { name: "Neo Classic", description: "Blend of modern & classic", price: "37$", imgUrl: "https://cdn.strapsco.com/wp-content/uploads/2024/09/most_unique_watches_hamilton_ventura_edge_dune_limited_edition.jpg" }
  ];
}
