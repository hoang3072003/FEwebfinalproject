import React from 'react';
import ProductCard from './ProductCard';

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  padding: '20px 0'
};

const products = [
  { id: 1, name: 'Mercedes GLC 300 4Matic',price: 103000, image: 'https://mercedes-benz-hanoi.vn/wp-content/uploads/2023/06/Mercedes-glc-300-4matic-3.jpg' },
  { id: 2, name: 'Mercedes-Benz E300 AMG',price: 125000, image: 'https://drive.gianhangvn.com/image/2212013-2212102j29447.jpg' },
  { id: 3, name: 'Toyota Fortuner 2023',price: 64000, image: 'https://cdn.24h.com.vn/upload/3-2023/images/2023-07-14/Gia-xe-Toyota-Fortuner-lan-banh-thang-7-2023-giam-50-le-phi-truoc-ba-22-1689351480-571-width740height493.jpg' },
  { id: 4, name: 'Toyota Camry 2.5q 2023',price: 60000 , image: 'https://static.wixstatic.com/media/b4dcef_e1ed38ba29d9482daae0fede7361e946~mv2.png/v1/fill/w_980,h_588,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/b4dcef_e1ed38ba29d9482daae0fede7361e946~mv2.png' },
  { id: 5, name: 'Porsche 911 Carrera', price: 300000, image: 'https://cdn.arstechnica.net/wp-content/uploads/2020/12/2020-Porsche-911-Carrera-S-manual-2.jpg' },
  { id: 6, name: 'Porsche Panamera', price: 343000,image: 'https://i-vnexpress.vnecdn.net/2020/08/27/2021-Porsche-Panamera-VNE-1-34-8533-2408-1598496416.jpeg' },
  { id: 7, name: 'Hyundai Santa Fe 2023', price: 56000,  image: 'https://file.hstatic.net/200000721757/file/otovui_santafe___2__597d637b63a24a8f9f8121aff8ca7c59_2048x2048.jpg' },
  { id: 8, name: 'Hyundai Accent 1.4 AT', price:24000,  image: 'https://i2-vnexpress.vnecdn.net/2021/09/17/avatarjpg-1631841781.jpg?w=700&h=420&q=100&dpr=1&fit=crop&s=1MdnoIUJ6GFkEUfetEfphg' },
  { id: 9, name: 'Mazda CX-5',price: 43000,  image: 'https://drive.gianhangvn.com/image/new-mazda-cx-5-premium-2453101j28905.jpg' },
  { id: 10, name: 'Mazda 3',price: 32000, image: 'https://i1-vnexpress.vnecdn.net/2021/09/18/Mazda32020VnE993047211573621051jpg-1631963909.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=Ksi2dIeIocGk9Pke5aGnRQ' }
];

const ProductList = () => {
  return (
    <div style={listStyle}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
