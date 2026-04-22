 'use client';
import {  useSearchParams } from 'next/navigation';

export const useProductFilter=()=> {

  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const ratingParam  = searchParams.get('rating');
  const rating = ratingParam ? Number(ratingParam) : null;
  const priceParam = searchParams.get('price');
  let min = null;
  let max = null;

  if (priceParam) {
    const [minStr, maxStr] = priceParam.split('-');
    min = Number(minStr);
    max = Number(maxStr);
  }
   return {
    category,
    rating,
    price: { min, max }
  };
}
