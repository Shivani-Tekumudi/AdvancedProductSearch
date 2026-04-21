import  {useProducts}  from './useProducts';

export const useCategories =() =>{
     const { data, isLoading, isError, error } = useProducts();
     const categories:string[] = Array.isArray(data)
    ? [...new Set(data.map((product) => product.category))]
    : [];

   return {
    categories,
    isLoading,
    isError,
    error,
  };
  
}