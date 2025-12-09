import { CATEGORIES, PRODUCT_CATEGORIES_MOCK } from "@/constants";
export const getCategoryById = async (id: string) =>
	CATEGORIES.find((category) => category.id === id);

export const getAllCategories = async () => CATEGORIES;

export const getProductsByCategoryName = async (name: string) => PRODUCT_CATEGORIES_MOCK[name];