import { PRODUCTS_MOCK } from "@/constants"

export const getProductInfoById = async (id: string) => PRODUCTS_MOCK.find(product => product.id === id);
export const getAllProducts = async () => PRODUCTS_MOCK;