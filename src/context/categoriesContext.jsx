import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuemnts } from "../utils/firebase/firebase.js";
import SHOP_DATA from "../data/Products.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuemnts();
      setCategoriesMap(categoriesMap);
    };
    getCategories();
  }, []);
  const value = {
    categoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
