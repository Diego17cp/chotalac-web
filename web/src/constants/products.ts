import type { FeaturedProduct, Product, ProductCategory } from "@/types";

export const FEATURED_PRODUCTS_MOCK: FeaturedProduct[] = [
    {
        id: "72",
        name: "Crema de Leche",
        imageUrl: "/images/products/crema-de-leche/35/crema-de-leche-35-1.webp",
        presentationName: "35% Grasa"
    },
    {
        id: "46",
        name: "Yogurt Batido",
        imageUrl: "/images/products/yogurt/batido/fresa/yogurt-batido-fresa-1.webp",
        presentationName: "Fresa"
    },
    {
        id: "14",
        name: "Queso de Corte",
        imageUrl: "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-1.webp",
        presentationName: "500 gr"
    },
    {
        id: "70",
        name: "Leche Fresca",
        imageUrl: "/images/products/leche/fresca/pasteurizada/1lt/leche-fresca-pasteurizada-1lt-1.webp",
        presentationName: "Pasteurizada"
    },
    {
        id: "68",
        name: "Mantequilla",
        imageUrl: "/images/products/mantequilla/500gr/mantequilla-500gr-1.webp",
        presentationName: "500 gr"
    }
]

export const PRODUCT_CATEGORIES_MOCK: Record<string, ProductCategory[]> = {
    quesos: [
        {
            name: "Queso Suizo",
            presentations: [
                {
                    id: "1",
                    name: "3.5 kg",
                    imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
                },
                {
                    id: "2",
                    name: "1 kg",
                    imageUrl: "/images/products/queso/suizo/1kg/queso-suizo-1kg-1.webp"
                },
                {
                    id: "3",
                    name: "500 gr",
                    imageUrl: "/images/products/queso/suizo/500gr/queso-suizo-500gr-1.webp"
                },
                {
                    id: "4",
                    name: "250 gr",
                    imageUrl: "/images/products/queso/suizo/250gr/queso-suizo-250gr-1.webp"
                }
            ]
        },
        {
            name: "Queso Suizo Laminado",
            presentations: [
                {
                    id: "5",
                    name: "500 gr",
                    imageUrl: "/images/products/queso/suizo-laminado/500gr/queso-suizo-laminado-500gr-1.webp"
                },
                {
                    id: "6",
                    name: "250 gr",
                    imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
                }
            ]
        },
        {
            name: "Queso Suizo con Orégano",
            presentations: [
                {
                    id: "7",
                    name: "3.5 kg",
                    imageUrl: "/images/products/queso/suizo-con-oregano/3.5kg/queso-suizo-con-oregano-3.5kg-1.webp"
                },
                {
                    id: "8",
                    name: "1 kg",
                    imageUrl: "/images/products/queso/suizo-con-oregano/1kg/queso-suizo-con-oregano-1kg-1.webp"
                },
                {
                    id: "9",
                    name: "500 gr",
                    imageUrl: "/images/products/queso/suizo-con-oregano/500gr/queso-suizo-con-oregano-500gr-1.webp"
                },
                {
                    id: "10",
                    name: "250 gr",
                    imageUrl: "/images/products/queso/suizo-con-oregano/250gr/queso-suizo-con-oregano-250gr-1.webp"
                },
                {
                    id: "11",
                    name: "Redondo 500 gr",
                    imageUrl: "/images/products/queso/suizo-con-oregano-redondo/500gr/queso-suizo-con-oregano-redondo-500gr-1.webp"
                }
            ]
        },
        {
            name: "Queso de Corte",
            presentations: [
                {
                    id: "12",
                    name: "3.5 kg",
                    imageUrl: "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-1.webp"
                },
                {
                    id: "13",
                    name: "1 kg",
                    imageUrl: "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp"
                },
                {
                    id: "14",
                    name: "500 gr",
                    imageUrl: "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-1.webp"
                },
                {
                    id: "15",
                    name: "250 gr",
                    imageUrl: "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-1.webp"
                }
            ]
        },
        {
            name: "Queso Fresco",
            presentations: [
                {
                    id: "16",
                    name: "3.5 kg",
                    imageUrl: "/images/products/queso/fresco/3.5kg/queso-fresco-3.5kg-1.webp"
                },
                {
                    id: "17",
                    name: "1 kg",
                    imageUrl: "/images/products/queso/fresco/1kg/queso-fresco-1kg-1.webp"
                },
                {
                    id: "18",
                    name: "500 gr",
                    imageUrl: "/images/products/queso/fresco/500gr/queso-fresco-500gr-1.webp"
                },
                {
                    id: "19",
                    name: "250 gr",
                    imageUrl: "/images/products/queso/fresco/250gr/queso-fresco-250gr-1.webp"
                }
            ]
        },
        {
            name: "Queso Dambo",
            presentations: [
                {
                    id: "20",
                    name: "3.5 kg",
                    imageUrl: "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-1.webp"
                },
                {
                    id: "21",
                    name: "1 kg",
                    imageUrl: "/images/products/queso/dambo/1kg/queso-dambo-1kg-1.webp"
                },
                {
                    id: "22",
                    name: "500 gr",
                    imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
                },
                {
                    id: "23",
                    name: "250 gr",
                    imageUrl: "/images/products/queso/dambo/250gr/queso-dambo-250gr-1.webp"
                }
            ]
        },
        {
            name: "Queso Dambo Laminado",
            presentations: [
                {
                    id: "24",
                    name: "500 gr",
                    imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
                },
                {
                    id: "25",
                    name: "250 gr",
                    imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
                }
            ]
        },
        {
            name: "Queso Mantecoso",
            presentations: [
                {
                    id: "26",
                    name: "1 kg",
                    imageUrl: "/images/products/queso/mantecoso/1kg/queso-mantecoso-1kg-1.webp"
                },
                {
                    id: "27",
                    name: "500 gr",
                    imageUrl: "/images/products/queso/mantecoso/500gr/queso-mantecoso-500gr-1.webp"
                },
                {
                    id: "28",
                    name: "250 gr",
                    imageUrl: "/images/products/queso/mantecoso/250gr/queso-mantecoso-250gr-1.webp"
                }
            ]
        },
        {
            name: "Queso Edam",
            presentations: [
                {
                    id: "29",
                    name: "3.5 kg",
                    imageUrl: "/images/products/queso/edam/3.5kg/queso-edam-3.5kg-1.webp"
                },
                {
                    id: "30",
                    name: "Laminado 500 gr",
                    imageUrl: "/images/products/queso/edam/500gr/queso-edam-laminado-500gr-1.webp",
                },
                {
                    id: "31",
                    name: "Laminado 250 gr",
                    imageUrl: "/images/products/queso/edam/250gr/queso-edam-laminado-250gr-1.webp"
                }
            ]
        },
        {
            name: "Queso Parmesano",
            presentations: [
                {
                    id: "32",
                    name: "Para Rallar 250 gr",
                    imageUrl: "/images/products/queso/parmesano/para-rallar/250gr/queso-parmesano-para-rallar-250gr-1.webp"
                },
                {
                    id: "33",
                    name: "Rallado 200 gr",
                    imageUrl: "/images/products/queso/parmesano/rallado/200gr/queso-parmesano-rallado-200gr-1.webp"
                }
            ]
        },
        {
            name: "Queso Mozzarella",
            presentations: [
                {
                    id: "34",
                    name: "Con Sal 2 kg",
                    imageUrl: "/images/products/queso/mozzarella/2kg/queso-mozzarella-2kg-1.webp"
                },
                {
                    id: "35",
                    name: "Paquete 5 kg",
                    imageUrl: "/images/products/queso/mozzarella/5kg/queso-mozzarella-paquete-5kg-1.webp"
                },
                {
                    id: "36",
                    name: "Sin Sal 250 gr",
                    imageUrl: "/images/products/queso/mozzarella/250gr/queso-mozzarella-250gr-1.webp"
                }
            ]
        },
        {
            name: "Otros Quesos",
            presentations: [
                {
                    id: "37",
                    name: "Quesillo 800 gr",
                    imageUrl: "/images/products/queso/otros/quesillo/800gr/quesillo-800gr-1.webp"
                },
                {
                    id: "38",
                    name: "Queso Paria 800 gr",
                    imageUrl: "/images/products/queso/otros/paria/800gr/queso-paria-800gr-1.webp"
                },
                {
                    id: "39",
                    name: "Queso Ricotta 250 gr",
                    imageUrl: "/images/products/queso/otros/ricotta/250gr/queso-ricotta-250gr-1.webp"
                },
                {
                    id: "40",
                    name: "Queso Ricotta 500 gr",
                    imageUrl: "/images/products/queso/otros/ricotta/500gr/queso-ricotta-500gr-1.webp"
                }
            ]
        }
    ],
    yogurt: [
        {
            name: "Yogurt Batido",
            presentations: [
                {
                    id: "41",
                    name: "Natural",
                    imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
                },
                {
                    id: "42",
                    name: "Natural sin azúcar",
                    imageUrl: "/images/products/yogurt/batido/natural-sin-azucar/yogurt-batido-natural-sin-azucar-1.webp"
                },
                {
                    id: "43",
                    name: "Piña",
                    imageUrl: "/images/products/yogurt/batido/pinia/yogurt-batido-pinia-1.webp"
                },
                {
                    id: "44",
                    name: "Vainilla",
                    imageUrl: "/images/products/yogurt/batido/vainilla/yogurt-batido-vainilla-1.webp"
                },
                {
                    id: "45",
                    name: "Lúcuma",
                    imageUrl: "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-1.webp"
                },
                {
                    id: "46",
                    name: "Fresa",
                    imageUrl: "/images/products/yogurt/batido/fresa/yogurt-batido-fresa-1.webp"
                },
                {
                    id: "47",
                    name: "Durazno",
                    imageUrl: "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-1.webp"
                },
                {
                    id: "48",
                    name: "Higo",
                    imageUrl: "/images/products/yogurt/batido/higo/yogurt-batido-higo-1.webp"
                },
                {
                    id: "49",
                    name: "Guanábana",
                    imageUrl: "/images/products/yogurt/batido/guanabana/yogurt-batido-guanabana-1.webp"
                }
            ]
        },
        {
            name: "Yogurt Frutado Grande",
            presentations: [
                {
                    id: "50",
                    name: "Higo",
                    imageUrl: "/images/products/yogurt/frutado/grande/higo/yogurt-frutado-grande-higo-1.webp"
                },
                {
                    id: "53",
                    name: "Mango",
                    imageUrl: "/images/products/yogurt/frutado/grande/mango/yogurt-frutado-grande-mango-1.webp"
                },
                {
                    id: "56",
                    name: "Arándano",
                    imageUrl: "/images/products/yogurt/frutado/grande/arandano/yogurt-frutado-grande-arandano-1.webp"
                },
                {
                    id: "59",
                    name: "Fresa",
                    imageUrl: "/images/products/yogurt/frutado/grande/fresa/yogurt-frutado-grande-fresa-1.webp"
                }
            ]
        },
        {
            name: "Yogurt Frutado Pequeño",
            presentations: [
                {
                    id: "51",
                    name: "Higo",
                    imageUrl: "/images/products/yogurt/frutado/pequeno/higo/yogurt-frutado-pequeno-higo-1.webp"
                },
                {
                    id: "54",
                    name: "Mango",
                    imageUrl: "/images/products/yogurt/frutado/pequeno/mango/yogurt-frutado-pequeno-mango-1.webp"
                },
                {
                    id: "57",
                    name: "Arándano",
                    imageUrl: "/images/products/yogurt/frutado/pequeno/arandano/yogurt-frutado-pequeno-arandano-1.webp"
                },
                {
                    id: "60",
                    name: "Fresa",
                    imageUrl: "/images/products/yogurt/frutado/pequeno/fresa/yogurt-frutado-pequeno-fresa-1.webp"
                }
            ]
        },
        {
            name: "Yogurt Frutado Cuchareable",
            presentations: [
                {
                    id: "52",
                    name: "Higo",
                    imageUrl: "/images/products/yogurt/frutado/cuchareable/higo/yogurt-frutado-cuchareable-higo-1.webp"
                },
                {
                    id: "55",
                    name: "Mango",
                    imageUrl: "/images/products/yogurt/frutado/cuchareable/mango/yogurt-frutado-cuchareable-mango-1.webp"
                },
                {
                    id: "58",
                    name: "Arándano",
                    imageUrl: "/images/products/yogurt/frutado/cuchareable/arandano/yogurt-frutado-cuchareable-arandano-1.webp"
                },
                {
                    id: "61",
                    name: "Fresa",
                    imageUrl: "/images/products/yogurt/frutado/cuchareable/fresa/yogurt-frutado-cuchareable-fresa-1.webp"
                }
            ]
        },
        {
            name: "Yogurt Griego Natural",
            presentations: [
                {
                    id: "62",
                    name: "1 kg",
                    imageUrl: "/images/products/yogurt/griego/natural/1kg/yogurt-griego-natural-1kg-1.webp"
                },
                {
                    id: "63",
                    name: "500 gr",
                    imageUrl: "/images/products/yogurt/griego/natural/500gr/yogurt-griego-natural-500gr-1.webp"
                },
                {
                    id: "64",
                    name: "250 gr",
                    imageUrl: "/images/products/yogurt/griego/natural/250gr/yogurt-griego-natural-250gr-1.webp"
                }
            ]
        },
        {
            name: "Yogurt Griego Frutado",
            presentations: [
                {
                    id: "65",
                    name: "Fresa",
                    imageUrl: "/images/products/yogurt/griego/frutado/fresa/yogurt-griego-fresa-1.webp"
                },
                {
                    id: "66",
                    name: "Arándano",
                    imageUrl: "/images/products/yogurt/griego/frutado/arandano/yogurt-griego-arandano-1.webp"
                },
                {
                    id: "67",
                    name: "Aguaymanto",
                    imageUrl: "/images/products/yogurt/griego/frutado/aguaymanto/yogurt-griego-aguaymanto-1.webp"
                }
            ]
        }
    ],
    mantequilla: [
        {
            name: "Mantequilla",
            presentations: [
                {
                    id: "68",
                    name: "500 gr",
                    imageUrl: "/images/products/mantequilla/500gr/mantequilla-500gr-1.webp"
                },
                {
                    id: "69",
                    name: "250 gr",
                    imageUrl: "/images/products/mantequilla/250gr/mantequilla-250gr-1.webp"
                }
            ]
        }
    ],
    leche: [
        {
            name: "Leche Fresca Pasteurizada",
            presentations: [
                {
                    id: "70",
                    name: "1 lt",
                    imageUrl: "/images/products/leche/fresca/pasteurizada/1lt/leche-fresca-pasteurizada-1lt-1.webp"
                }
            ]
        }
    ],
    "crema-de-leche": [
        {
            name: "Crema de Leche",
            presentations: [
                {
                    id: "71",
                    name: "50% Grasa",
                    imageUrl: "/images/products/crema-de-leche/50/crema-de-leche-50-1.webp"
                },
                {
                    id: "72",
                    name: "35% Grasa",
                    imageUrl: "/images/products/crema-de-leche/35/crema-de-leche-35-1.webp"
                }
            ]
        }
    ]
}

export const PRODUCTS_MOCK: Product[] = [
    {
        id: "1",
        name: "Queso Suizo",
        meditionUnit: "3.5 kg",
        imagesUrls: [
            "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp",
            "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-2.webp",
            "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-3.webp",
            "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-4.webp"
        ],
        description: "Queso Suizo de 3.5kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo"
            },
            {
                name: "Contenido",
                value: "3.5 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Ligero contenido de sal.
            Su textura es firme, elástica y fácil de cortar, rebanar o rallar.
            Su color es amarillo pálido y su aroma es suave y agradable.
            Es rico en proteínas, calcio y grasas saturadas, lo que lo hace nutritivo y energético.
            No contiene suero visible y debe mantenerse refrigerado para conservar su sabor y textura.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente, ideal para preparaciones calientes o frías."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, frutos secos y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque de sabor y consistencia."
            },
            {
                title: "Fondue y gratinados",
                content: "Se funde uniformemente, perfecto para platos al horno."
            }
        ],
        relatedProducts: [
            {
                id: "2",
                name: "Queso Suizo",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/suizo/1kg/queso-suizo-1kg-1.webp"
            },
            {
                id: "3",
                name: "Queso Suizo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo/500gr/queso-suizo-500gr-1.webp"
            },
            {
                id: "4",
                name: "Queso Suizo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo/250gr/queso-suizo-250gr-1.webp"
            },
            {
                id: "5",
                name: "Queso Suizo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo-laminado/500gr/queso-suizo-laminado-500gr-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "2",
        name: "Queso Suizo",
        meditionUnit: "1 kg",
        imagesUrls: [
            "/images/products/queso/suizo/1kg/queso-suizo-1kg-1.webp",
            "/images/products/queso/suizo/1kg/queso-suizo-1kg-2.webp",
            "/images/products/queso/suizo/1kg/queso-suizo-1kg-3.webp",
            "/images/products/queso/suizo/1kg/queso-suizo-1kg-4.webp"
        ],
        description: "Queso Suizo de 1kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo"
            },
            {
                name: "Contenido",
                value: "1 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Ligero contenido de sal.
            Su textura es firme, elástica y fácil de cortar, rebanar o rallar.
            Su color es amarillo pálido y su aroma es suave y agradable.
            Es rico en proteínas, calcio y grasas saturadas, lo que lo hace nutritivo y energético.
            No contiene suero visible y debe mantenerse refrigerado para conservar su sabor y textura.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente, ideal para preparaciones calientes o frías."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, frutos secos y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque de sabor y consistencia."
            },
            {
                title: "Fondue y gratinados",
                content: "Se funde uniformemente, perfecto para platos al horno."
            }
        ],
        relatedProducts: [
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            },
            {
                id: "3",
                name: "Queso Suizo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo/500gr/queso-suizo-500gr-1.webp"
            },
            {
                id: "4",
                name: "Queso Suizo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo/250gr/queso-suizo-250gr-1.webp"
            },
            {
                id: "5",
                name: "Queso Suizo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo-laminado/500gr/queso-suizo-laminado-500gr-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "3",
        name: "Queso Suizo",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/suizo/500gr/queso-suizo-500gr-1.webp",
            "/images/products/queso/suizo/500gr/queso-suizo-500gr-2.webp",
            "/images/products/queso/suizo/500gr/queso-suizo-500gr-3.webp",
            "/images/products/queso/suizo/500gr/queso-suizo-500gr-4.webp"
        ],
        description: "Queso Suizo de 500gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Ligero contenido de sal.
            Su textura es firme, elástica y fácil de cortar, rebanar o rallar.
            Su color es amarillo pálido y su aroma es suave y agradable.
            Es rico en proteínas, calcio y grasas saturadas, lo que lo hace nutritivo y energético.
            No contiene suero visible y debe mantenerse refrigerado para conservar su sabor y textura.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente, ideal para preparaciones calientes o frías."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, frutos secos y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque de sabor y consistencia."
            },
            {
                title: "Fondue y gratinados",
                content: "Se funde uniformemente, perfecto para platos al horno."
            }
        ],
        relatedProducts: [
            {
                id: "2",
                name: "Queso Suizo",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/suizo/1kg/queso-suizo-1kg-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            },
            {
                id: "4",
                name: "Queso Suizo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo/250gr/queso-suizo-250gr-1.webp"
            },
            {
                id: "5",
                name: "Queso Suizo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo-laminado/500gr/queso-suizo-laminado-500gr-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "4",
        name: "Queso Suizo",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/suizo/250gr/queso-suizo-250gr-1.webp",
            "/images/products/queso/suizo/250gr/queso-suizo-250gr-2.webp",
            "/images/products/queso/suizo/250gr/queso-suizo-250gr-3.webp",
            "/images/products/queso/suizo/250gr/queso-suizo-250gr-4.webp"
        ],
        description: "Queso Suizo de 250gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Ligero contenido de sal.
            Su textura es firme, elástica y fácil de cortar, rebanar o rallar.
            Su color es amarillo pálido y su aroma es suave y agradable.
            Es rico en proteínas, calcio y grasas saturadas, lo que lo hace nutritivo y energético.
            No contiene suero visible y debe mantenerse refrigerado para conservar su sabor y textura.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente, ideal para preparaciones calientes o frías."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, frutos secos y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque de sabor y consistencia."
            },
            {
                title: "Fondue y gratinados",
                content: "Se funde uniformemente, perfecto para platos al horno."
            }
        ],
        relatedProducts: [
            {
                id: "2",
                name: "Queso Suizo",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/suizo/1kg/queso-suizo-1kg-1.webp"
            },
            {
                id: "3",
                name: "Queso Suizo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo/500gr/queso-suizo-500gr-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            },
            {
                id: "5",
                name: "Queso Suizo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo-laminado/500gr/queso-suizo-laminado-500gr-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "5",
        name: "Queso Suizo Laminado",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/suizo-laminado/500gr/queso-suizo-laminado-500gr-1.webp",
            "/images/products/queso/suizo-laminado/500gr/queso-suizo-laminado-500gr-2.webp",
            "/images/products/queso/suizo-laminado/500gr/queso-suizo-laminado-500gr-3.webp",
            "/images/products/queso/suizo-laminado/500gr/queso-suizo-laminado-500gr-4.webp"
        ],
        description: `Queso Suizo Laminado de 500gr. Peso de cada lámina aprox. 20gr`,
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Ligero contenido de sal.
            Su textura es firme, elástica y fácil de cortar, rebanar o rallar.
            Su color es amarillo pálido y su aroma es suave y agradable.
            Es rico en proteínas, calcio y grasas saturadas, lo que lo hace nutritivo y energético.
            No contiene suero visible y debe mantenerse refrigerado para conservar su sabor y textura.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente, ideal para preparaciones calientes o frías."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, frutos secos y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque de sabor y consistencia."
            },
            {
                title: "Fondue y gratinados",
                content: "Se funde uniformemente, perfecto para platos al horno."
            }
        ],
        relatedProducts: [
            {
                id: "2",
                name: "Queso Suizo",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/suizo/1kg/queso-suizo-1kg-1.webp"
            },
            {
                id: "3",
                name: "Queso Suizo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo/500gr/queso-suizo-500gr-1.webp"
            },
            {
                id: "4",
                name: "Queso Suizo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo/250gr/queso-suizo-250gr-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "6",
        name: "Queso Suizo Laminado",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp",
            "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-2.webp",
            "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-3.webp",
            "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-4.webp"
        ],
        description: `Queso Suizo Laminado de 250gr. Peso de cada lámina aprox. 20gr`,
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Ligero contenido de sal.
            Su textura es firme, elástica y fácil de cortar, rebanar o rallar.
            Su color es amarillo pálido y su aroma es suave y agradable.
            Es rico en proteínas, calcio y grasas saturadas, lo que lo hace nutritivo y energético.
            No contiene suero visible y debe mantenerse refrigerado para conservar su sabor y textura.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente, ideal para preparaciones calientes o frías."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, frutos secos y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque de sabor y consistencia."
            },
            {
                title: "Fondue y gratinados",
                content: "Se funde uniformemente, perfecto para platos al horno."
            }
        ],
        relatedProducts: [
            {
                id: "2",
                name: "Queso Suizo",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/suizo/1kg/queso-suizo-1kg-1.webp"
            },
            {
                id: "3",
                name: "Queso Suizo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo/500gr/queso-suizo-500gr-1.webp"
            },
            {
                id: "4",
                name: "Queso Suizo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo/250gr/queso-suizo-250gr-1.webp"
            },
            {
                id: "5",
                name: "Queso Suizo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo-laminado/500gr/queso-suizo-laminado-500gr-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            }
        ]
    },
    {
        id: "7",
        name: "Queso Suizo con Orégano",
        meditionUnit: "3.5 kg",
        imagesUrls: [
            "/images/products/queso/suizo-con-oregano/3.5kg/queso-suizo-con-oregano-3.5kg-1.webp",
            "/images/products/queso/suizo-con-oregano/3.5kg/queso-suizo-con-oregano-3.5kg-2.webp",
            "/images/products/queso/suizo-con-oregano/3.5kg/queso-suizo-con-oregano-3.5kg-3.webp",
            "/images/products/queso/suizo-con-oregano/3.5kg/queso-suizo-con-oregano-3.5kg-4.webp"
        ],
        description: "Queso Suizo con Orégano de 3.5kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo con Orégano"
            },
            {
                name: "Contenido",
                value: "3.5 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal normal, que equilibra su sabor natural con un toque aromático.
            Prensado, de textura firme y elástica, fácil de cortar o rallar.
            Enriquecido con orégano natural, que aporta aroma, frescura y un sabor distintivo.
            Color amarillo pálido y aroma lácteo con notas herbales.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Ideal para preparaciones calientes o frías, con un toque aromático."
            },
            {
                title: "Pizzas y lasañas",
                content: "Se funde fácilmente aportando un sabor y aroma irresistibles."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, panes artesanales y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque mediterráneo y perfumado."
            },
        ],
        relatedProducts: [
            {
                id: "8",
                name: "Queso Suizo con Orégano",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/suizo-con-oregano/1kg/queso-suizo-con-oregano-1kg-1.webp"
            },
            {
                id: "9",
                name: "Queso Suizo con Orégano",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano/500gr/queso-suizo-con-oregano-500gr-1.webp"
            },
            {
                id: "10",
                name: "Queso Suizo con Orégano",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano/250gr/queso-suizo-con-oregano-250gr-1.webp"
            },
            {
                id: "11",
                name: "Queso Suizo con Orégano",
                presentationName: "Redondo 500 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano-redondo/500gr/queso-suizo-con-oregano-redondo-500gr-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            }
        ]
    },
    {
        id: "8",
        name: "Queso Suizo con Orégano",
        meditionUnit: "1 kg",
        imagesUrls: [
            "/images/products/queso/suizo-con-oregano/1kg/queso-suizo-con-oregano-1kg-1.webp",
            "/images/products/queso/suizo-con-oregano/1kg/queso-suizo-con-oregano-1kg-2.webp",
            "/images/products/queso/suizo-con-oregano/1kg/queso-suizo-con-oregano-1kg-3.webp",
            "/images/products/queso/suizo-con-oregano/1kg/queso-suizo-con-oregano-1kg-4.webp"
        ],
        description: "Queso Suizo con Orégano de 1kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo con Orégano"
            },
            {
                name: "Contenido",
                value: "1 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal normal, que equilibra su sabor natural con un toque aromático.
            Prensado, de textura firme y elástica, fácil de cortar o rallar.
            Enriquecido con orégano natural, que aporta aroma, frescura y un sabor distintivo.
            Color amarillo pálido y aroma lácteo con notas herbales.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Ideal para preparaciones calientes o frías, con un toque aromático."
            },
            {
                title: "Pizzas y lasañas",
                content: "Se funde fácilmente aportando un sabor y aroma irresistibles."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, panes artesanales y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque mediterráneo y perfumado."
            },
        ],
        relatedProducts: [
            {
                id: "7",
                name: "Queso Suizo con Orégano",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo-con-oregano/3.5kg/queso-suizo-con-oregano-3.5kg-1.webp"
            },
            {
                id: "9",
                name: "Queso Suizo con Orégano",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano/500gr/queso-suizo-con-oregano-500gr-1.webp"
            },
            {
                id: "10",
                name: "Queso Suizo con Orégano",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano/250gr/queso-suizo-con-oregano-250gr-1.webp"
            },
            {
                id: "11",
                name: "Queso Suizo con Orégano",
                presentationName: "Redondo 500 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano-redondo/500gr/queso-suizo-con-oregano-redondo-500gr-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            }
        ]
    },
    {
        id: "9",
        name: "Queso Suizo con Orégano",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/suizo-con-oregano/500gr/queso-suizo-con-oregano-500gr-1.webp",
            "/images/products/queso/suizo-con-oregano/500gr/queso-suizo-con-oregano-500gr-2.webp",
            "/images/products/queso/suizo-con-oregano/500gr/queso-suizo-con-oregano-500gr-3.webp",
            "/images/products/queso/suizo-con-oregano/500gr/queso-suizo-con-oregano-500gr-4.webp"
        ],
        description: "Queso Suizo con Orégano de 500gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo con Orégano"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal normal, que equilibra su sabor natural con un toque aromático.
            Prensado, de textura firme y elástica, fácil de cortar o rallar.
            Enriquecido con orégano natural, que aporta aroma, frescura y un sabor distintivo.
            Color amarillo pálido y aroma lácteo con notas herbales.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Ideal para preparaciones calientes o frías, con un toque aromático."
            },
            {
                title: "Pizzas y lasañas",
                content: "Se funde fácilmente aportando un sabor y aroma irresistibles."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, panes artesanales y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque mediterráneo y perfumado."
            },
        ],
        relatedProducts: [
            {
                id: "8",
                name: "Queso Suizo con Orégano",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/suizo-con-oregano/1kg/queso-suizo-con-oregano-1kg-1.webp"
            },
            {
                id: "7",
                name: "Queso Suizo con Orégano",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo-con-oregano/3.5kg/queso-suizo-con-oregano-3.5kg-1.webp"
            },
            {
                id: "10",
                name: "Queso Suizo con Orégano",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano/250gr/queso-suizo-con-oregano-250gr-1.webp"
            },
            {
                id: "11",
                name: "Queso Suizo con Orégano",
                presentationName: "Redondo 500 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano-redondo/500gr/queso-suizo-con-oregano-redondo-500gr-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            }
        ]
    },
    {
        id: "10",
        name: "Queso Suizo con Orégano",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/suizo-con-oregano/250gr/queso-suizo-con-oregano-250gr-1.webp",
            "/images/products/queso/suizo-con-oregano/250gr/queso-suizo-con-oregano-250gr-2.webp",
            "/images/products/queso/suizo-con-oregano/250gr/queso-suizo-con-oregano-250gr-3.webp",
            "/images/products/queso/suizo-con-oregano/250gr/queso-suizo-con-oregano-250gr-4.webp"
        ],
        description: "Queso Suizo con Orégano de 250gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo con Orégano"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal normal, que equilibra su sabor natural con un toque aromático.
            Prensado, de textura firme y elástica, fácil de cortar o rallar.
            Enriquecido con orégano natural, que aporta aroma, frescura y un sabor distintivo.
            Color amarillo pálido y aroma lácteo con notas herbales.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Ideal para preparaciones calientes o frías, con un toque aromático."
            },
            {
                title: "Pizzas y lasañas",
                content: "Se funde fácilmente aportando un sabor y aroma irresistibles."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, panes artesanales y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque mediterráneo y perfumado."
            },
        ],
        relatedProducts: [
            {
                id: "8",
                name: "Queso Suizo con Orégano",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/suizo-con-oregano/1kg/queso-suizo-con-oregano-1kg-1.webp"
            },
            {
                id: "9",
                name: "Queso Suizo con Orégano",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano/500gr/queso-suizo-con-oregano-500gr-1.webp"
            },
            {
                id: "7",
                name: "Queso Suizo con Orégano",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo-con-oregano/3.5kg/queso-suizo-con-oregano-3.5kg-1.webp"
            },
            {
                id: "11",
                name: "Queso Suizo con Orégano",
                presentationName: "Redondo 500 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano-redondo/500gr/queso-suizo-con-oregano-redondo-500gr-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            }
        ]
    },
    {
        id: "11",
        name: "Queso Suizo con Orégano Redondo",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/suizo-con-oregano-redondo/500gr/queso-suizo-con-oregano-redondo-500gr-1.webp",
            "/images/products/queso/suizo-con-oregano-redondo/500gr/queso-suizo-con-oregano-redondo-500gr-2.webp",
            "/images/products/queso/suizo-con-oregano-redondo/500gr/queso-suizo-con-oregano-redondo-500gr-3.webp",
            "/images/products/queso/suizo-con-oregano-redondo/500gr/queso-suizo-con-oregano-redondo-500gr-4.webp"
        ],
        description: "Queso Suizo con Orégano Redondo de 500gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Suizo con Orégano"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal normal, que equilibra su sabor natural con un toque aromático.
            Prensado, de textura firme y elástica, fácil de cortar o rallar.
            Enriquecido con orégano natural, que aporta aroma, frescura y un sabor distintivo.
            Color amarillo pálido y aroma lácteo con notas herbales.`,
        uses: [
            {
                title: "Sándwiches y hamburguesas",
                content: "Ideal para preparaciones calientes o frías, con un toque aromático."
            },
            {
                title: "Pizzas y lasañas",
                content: "Se funde fácilmente aportando un sabor y aroma irresistibles."
            },
            {
                title: "Tablas de quesos y aperitivos",
                content: "Combina muy bien con frutas, panes artesanales y vino blanco o tinto"
            },
            {
                title: "Ensaladas",
                content: "Añade un toque mediterráneo y perfumado."
            },
        ],
        relatedProducts: [
            {
                id: "8",
                name: "Queso Suizo con Orégano",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/suizo-con-oregano/1kg/queso-suizo-con-oregano-1kg-1.webp"
            },
            {
                id: "9",
                name: "Queso Suizo con Orégano",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano/500gr/queso-suizo-con-oregano-500gr-1.webp"
            },
            {
                id: "10",
                name: "Queso Suizo con Orégano",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-con-oregano/250gr/queso-suizo-con-oregano-250gr-1.webp"
            },
            {
                id: "7",
                name: "Queso Suizo con Orégano",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo-con-oregano/3.5kg/queso-suizo-con-oregano-3.5kg-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            }
        ]
    },
    {
        id: "12",
        name: "Queso de Corte",
        meditionUnit: "3.5 kg",
        imagesUrls: [
            "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-1.webp",
            "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-2.webp",
            "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-3.webp",
            "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-4.webp"
        ],
        description: "Queso de Corte de 3.5kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso de Corte"
            },
            {
                name: "Contenido",
                value: "3.5 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal equilibrado, ideal para realzar su sabor natural.
            Molido y prensado, con textura suave y uniforme.
            Poca presencia de suero, lo que le da una consistencia más firme.
            Elaborado con leche entera pasteurizada.
            Alto en grasas saturadas, lo que aporta cremosidad e intensidad al sabor.`,
        uses: [
            {
                title: "Acompañamiento",
                content: "Perfecto para acompañar en desayunos o lonches."
            },
            {
                title: "Ensaladas",
                content: "Agrega suavidad y un toque salado equilibrado."
            },
            {
                title: "Bocaditos",
                content: "Ideal para tablas o aperitivos."
            },
            {
                title: "Salsa Huancaína",
                content: "Ingrediente clásico que aporta cremosidad."
            },
            {
                title: "Entre otros aperitivos",
                content: "Versátil y delicioso en múltiples preparaciones."
            },
        ],
        relatedProducts: [
            {
                id: "13",
                name: "Queso de Corte",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp"
            },
            {
                id: "14",
                name: "Queso de Corte",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-1.webp"
            },
            {
                id: "15",
                name: "Queso de Corte",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "13",
        name: "Queso de Corte",
        meditionUnit: "1 kg",
        imagesUrls: [
            "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp",
            "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-2.webp",
            "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-3.webp",
            "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-4.webp"
        ],
        description: "Queso de Corte de 1kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso de Corte"
            },
            {
                name: "Contenido",
                value: "1 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal equilibrado, ideal para realzar su sabor natural.
            Molido y prensado, con textura suave y uniforme.
            Poca presencia de suero, lo que le da una consistencia más firme.
            Elaborado con leche entera pasteurizada.
            Alto en grasas saturadas, lo que aporta cremosidad e intensidad al sabor.`,
        uses: [
            {
                title: "Acompañamiento",
                content: "Perfecto para acompañar en desayunos o lonches."
            },
            {
                title: "Ensaladas",
                content: "Agrega suavidad y un toque salado equilibrado."
            },
            {
                title: "Bocaditos",
                content: "Ideal para tablas o aperitivos."
            },
            {
                title: "Salsa Huancaína",
                content: "Ingrediente clásico que aporta cremosidad."
            },
            {
                title: "Entre otros aperitivos",
                content: "Versátil y delicioso en múltiples preparaciones."
            },
        ],
        relatedProducts: [
            {
                id: "12",
                name: "Queso de Corte",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-1.webp"
            },
            {
                id: "14",
                name: "Queso de Corte",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-1.webp"
            },
            {
                id: "15",
                name: "Queso de Corte",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "14",
        name: "Queso de Corte",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-1.webp",
            "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-2.webp",
            "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-3.webp",
            "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-4.webp"
        ],
        description: "Queso de Corte de 500gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso de Corte"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal equilibrado, ideal para realzar su sabor natural.
            Molido y prensado, con textura suave y uniforme.
            Poca presencia de suero, lo que le da una consistencia más firme.
            Elaborado con leche entera pasteurizada.
            Alto en grasas saturadas, lo que aporta cremosidad e intensidad al sabor.`,
        uses: [
            {
                title: "Acompañamiento",
                content: "Perfecto para acompañar en desayunos o lonches."
            },
            {
                title: "Ensaladas",
                content: "Agrega suavidad y un toque salado equilibrado."
            },
            {
                title: "Bocaditos",
                content: "Ideal para tablas o aperitivos."
            },
            {
                title: "Salsa Huancaína",
                content: "Ingrediente clásico que aporta cremosidad."
            },
            {
                title: "Entre otros aperitivos",
                content: "Versátil y delicioso en múltiples preparaciones."
            },
        ],
        relatedProducts: [
            {
                id: "13",
                name: "Queso de Corte",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp"
            },
            {
                id: "12",
                name: "Queso de Corte",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-1.webp"
            },
            {
                id: "15",
                name: "Queso de Corte",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "15",
        name: "Queso de Corte",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-1.webp",
            "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-2.webp",
            "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-3.webp",
            "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-4.webp"
        ],
        description: "Queso de Corte de 250gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso de Corte"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal equilibrado, ideal para realzar su sabor natural.
            Molido y prensado, con textura suave y uniforme.
            Poca presencia de suero, lo que le da una consistencia más firme.
            Elaborado con leche entera pasteurizada.
            Alto en grasas saturadas, lo que aporta cremosidad e intensidad al sabor.`,
        uses: [
            {
                title: "Acompañamiento",
                content: "Perfecto para acompañar en desayunos o lonches."
            },
            {
                title: "Ensaladas",
                content: "Agrega suavidad y un toque salado equilibrado."
            },
            {
                title: "Bocaditos",
                content: "Ideal para tablas o aperitivos."
            },
            {
                title: "Salsa Huancaína",
                content: "Ingrediente clásico que aporta cremosidad."
            },
            {
                title: "Entre otros aperitivos",
                content: "Versátil y delicioso en múltiples preparaciones."
            },
        ],
        relatedProducts: [
            {
                id: "13",
                name: "Queso de Corte",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp"
            },
            {
                id: "14",
                name: "Queso de Corte",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-1.webp"
            },
            {
                id: "12",
                name: "Queso de Corte",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-1.webp"
            },
            {
                id: "1",
                name: "Queso Suizo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/suizo/3.5kg/queso-suizo-3.5kg-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "16",
        name: "Queso Fresco",
        meditionUnit: "3.5 kg",
        imagesUrls: [
            "/images/products/queso/fresco/3.5kg/queso-fresco-3.5kg-1.webp",
            "/images/products/queso/fresco/3.5kg/queso-fresco-3.5kg-2.webp",
            "/images/products/queso/fresco/3.5kg/queso-fresco-3.5kg-3.webp",
        ],
        description: "Queso Fresco de 3.5kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Fresco"
            },
            {
                name: "Contenido",
                value: "3.5 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal equilibrado, ideal para realzar su sabor natural.
            Molido y prensado, con textura suave y uniforme.
            Poca presencia de suero, lo que le da una consistencia más firme.
            Elaborado con leche entera pasteurizada.
            Alto en grasas saturadas, lo que aporta cremosidad e intensidad al sabor.`,
        uses: [
            {
                title: "Acompañamiento",
                content: "Perfecto para acompañar en desayunos o lonches."
            },
            {
                title: "Bocaditos",
                content: "Ideal para tablas o aperitivos."
            },
            {
                title: "Salsa Huancaína",
                content: "Ingrediente clásico que aporta cremosidad."
            },
            {
                title: "Ensaladas",
                content: "Versátil y delicioso en múltiples preparaciones."
            },
        ],
        relatedProducts: [
            {
                id: "17",
                name: "Queso Fresco",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/fresco/1kg/queso-fresco-1kg-1.webp"
            },
            {
                id: "18",
                name: "Queso Fresco",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/fresco/500gr/queso-fresco-500gr-1.webp"
            },
            {
                id: "19",
                name: "Queso Fresco",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/fresco/250gr/queso-fresco-250gr-1.webp"
            },
            {
                id: "12",
                name: "Queso de Corte",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-1.webp"
            },
            {
                id: "13",
                name: "Queso de Corte",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp"
            }
        ]
    },
    {
        id: "17",
        name: "Queso Fresco",
        meditionUnit: "1 kg",
        imagesUrls: [
            "/images/products/queso/fresco/1kg/queso-fresco-1kg-1.webp",
            "/images/products/queso/fresco/1kg/queso-fresco-1kg-2.webp",
            "/images/products/queso/fresco/1kg/queso-fresco-1kg-3.webp",
            "/images/products/queso/fresco/1kg/queso-fresco-1kg-4.webp"
        ],
        description: "Queso Fresco de 1kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Fresco"
            },
            {
                name: "Contenido",
                value: "1 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal equilibrado, ideal para realzar su sabor natural.
            Molido y prensado, con textura suave y uniforme.
            Poca presencia de suero, lo que le da una consistencia más firme.
            Elaborado con leche entera pasteurizada.
            Alto en grasas saturadas, lo que aporta cremosidad e intensidad al sabor.`,
        uses: [
            {
                title: "Acompañamiento",
                content: "Perfecto para acompañar en desayunos o lonches."
            },
            {
                title: "Bocaditos",
                content: "Ideal para tablas o aperitivos."
            },
            {
                title: "Salsa Huancaína",
                content: "Ingrediente clásico que aporta cremosidad."
            },
            {
                title: "Ensaladas",
                content: "Versátil y delicioso en múltiples preparaciones."
            },
        ],
        relatedProducts: [
            {
                id: "16",
                name: "Queso Fresco",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/fresco/3.5kg/queso-fresco-3.5kg-1.webp"
            },
            {
                id: "18",
                name: "Queso Fresco",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/fresco/500gr/queso-fresco-500gr-1.webp"
            },
            {
                id: "19",
                name: "Queso Fresco",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/fresco/250gr/queso-fresco-250gr-1.webp"
            },
            {
                id: "12",
                name: "Queso de Corte",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-1.webp"
            },
            {
                id: "13",
                name: "Queso de Corte",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp"
            }
        ]
    },
    {
        id: "18",
        name: "Queso Fresco",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/fresco/500gr/queso-fresco-500gr-1.webp",
            "/images/products/queso/fresco/500gr/queso-fresco-500gr-2.webp",
            "/images/products/queso/fresco/500gr/queso-fresco-500gr-3.webp",
            "/images/products/queso/fresco/500gr/queso-fresco-500gr-4.webp"
        ],
        description: "Queso Fresco de 500gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Fresco"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal equilibrado, ideal para realzar su sabor natural.
            Molido y prensado, con textura suave y uniforme.
            Poca presencia de suero, lo que le da una consistencia más firme.
            Elaborado con leche entera pasteurizada.
            Alto en grasas saturadas, lo que aporta cremosidad e intensidad al sabor.`,
        uses: [
            {
                title: "Acompañamiento",
                content: "Perfecto para acompañar en desayunos o lonches."
            },
            {
                title: "Bocaditos",
                content: "Ideal para tablas o aperitivos."
            },
            {
                title: "Salsa Huancaína",
                content: "Ingrediente clásico que aporta cremosidad."
            },
            {
                title: "Ensaladas",
                content: "Versátil y delicioso en múltiples preparaciones."
            },
        ],
        relatedProducts: [
            {
                id: "17",
                name: "Queso Fresco",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/fresco/1kg/queso-fresco-1kg-1.webp"
            },
            {
                id: "16",
                name: "Queso Fresco",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/fresco/3.5kg/queso-fresco-3.5kg-1.webp"
            },
            {
                id: "19",
                name: "Queso Fresco",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/fresco/250gr/queso-fresco-250gr-1.webp"
            },
            {
                id: "12",
                name: "Queso de Corte",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-1.webp"
            },
            {
                id: "13",
                name: "Queso de Corte",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp"
            }
        ]
    },
    {
        id: "19",
        name: "Queso Fresco",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/fresco/250gr/queso-fresco-250gr-1.webp",
        ],
        description: "Queso Fresco de 250gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Fresco"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Punto de sal equilibrado, ideal para realzar su sabor natural.
            Molido y prensado, con textura suave y uniforme.
            Poca presencia de suero, lo que le da una consistencia más firme.
            Elaborado con leche entera pasteurizada.
            Alto en grasas saturadas, lo que aporta cremosidad e intensidad al sabor.`,
        uses: [
            {
                title: "Acompañamiento",
                content: "Perfecto para acompañar en desayunos o lonches."
            },
            {
                title: "Bocaditos",
                content: "Ideal para tablas o aperitivos."
            },
            {
                title: "Salsa Huancaína",
                content: "Ingrediente clásico que aporta cremosidad."
            },
            {
                title: "Ensaladas",
                content: "Versátil y delicioso en múltiples preparaciones."
            },
        ],
        relatedProducts: [
            {
                id: "17",
                name: "Queso Fresco",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/fresco/1kg/queso-fresco-1kg-1.webp"
            },
            {
                id: "18",
                name: "Queso Fresco",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/fresco/500gr/queso-fresco-500gr-1.webp"
            },
            {
                id: "16",
                name: "Queso Fresco",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/fresco/3.5kg/queso-fresco-3.5kg-1.webp"
            },
            {
                id: "12",
                name: "Queso de Corte",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/de-corte/3.5kg/queso-de-corte-3.5kg-1.webp"
            },
            {
                id: "13",
                name: "Queso de Corte",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp"
            }
        ]
    },
    {
        id: "20",
        name: "Queso Dambo",
        meditionUnit: "3.5 kg",
        imagesUrls: [
            "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-1.webp",
            "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-2.webp",
            "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-3.webp",
            "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-4.webp"
        ],
        description: "Queso Dambo de 3.5kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Dambo"
            },
            {
                name: "Contenido",
                value: "3.5 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura semidura pero cremosa, fácil de cortar y fundir.
            Sabor suave y ligeramente salado, con notas lácteas agradables.
            Alto en grasas saturadas y sodio, lo que potencia su sabor y cremosidad.
            Ideal para quienes disfrutan de un queso versátil, equilibrado y de sabor delicado.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente y realza el sabor."
            },
            {
                title: "Platos al horno",
                content: "Ideal para gratinar o fundir."
            },
            {
                title: "Ensaladas",
                content: "Aporta textura y un toque salado equilibrado."
            },
            {
                title: "Bocaditos y pastas",
                content: "Delicioso en múltiples combinaciones."
            }
        ],
        relatedProducts: [
            {
                id: "21",
                name: "Queso Dambo",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/dambo/1kg/queso-dambo-1kg-1.webp"
            },
            {
                id: "22",
                name: "Queso Dambo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
            },
            {
                id: "23",
                name: "Queso Dambo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo/250gr/queso-dambo-250gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "21",
        name: "Queso Dambo",
        meditionUnit: "1 kg",
        imagesUrls: [
            "/images/products/queso/dambo/1kg/queso-dambo-1kg-1.webp",
            "/images/products/queso/dambo/1kg/queso-dambo-1kg-2.webp",
            "/images/products/queso/dambo/1kg/queso-dambo-1kg-3.webp",
            "/images/products/queso/dambo/1kg/queso-dambo-1kg-4.webp"
        ],
        description: "Queso Dambo de 1kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Dambo"
            },
            {
                name: "Contenido",
                value: "1 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura semidura pero cremosa, fácil de cortar y fundir.
            Sabor suave y ligeramente salado, con notas lácteas agradables.
            Alto en grasas saturadas y sodio, lo que potencia su sabor y cremosidad.
            Ideal para quienes disfrutan de un queso versátil, equilibrado y de sabor delicado.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente y realza el sabor."
            },
            {
                title: "Platos al horno",
                content: "Ideal para gratinar o fundir."
            },
            {
                title: "Ensaladas",
                content: "Aporta textura y un toque salado equilibrado."
            },
            {
                title: "Bocaditos y pastas",
                content: "Delicioso en múltiples combinaciones."
            }
        ],
        relatedProducts: [
            {
                id: "20",
                name: "Queso Dambo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-1.webp"
            },
            {
                id: "22",
                name: "Queso Dambo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
            },
            {
                id: "23",
                name: "Queso Dambo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo/250gr/queso-dambo-250gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "22",
        name: "Queso Dambo",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp",
            "/images/products/queso/dambo/500gr/queso-dambo-500gr-2.webp",
            "/images/products/queso/dambo/500gr/queso-dambo-500gr-3.webp",
            "/images/products/queso/dambo/500gr/queso-dambo-500gr-4.webp"
        ],
        description: "Queso Dambo de 500gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Dambo"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura semidura pero cremosa, fácil de cortar y fundir.
            Sabor suave y ligeramente salado, con notas lácteas agradables.
            Alto en grasas saturadas y sodio, lo que potencia su sabor y cremosidad.
            Ideal para quienes disfrutan de un queso versátil, equilibrado y de sabor delicado.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente y realza el sabor."
            },
            {
                title: "Platos al horno",
                content: "Ideal para gratinar o fundir."
            },
            {
                title: "Ensaladas",
                content: "Aporta textura y un toque salado equilibrado."
            },
            {
                title: "Bocaditos y pastas",
                content: "Delicioso en múltiples combinaciones."
            }
        ],
        relatedProducts: [
            {
                id: "21",
                name: "Queso Dambo",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/dambo/1kg/queso-dambo-1kg-1.webp"
            },
            {
                id: "20",
                name: "Queso Dambo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-1.webp"
            },
            {
                id: "23",
                name: "Queso Dambo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo/250gr/queso-dambo-250gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "23",
        name: "Queso Dambo",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/dambo/250gr/queso-dambo-250gr-1.webp",
            "/images/products/queso/dambo/250gr/queso-dambo-250gr-2.webp",
            "/images/products/queso/dambo/250gr/queso-dambo-250gr-3.webp",
            "/images/products/queso/dambo/250gr/queso-dambo-250gr-4.webp"
        ],
        description: "Queso Dambo de 250gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Dambo"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura semidura pero cremosa, fácil de cortar y fundir.
            Sabor suave y ligeramente salado, con notas lácteas agradables.
            Alto en grasas saturadas y sodio, lo que potencia su sabor y cremosidad.
            Ideal para quienes disfrutan de un queso versátil, equilibrado y de sabor delicado.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente y realza el sabor."
            },
            {
                title: "Platos al horno",
                content: "Ideal para gratinar o fundir."
            },
            {
                title: "Ensaladas",
                content: "Aporta textura y un toque salado equilibrado."
            },
            {
                title: "Bocaditos y pastas",
                content: "Delicioso en múltiples combinaciones."
            }
        ],
        relatedProducts: [
            {
                id: "21",
                name: "Queso Dambo",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/dambo/1kg/queso-dambo-1kg-1.webp"
            },
            {
                id: "22",
                name: "Queso Dambo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
            },
            {
                id: "20",
                name: "Queso Dambo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "24",
        name: "Queso Dambo Laminado",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp",
            "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-2.webp",
            "/images/products/queso/dambo-laminado/queso-dambo-laminado.webp",
        ],
        description: "Queso Dambo Laminado de 500gr. Peso de cada lamina aprox. 20 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Dambo"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura semidura pero cremosa, fácil de cortar y fundir.
            Sabor suave y ligeramente salado, con notas lácteas agradables.
            Alto en grasas saturadas y sodio, lo que potencia su sabor y cremosidad.
            Ideal para quienes disfrutan de un queso versátil, equilibrado y de sabor delicado.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente y realza el sabor."
            },
            {
                title: "Platos al horno",
                content: "Ideal para gratinar o fundir."
            },
            {
                title: "Ensaladas",
                content: "Aporta textura y un toque salado equilibrado."
            },
            {
                title: "Bocaditos y pastas",
                content: "Delicioso en múltiples combinaciones."
            }
        ],
        relatedProducts: [
            {
                id: "21",
                name: "Queso Dambo",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/dambo/1kg/queso-dambo-1kg-1.webp"
            },
            {
                id: "22",
                name: "Queso Dambo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
            },
            {
                id: "23",
                name: "Queso Dambo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo/250gr/queso-dambo-250gr-1.webp"
            },
            {
                id: "20",
                name: "Queso Dambo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "25",
        name: "Queso Dambo Laminado",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp",
            "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-2.webp",
            "/images/products/queso/dambo-laminado/queso-dambo-laminado.webp",
        ],
        description: "Queso Dambo Laminado de 250gr. Peso de cada lamina aprox. 20 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Dambo"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura semidura pero cremosa, fácil de cortar y fundir.
            Sabor suave y ligeramente salado, con notas lácteas agradables.
            Alto en grasas saturadas y sodio, lo que potencia su sabor y cremosidad.
            Ideal para quienes disfrutan de un queso versátil, equilibrado y de sabor delicado.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente y realza el sabor."
            },
            {
                title: "Platos al horno",
                content: "Ideal para gratinar o fundir."
            },
            {
                title: "Ensaladas",
                content: "Aporta textura y un toque salado equilibrado."
            },
            {
                title: "Bocaditos y pastas",
                content: "Delicioso en múltiples combinaciones."
            }
        ],
        relatedProducts: [
            {
                id: "21",
                name: "Queso Dambo",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/dambo/1kg/queso-dambo-1kg-1.webp"
            },
            {
                id: "22",
                name: "Queso Dambo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
            },
            {
                id: "23",
                name: "Queso Dambo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo/250gr/queso-dambo-250gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            },
            {
                id: "20",
                name: "Queso Dambo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-1.webp"
            }
        ]
    },
    {
        id: "26",
        name: "Queso Mantecoso",
        meditionUnit: "1 kg",
        imagesUrls: [
            "/images/products/queso/mantecoso/1kg/queso-mantecoso-1kg-1.webp",
            "/images/products/queso/mantecoso/1kg/queso-mantecoso-1kg-2.webp",
            "/images/products/queso/mantecoso/1kg/queso-mantecoso-1kg-3.webp",
            "/images/products/queso/mantecoso/1kg/queso-mantecoso-1kg-4.webp"
        ],
        description: "Queso Mantecoso de 1kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Mantecoso"
            },
            {
                name: "Contenido",
                value: "1 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Sabor intenso y lácteo, en el que se aprecia claramente el gusto natural de la leche.
            Sin presencia de suero, con una textura suave y ligeramente untuosa.
            Alto en grasas saturadas, lo que le da su característico sabor mantecoso y su capacidad de fundirse fácilmente.
            Ideal para quienes buscan un queso con personalidad y textura cremosa.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Tequeños",
                content: "Su textura fundente lo hace ideal para rellenos."
            },
            {
                title: "Entre otros aperitivos",
                content: "Perfecto para gratinar o disfrutar en preparaciones calientes."
            },
        ],
        relatedProducts: [
            {
                id: "27",
                name: "Queso Mantecoso",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/mantecoso/500gr/queso-mantecoso-500gr-1.webp"
            },
            {
                id: "28",
                name: "Queso Mantecoso",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/mantecoso/250gr/queso-mantecoso-250gr-1.webp"
            },
            {
                id: "20",
                name: "Queso Dambo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            }
        ]
    },
    {
        id: "27",
        name: "Queso Mantecoso",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/mantecoso/500gr/queso-mantecoso-500gr-1.webp",
            "/images/products/queso/mantecoso/500gr/queso-mantecoso-500gr-2.webp",
            "/images/products/queso/mantecoso/500gr/queso-mantecoso-500gr-3.webp",
            "/images/products/queso/mantecoso/500gr/queso-mantecoso-500gr-4.webp"
        ],
        description: "Queso Mantecoso de 500gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Mantecoso"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Sabor intenso y lácteo, en el que se aprecia claramente el gusto natural de la leche.
            Sin presencia de suero, con una textura suave y ligeramente untuosa.
            Alto en grasas saturadas, lo que le da su característico sabor mantecoso y su capacidad de fundirse fácilmente.
            Ideal para quienes buscan un queso con personalidad y textura cremosa.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Tequeños",
                content: "Su textura fundente lo hace ideal para rellenos."
            },
            {
                title: "Entre otros aperitivos",
                content: "Perfecto para gratinar o disfrutar en preparaciones calientes."
            },
        ],
        relatedProducts: [
            {
                id: "26",
                name: "Queso Mantecoso",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/mantecoso/1kg/queso-mantecoso-1kg-1.webp"
            },
            {
                id: "28",
                name: "Queso Mantecoso",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/mantecoso/250gr/queso-mantecoso-250gr-1.webp"
            },
            {
                id: "20",
                name: "Queso Dambo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            }
        ]
    },
    {
        id: "28",
        name: "Queso Mantecoso",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/mantecoso/250gr/queso-mantecoso-250gr-1.webp",
            "/images/products/queso/mantecoso/250gr/queso-mantecoso-250gr-2.webp",
            "/images/products/queso/mantecoso/250gr/queso-mantecoso-250gr-3.webp",
            "/images/products/queso/mantecoso/250gr/queso-mantecoso-250gr-4.webp"
        ],
        description: "Queso Mantecoso de 250gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Mantecoso"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Sabor intenso y lácteo, en el que se aprecia claramente el gusto natural de la leche.
            Sin presencia de suero, con una textura suave y ligeramente untuosa.
            Alto en grasas saturadas, lo que le da su característico sabor mantecoso y su capacidad de fundirse fácilmente.
            Ideal para quienes buscan un queso con personalidad y textura cremosa.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Tequeños",
                content: "Su textura fundente lo hace ideal para rellenos."
            },
            {
                title: "Entre otros aperitivos",
                content: "Perfecto para gratinar o disfrutar en preparaciones calientes."
            },
        ],
        relatedProducts: [
            {
                id: "27",
                name: "Queso Mantecoso",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/mantecoso/500gr/queso-mantecoso-500gr-1.webp"
            },
            {
                id: "26",
                name: "Queso Mantecoso",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/mantecoso/1kg/queso-mantecoso-1kg-1.webp"
            },
            {
                id: "20",
                name: "Queso Dambo",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/dambo/3.5kg/queso-dambo-3.5kg-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            }
        ]
    },
    {
        id: "29",
        name: "Queso Edam",
        meditionUnit: "3.5 kg",
        imagesUrls: [
            "/images/products/queso/edam/3.5kg/queso-edam-3.5kg-1.webp",
            "/images/products/queso/edam/3.5kg/queso-edam-3.5kg-2.webp",
            "/images/products/queso/edam/3.5kg/queso-edam-3.5kg-3.webp",
            "/images/products/queso/edam/3.5kg/queso-edam-3.5kg-4.webp"
        ],
        description: "Queso Edam de 3.5kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Edam"
            },
            {
                name: "Contenido",
                value: "3.5 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura semidura pero cremosa, fácil de cortar y fundir.
            Sabor suave y ligeramente salado, con notas lácteas agradables.
            Alto en grasas saturadas y sodio, lo que potencia su sabor y cremosidad.
            Ideal para quienes disfrutan de un queso versátil, equilibrado y de sabor delicado.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente y realza el sabor."
            },
            {
                title: "Platos al horno",
                content: "Ideal para gratinar o fundir."
            },
            {
                title: "Ensaladas",
                content: "Aporta textura y un toque salado equilibrado."
            },
            {
                title: "Bocaditos y aperitivos",
                content: "Delicioso en múltiples combinaciones."
            }
        ],
        relatedProducts: [
            {
                id: "30",
                name: "Queso Edam Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/edam/500gr/queso-edam-laminado-500gr-1.webp"
            },
            {
                id: "31",
                name: "Queso Edam Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/edam/250gr/queso-edam-laminado-250gr-1.webp"
            },
            {
                id: "23",
                name: "Queso Dambo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "30",
        name: "Queso Edam Laminado",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/edam/500gr/queso-edam-laminado-500gr-1.webp",
            "/images/products/queso/edam/500gr/queso-edam-laminado-500gr-2.webp",
            "/images/products/queso/edam/queso-edam-laminado.webp",
        ],
        description: "Queso Edam Laminado de 500gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Edam"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura semidura pero cremosa, fácil de cortar y fundir.
            Sabor suave y ligeramente salado, con notas lácteas agradables.
            Alto en grasas saturadas y sodio, lo que potencia su sabor y cremosidad.
            Ideal para quienes disfrutan de un queso versátil, equilibrado y de sabor delicado.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente y realza el sabor."
            },
            {
                title: "Platos al horno",
                content: "Ideal para gratinar o fundir."
            },
            {
                title: "Ensaladas",
                content: "Aporta textura y un toque salado equilibrado."
            },
            {
                title: "Bocaditos y aperitivos",
                content: "Delicioso en múltiples combinaciones."
            }
        ],
        relatedProducts: [
            {
                id: "29",
                name: "Queso Edam",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/edam/3.5kg/queso-edam-3.5kg-1.webp"
            },
            {
                id: "31",
                name: "Queso Edam Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/edam/250gr/queso-edam-laminado-250gr-1.webp"
            },
            {
                id: "23",
                name: "Queso Dambo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "31",
        name: "Queso Edam Laminado",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/edam/250gr/queso-edam-laminado-250gr-1.webp",
            "/images/products/queso/edam/250gr/queso-edam-laminado-250gr-2.webp",
            "/images/products/queso/edam/queso-edam-laminado.webp",
        ],
        description: "Queso Edam Laminado de 250gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Edam"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura semidura pero cremosa, fácil de cortar y fundir.
            Sabor suave y ligeramente salado, con notas lácteas agradables.
            Alto en grasas saturadas y sodio, lo que potencia su sabor y cremosidad.
            Ideal para quienes disfrutan de un queso versátil, equilibrado y de sabor delicado.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Sándwiches y hamburguesas",
                content: "Se derrite fácilmente y realza el sabor."
            },
            {
                title: "Platos al horno",
                content: "Ideal para gratinar o fundir."
            },
            {
                title: "Ensaladas",
                content: "Aporta textura y un toque salado equilibrado."
            },
            {
                title: "Bocaditos y aperitivos",
                content: "Delicioso en múltiples combinaciones."
            }
        ],
        relatedProducts: [
            {
                id: "30",
                name: "Queso Edam Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/edam/500gr/queso-edam-laminado-500gr-1.webp"
            },
            {
                id: "29",
                name: "Queso Edam",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/edam/3.5kg/queso-edam-3.5kg-1.webp"
            },
            {
                id: "23",
                name: "Queso Dambo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "32",
        name: "Queso Parmesano Para Rallar",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/parmesano/para-rallar/250gr/queso-parmesano-para-rallar-250gr-1.webp",
            "/images/products/queso/parmesano/para-rallar/250gr/queso-parmesano-para-rallar-250gr-2.webp",
            "/images/products/queso/parmesano/para-rallar/250gr/queso-parmesano-para-rallar-250gr-3.webp",
            "/images/products/queso/parmesano/para-rallar/250gr/queso-parmesano-para-rallar-250gr-4.webp"
        ],
        description: "Queso Parmesano Para Rallar de 250gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Parmesano"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura dura y quebradiza, con un sabor intenso y lácteo que resalta el auténtico gusto de la leche.
            Elaborado con leche entera de vaca y sometido a un proceso prolongado de maduración, que potencia su aroma y carácter. 
            Ideal para quienes disfrutan de quesos con personalidad y un toque gourmet.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Lasañas y pastas",
                content: "Esencial para gratinar o dar sabor."
            },
            {
                title: "Pizzas",
                content: "Aporta un toque intenso y aromático."
            },
            {
                title: "Salsas",
                content: "Ingrediente clave en la salsa Alfredo y otras preparaciones cremosas."
            },
            {
                title: "Ensaladas",
                content: "Se espolvorea sobre verduras para realzar el sabor."
            },
            {
                title: "Sopas y cremas",
                content: "Ideal para dar cuerpo y textura."
            }
        ],
        relatedProducts: [
            {
                id: "33",
                name: "Queso Parmesano Rallado",
                presentationName: "200 gr",
                imageUrl: "/images/products/queso/parmesano/rallado/200gr/queso-parmesano-rallado-200gr-1.webp"
            },
            {
                id: "30",
                name: "Queso Edam Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/edam/500gr/queso-edam-laminado-500gr-1.webp"
            },
            {
                id: "22",
                name: "Queso Dambo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
            },
            {
                id: "23",
                name: "Queso Dambo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo/250gr/queso-dambo-250gr-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "33",
        name: "Queso Parmesano Rallado",
        meditionUnit: "200 gr",
        imagesUrls: [
            "/images/products/queso/parmesano/rallado/200gr/queso-parmesano-rallado-200gr-1.webp",
            "/images/products/queso/parmesano/rallado/200gr/queso-parmesano-rallado-200gr-2.webp",
            "/images/products/queso/parmesano/rallado/200gr/queso-parmesano-rallado-200gr-3.webp",
            "/images/products/queso/parmesano/rallado/200gr/queso-parmesano-rallado-200gr-4.webp"
        ],
        description: "Queso Parmesano Rallado de 200gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Parmesano"
            },
            {
                name: "Contenido",
                value: "200 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura dura y quebradiza, con un sabor intenso y lácteo que resalta el auténtico gusto de la leche.
            Elaborado con leche entera de vaca y sometido a un proceso prolongado de maduración, que potencia su aroma y carácter. 
            Ideal para quienes disfrutan de quesos con personalidad y un toque gourmet.`,
        uses: [
            {
                title: "Tablas de queso",
                content: "Combina perfectamente con frutas, nueces y embutidos."
            },
            {
                title: "Lasañas y pastas",
                content: "Esencial para gratinar o dar sabor."
            },
            {
                title: "Pizzas",
                content: "Aporta un toque intenso y aromático."
            },
            {
                title: "Salsas",
                content: "Ingrediente clave en la salsa Alfredo y otras preparaciones cremosas."
            },
            {
                title: "Ensaladas",
                content: "Se espolvorea sobre verduras para realzar el sabor."
            },
            {
                title: "Sopas y cremas",
                content: "Ideal para dar cuerpo y textura."
            }
        ],
        relatedProducts: [
            {
                id: "32",
                name: "Queso Parmesano Para Rallar",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/parmesano/para-rallar/250gr/queso-parmesano-para-rallar-250gr-1.webp"
            },
            {
                id: "30",
                name: "Queso Edam Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/edam/500gr/queso-edam-laminado-500gr-1.webp"
            },
            {
                id: "22",
                name: "Queso Dambo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo/500gr/queso-dambo-500gr-1.webp"
            },
            {
                id: "23",
                name: "Queso Dambo",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo/250gr/queso-dambo-250gr-1.webp"
            },
            {
                id: "25",
                name: "Queso Dambo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/dambo-laminado/250gr/queso-dambo-laminado-250gr-1.webp"
            }
        ]
    },
    {
        id: "34",
        name: "Queso Mozzarella con Sal 2 kg",
        meditionUnit: "2 kg",
        imagesUrls: [
            "/images/products/queso/mozzarella/2kg/queso-mozzarella-2kg-1.webp",
            "/images/products/queso/mozzarella/2kg/queso-mozzarella-2kg-2.webp",
            "/images/products/queso/mozzarella/2kg/queso-mozzarella-2kg-3.webp",
            "/images/products/queso/mozzarella/2kg/queso-mozzarella-2kg-4.webp"
        ],
        description: "Queso Mozzarella con Sal de 2 kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Mozzarella"
            },
            {
                name: "Contenido",
                value: "2 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura suave, elástica y blanda, ideal para fundir.
            Sabor delicado y ligeramente lácteo, que se combina fácilmente con otros ingredientes.
            Alto en grasas saturadas, lo que le da cremosidad y una excelente capacidad de derretirse.
            Reconocido por su versatilidad y su papel esencial en la cocina italiana.`,
        uses: [
            {
                title: "Pizzas",
                content: "El queso clásico por excelencia, se derrite de manera uniforme y aporta un sabor suave y cremoso."
            },
            {
                title: "Pastas",
                content: "Ideal para gratinar platos al horno o preparar lasañas."
            },
            {
                title: "Ensaladas",
                content: "Combina muy bien con tomate fresco, albahaca y aceite de oliva."
            },
            {
                title: "Aperitivos",
                content: "Perfecto para bocaditos, brochetas y tablas de quesos."
            }
        ],
        relatedProducts: [
            {
                id: "35",
                name: "Queso Mozzarella Paquete",
                presentationName: "5 kg",
                imageUrl: "/images/products/queso/mozzarella/5kg/queso-mozzarella-paquete-5kg-1.webp"
            },
            {
                id: "36",
                name: "Queso Mozzarella sin Sal",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/mozzarella/250gr/queso-mozzarella-250gr-1.webp"
            },
            {
                id: "32",
                name: "Queso Parmesano Para Rallar",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/parmesano/para-rallar/250gr/queso-parmesano-para-rallar-250gr-1.webp"
            },
            {
                id: "30",
                name: "Queso Edam Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/edam/500gr/queso-edam-laminado-500gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            }
        ]
    },
    {
        id: "35",
        name: "Queso Mozzarella Paquete 5 kg",
        meditionUnit: "5 kg",
        imagesUrls: [
            "/images/products/queso/mozzarella/5kg/queso-mozzarella-paquete-5kg-1.webp",
        ],
        description: "Queso Mozzarella Paquete de 5 kg",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Mozzarella"
            },
            {
                name: "Contenido",
                value: "5 kg"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura suave, elástica y blanda, ideal para fundir.
            Sabor delicado y ligeramente lácteo, que se combina fácilmente con otros ingredientes.
            Alto en grasas saturadas, lo que le da cremosidad y una excelente capacidad de derretirse.
            Reconocido por su versatilidad y su papel esencial en la cocina italiana.`,
        uses: [
            {
                title: "Pizzas",
                content: "El queso clásico por excelencia, se derrite de manera uniforme y aporta un sabor suave y cremoso."
            },
            {
                title: "Pastas",
                content: "Ideal para gratinar platos al horno o preparar lasañas."
            },
            {
                title: "Ensaladas",
                content: "Combina muy bien con tomate fresco, albahaca y aceite de oliva."
            },
            {
                title: "Aperitivos",
                content: "Perfecto para bocaditos, brochetas y tablas de quesos."
            }
        ],
        relatedProducts: [
            {
                id: "34",
                name: "Queso Mozzarella con Sal",
                presentationName: "2 kg",
                imageUrl: "/images/products/queso/mozzarella/2kg/queso-mozzarella-2kg-1.webp"
            },
            {
                id: "36",
                name: "Queso Mozzarella sin Sal",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/mozzarella/250gr/queso-mozzarella-250gr-1.webp"
            },
            {
                id: "32",
                name: "Queso Parmesano Para Rallar",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/parmesano/para-rallar/250gr/queso-parmesano-para-rallar-250gr-1.webp"
            },
            {
                id: "30",
                name: "Queso Edam Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/edam/500gr/queso-edam-laminado-500gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            }
        ]
    },
    {
        id: "36",
        name: "Queso Mozzarella sin Sal 250 gr",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/mozzarella/250gr/queso-mozzarella-250gr-1.webp",
            "/images/products/queso/mozzarella/250gr/queso-mozzarella-250gr-2.webp",
            "/images/products/queso/mozzarella/250gr/queso-mozzarella-250gr-3.webp",
            "/images/products/queso/mozzarella/250gr/queso-mozzarella-250gr-4.webp"
        ],
        description: "Queso Mozzarella sin Sal de 250 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Mozzarella"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura suave, elástica y blanda, ideal para fundir.
            Sabor delicado y ligeramente lácteo, que se combina fácilmente con otros ingredientes.
            Alto en grasas saturadas, lo que le da cremosidad y una excelente capacidad de derretirse.
            Reconocido por su versatilidad y su papel esencial en la cocina italiana.`,
        uses: [
            {
                title: "Pizzas",
                content: "El queso clásico por excelencia, se derrite de manera uniforme y aporta un sabor suave y cremoso."
            },
            {
                title: "Pastas",
                content: "Ideal para gratinar platos al horno o preparar lasañas."
            },
            {
                title: "Ensaladas",
                content: "Combina muy bien con tomate fresco, albahaca y aceite de oliva."
            },
            {
                title: "Aperitivos",
                content: "Perfecto para bocaditos, brochetas y tablas de quesos."
            }
        ],
        relatedProducts: [
            {
                id: "35",
                name: "Queso Mozzarella Paquete",
                presentationName: "5 kg",
                imageUrl: "/images/products/queso/mozzarella/5kg/queso-mozzarella-paquete-5kg-1.webp"
            },
            {
                id: "34",
                name: "Queso Mozzarella con Sal",
                presentationName: "2 kg",
                imageUrl: "/images/products/queso/mozzarella/2kg/queso-mozzarella-2kg-1.webp"
            },
            {
                id: "32",
                name: "Queso Parmesano Para Rallar",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/parmesano/para-rallar/250gr/queso-parmesano-para-rallar-250gr-1.webp"
            },
            {
                id: "30",
                name: "Queso Edam Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/edam/500gr/queso-edam-laminado-500gr-1.webp"
            },
            {
                id: "24",
                name: "Queso Dambo Laminado",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/dambo-laminado/500gr/queso-dambo-laminado-500gr-1.webp"
            }
        ]
    },
    {
        id: "37",
        name: "Quesillo 800 gr",
        meditionUnit: "800 gr",
        imagesUrls: [
            "/images/products/queso/otros/quesillo/800gr/quesillo-800gr-1.webp",
            "/images/products/queso/otros/quesillo/800gr/quesillo-800gr-2.webp",
            "/images/products/queso/otros/quesillo/800gr/quesillo-800gr-3.webp",
            "/images/products/queso/otros/quesillo/800gr/quesillo-800gr-4.webp"
        ],
        description: "Quesillo de 800 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Quesillo"
            },
            {
                name: "Contenido",
                value: "800 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Sin sal, ideal para quienes prefieren sabores suaves y naturales.
            Textura blanda y cremosa, con un sabor delicado y lácteo.
            Color blanco puro, característico de su elaboración artesanal.
            Presencia natural de suero, que mantiene su frescura y humedad.
        `,
        uses: [
            {
                title: "Pan, papa o choclo",
                content: "Acompañamientos clásicos de la mesa peruana."
            },
            {
                title: "Miel de caña",
                content: "Crea un contraste delicioso entre lo dulce y lo suave."
            },
            {
                title: "Ensaladas",
                content: "Aporta textura cremosa y sabor ligero."
            },
            {
                title: "Bocaditos y aperitivos",
                content: "Perfecto para combinar con frutas o panes."
            },
            {
                title: "Entre otros platos",
                content: "Versátil y fresco, ideal para cualquier ocasión."
            }
        ],
        relatedProducts: [
            {
                id: "16",
                name: "Queso Fresco",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/fresco/3.5kg/queso-fresco-3.5kg-1.webp"
            },
            {
                id: "17",
                name: "Queso Fresco",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/fresco/1kg/queso-fresco-1kg-1.webp"
            },
            {
                id: "19",
                name: "Queso Fresco",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/fresco/250gr/queso-fresco-250gr-1.webp"
            },
            {
                id: "14",
                name: "Queso de Corte",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-1.webp"
            },
            {
                id: "15",
                name: "Queso de Corte",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-1.webp"
            }
        ]
    },
    {
        id: "38",
        name: "Queso Paria 800 gr",
        meditionUnit: "800 gr",
        imagesUrls: [
            "/images/products/queso/otros/paria/800gr/queso-paria-800gr-1.webp",
            "/images/products/queso/otros/paria/800gr/queso-paria-800gr-2.webp",
            "/images/products/queso/otros/paria/800gr/queso-paria-800gr-3.webp",
            "/images/products/queso/otros/paria/800gr/queso-paria-800gr-4.webp"
        ],
        description: "Queso Paria de 800 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Paria"
            },
            {
                name: "Contenido",
                value: "800 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Textura suave, elástica y blanda, fácil de cortar y fundir.
            Sabor delicado y ligeramente lácteo, que combina muy bien con otros ingredientes.
            Alto en grasas saturadas, lo que le otorga una cremosidad y sabor únicos.
            Ideal para quienes buscan un queso versátil, con el equilibrio perfecto entre suavidad y carácter.
        `,
        uses: [
            {
                title: "Pizzas",
                content: "El clásico queso que se derrite de forma uniforme, aportando un sabor suave y agradable."
            },
            {
                title: "Pastas",
                content: "Ideal para gratinar platos al horno."
            },
            {
                title: "Ensaladas",
                content: "Combina muy bien con tomate fresco, albahaca y aceite de oliva."
            },
            {
                title: "Aperitivos",
                content: "Perfecto para bocaditos, snacks ligeros y tablas de quesos."
            }
        ],
        relatedProducts: [
            {
                id: "16",
                name: "Queso Fresco",
                presentationName: "3.5 kg",
                imageUrl: "/images/products/queso/fresco/3.5kg/queso-fresco-3.5kg-1.webp"
            },
            {
                id: "17",
                name: "Queso Fresco",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/fresco/1kg/queso-fresco-1kg-1.webp"
            },
            {
                id: "19",
                name: "Queso Fresco",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/fresco/250gr/queso-fresco-250gr-1.webp"
            },
            {
                id: "14",
                name: "Queso de Corte",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/de-corte/500gr/queso-de-corte-500gr-1.webp"
            },
            {
                id: "15",
                name: "Queso de Corte",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-1.webp"
            }
        ]
    },
    {
        id: "39",
        name: "Queso Ricotta 250 gr",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/queso/otros/ricotta/250gr/queso-ricotta-250gr-1.webp",
            "/images/products/queso/otros/ricotta/queso-ricotta-2.webp",
            "/images/products/queso/otros/ricotta/queso-ricotta-3.webp",
            "/images/products/queso/otros/ricotta/queso-ricotta-4.webp"
        ],
        description: "Queso Ricotta de 250 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Ricotta"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Sin sal, con un sabor suave y lácteo ideal para preparaciones dulces o saladas.
            Textura ligera, suave y cremosa, fácil de untar o mezclar.
            Bajo en grasa, pero con la cremosidad justa para realzar los platos.
            Presencia natural de suero, que mantiene su frescura y humedad.
        `,
        uses: [
            {
                title: "Lasañas y pastas",
                content: "Aporta cremosidad y un sabor delicado."
            },
            {
                title: "Dulces y postres",
                content: "Ideal para cheesecakes, rellenos o tartas."
            },
            {
                title: "Ensaladas",
                content: "Combina muy bien con vegetales frescos."
            },
            {
                title: "Bocaditos",
                content: "Excelente para untar o rellenar canapés."
            },
            {
                title: "Entre otros aperitivos",
                content: "Versátil y ligero, perfecto para recetas frías o calientes."
            }
        ],
        relatedProducts: [
            {
                id: "40",
                name: "Queso Ricotta",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/otros/ricotta/500gr/queso-ricotta-500gr-1.webp"
            },
            {
                id: "3",
                name: "Queso Suizo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo/500gr/queso-suizo-500gr-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            },
            {
                id: "13",
                name: "Queso de Corte",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp"
            },
            {
                id: "15",
                name: "Queso de Corte",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-1.webp"
            }
        ]
    },
    {
        id: "40",
        name: "Queso Ricotta 500 gr",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/queso/otros/ricotta/500gr/queso-ricotta-500gr-1.webp",
            "/images/products/queso/otros/ricotta/queso-ricotta-2.webp",
            "/images/products/queso/otros/ricotta/queso-ricotta-3.webp",
            "/images/products/queso/otros/ricotta/queso-ricotta-4.webp"
        ],
        description: "Queso Ricotta de 500 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Al vacío"
            },
            {
                name: "Tipo de Producto",
                value: "Queso Ricotta"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Bolsa de Polietileno"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Sin sal, con un sabor suave y lácteo ideal para preparaciones dulces o saladas.
            Textura ligera, suave y cremosa, fácil de untar o mezclar.
            Bajo en grasa, pero con la cremosidad justa para realzar los platos.
            Presencia natural de suero, que mantiene su frescura y humedad.
        `,
        uses: [
            {
                title: "Lasañas y pastas",
                content: "Aporta cremosidad y un sabor delicado."
            },
            {
                title: "Dulces y postres",
                content: "Ideal para cheesecakes, rellenos o tartas."
            },
            {
                title: "Ensaladas",
                content: "Combina muy bien con vegetales frescos."
            },
            {
                title: "Bocaditos",
                content: "Excelente para untar o rellenar canapés."
            },
            {
                title: "Entre otros aperitivos",
                content: "Versátil y ligero, perfecto para recetas frías o calientes."
            }
        ],
        relatedProducts: [
            {
                id: "39",
                name: "Queso Ricotta",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/otros/ricotta/250gr/queso-ricotta-250gr-1.webp"
            },
            {
                id: "3",
                name: "Queso Suizo",
                presentationName: "500 gr",
                imageUrl: "/images/products/queso/suizo/500gr/queso-suizo-500gr-1.webp"
            },
            {
                id: "6",
                name: "Queso Suizo Laminado",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/suizo-laminado/250gr/queso-suizo-laminado-250gr-1.webp"
            },
            {
                id: "13",
                name: "Queso de Corte",
                presentationName: "1 kg",
                imageUrl: "/images/products/queso/de-corte/1kg/queso-de-corte-1kg-1.webp"
            },
            {
                id: "15",
                name: "Queso de Corte",
                presentationName: "250 gr",
                imageUrl: "/images/products/queso/de-corte/250gr/queso-de-corte-250gr-1.webp"
            }
        ]
    },
    {
        id: "41",
        name: "Yogurt Batido",
        presentationName: "Natural",
        meditionUnit: "950 gr",
        imagesUrls: [
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-2.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        description: "Yogurt Batido Natural de 950 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Batido"
            },
            {
                name: "Contenido",
                value: "950 gr"
            },
            {
                name: "Formato",
                value: "Botella de 950 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "42",
                name: "Yogurt Natural",
                presentationName: "Sin azúcar",
                imageUrl: "/images/products/yogurt/batido/natural-sin-azucar/yogurt-batido-natural-sin-azucar-1.webp"
            },
            {
                id: "43",
                name: "Yogurt Batido",
                presentationName: "Piña",
                imageUrl: "/images/products/yogurt/batido/pinia/yogurt-batido-pinia-1.webp"
            },
            {
                id: "45",
                name: "Yogurt Batido",
                presentationName: "Lúcuma",
                imageUrl: "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-1.webp"
            },
            {
                id: "44",
                name: "Yogurt Batido",
                presentationName: "Vainilla",
                imageUrl: "/images/products/yogurt/batido/vainilla/yogurt-batido-vainilla-1.webp"
            },
            {
                id: "47",
                name: "Yogurt Batido",
                presentationName: "Durazno",
                imageUrl: "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-1.webp"
            }
        ]
    },
    {
        id: "42",
        name: "Yogurt Batido",
        presentationName: "Natural sin azúcar",
        meditionUnit: "950 gr",
        description: "Yogurt Batido Natural sin azúcar de 950 gr",
        imagesUrls: [
            "/images/products/yogurt/batido/natural-sin-azucar/yogurt-batido-natural-sin-azucar-1.webp",
            "/images/products/yogurt/batido/natural-sin-azucar/yogurt-batido-natural-sin-azucar-2.webp",
            "/images/products/yogurt/batido/natural-sin-azucar/yogurt-batido-natural-sin-azucar-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Batido"
            },
            {
                name: "Contenido",
                value: "950 gr"
            },
            {
                name: "Formato",
                value: "Botella de 950 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "41",
                name: "Yogurt Batido",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "43",
                name: "Yogurt Batido",
                presentationName: "Piña",
                imageUrl: "/images/products/yogurt/batido/pinia/yogurt-batido-pinia-1.webp"
            },
            {
                id: "45",
                name: "Yogurt Batido",
                presentationName: "Lúcuma",
                imageUrl: "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-1.webp"
            },
            {
                id: "44",
                name: "Yogurt Batido",
                presentationName: "Vainilla",
                imageUrl: "/images/products/yogurt/batido/vainilla/yogurt-batido-vainilla-1.webp"
            },
            {
                id: "47",
                name: "Yogurt Batido",
                presentationName: "Durazno",
                imageUrl: "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-1.webp"
            }
        ]
    },
    {
        id: "43",
        name: "Yogurt Batido",
        presentationName: "Piña",
        meditionUnit: "950 gr",
        description: "Yogurt Batido Piña de 950 gr",
        imagesUrls: [
            "/images/products/yogurt/batido/pinia/yogurt-batido-pinia-1.webp",
            "/images/products/yogurt/batido/pinia/yogurt-batido-pinia-2.webp",
            "/images/products/yogurt/batido/pinia/yogurt-batido-pinia-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Batido"
            },
            {
                name: "Contenido",
                value: "950 gr"
            },
            {
                name: "Formato",
                value: "Botella de 950 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "48",
                name: "Yogurt Batido",
                presentationName: "Higo",
                imageUrl: "/images/products/yogurt/batido/higo/yogurt-batido-higo-1.webp"
            },
            {
                id: "49",
                name: "Yogurt Batido",
                presentationName: "Guanábana",
                imageUrl: "/images/products/yogurt/batido/guanabana/yogurt-batido-guanabana-1.webp"
            },
            {
                id: "45",
                name: "Yogurt Batido",
                presentationName: "Lúcuma",
                imageUrl: "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-1.webp"
            },
            {
                id: "41",
                name: "Yogurt Batido",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "47",
                name: "Yogurt Batido",
                presentationName: "Durazno",
                imageUrl: "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-1.webp"
            }
        ]
    },
    {
        id: "44",
        name: "Yogurt Batido",
        presentationName: "Vainilla",
        meditionUnit: "950 gr",
        description: "Yogurt Batido Vainilla de 950 gr",
        imagesUrls: [
            "/images/products/yogurt/batido/vainilla/yogurt-batido-vainilla-1.webp",
            "/images/products/yogurt/batido/vainilla/yogurt-batido-vainilla-2.webp",
            "/images/products/yogurt/batido/vainilla/yogurt-batido-vainilla-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Batido"
            },
            {
                name: "Contenido",
                value: "950 gr"
            },
            {
                name: "Formato",
                value: "Botella de 950 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "46",
                name: "Yogurt Batido",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/batido/fresa/yogurt-batido-fresa-1.webp"
            },
            {
                id: "49",
                name: "Yogurt Batido",
                presentationName: "Guanábana",
                imageUrl: "/images/products/yogurt/batido/guanabana/yogurt-batido-guanabana-1.webp"
            },
            {
                id: "45",
                name: "Yogurt Batido",
                presentationName: "Lúcuma",
                imageUrl: "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-1.webp"
            },
            {
                id: "41",
                name: "Yogurt Batido",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "47",
                name: "Yogurt Batido",
                presentationName: "Durazno",
                imageUrl: "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-1.webp"
            }
        ]
    },
    {
        id: "45",
        name: "Yogurt Batido",
        presentationName: "Lúcuma",
        meditionUnit: "950 gr",
        description: "Yogurt Batido Lúcuma de 950 gr",
        imagesUrls: [
            "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-1.webp",
            "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-2.webp",
            "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Batido"
            },
            {
                name: "Contenido",
                value: "950 gr"
            },
            {
                name: "Formato",
                value: "Botella de 950 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "47",
                name: "Yogurt Batido",
                presentationName: "Durazno",
                imageUrl: "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-1.webp"
            },
            {
                id: "46",
                name: "Yogurt Batido",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/batido/fresa/yogurt-batido-fresa-1.webp"
            },
            {
                id: "49",
                name: "Yogurt Batido",
                presentationName: "Guanábana",
                imageUrl: "/images/products/yogurt/batido/guanabana/yogurt-batido-guanabana-1.webp"
            },
            {
                id: "41",
                name: "Yogurt Batido",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "44",
                name: "Yogurt Batido",
                presentationName: "Vainilla",
                imageUrl: "/images/products/yogurt/batido/vainilla/yogurt-batido-vainilla-1.webp"
            },
        ]
    },
    {
        id: "46",
        name: "Yogurt Batido",
        presentationName: "Fresa",
        meditionUnit: "950 gr",
        description: "Yogurt Batido Fresa de 950 gr",
        imagesUrls: [
            "/images/products/yogurt/batido/fresa/yogurt-batido-fresa-1.webp",
            "/images/products/yogurt/batido/fresa/yogurt-batido-fresa-2.webp",
            "/images/products/yogurt/batido/fresa/yogurt-batido-fresa-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Batido"
            },
            {
                name: "Contenido",
                value: "950 gr"
            },
            {
                name: "Formato",
                value: "Botella de 950 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "47",
                name: "Yogurt Batido",
                presentationName: "Durazno",
                imageUrl: "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-1.webp"
            },
            {
                id: "49",
                name: "Yogurt Batido",
                presentationName: "Guanábana",
                imageUrl: "/images/products/yogurt/batido/guanabana/yogurt-batido-guanabana-1.webp"
            },
            {
                id: "45",
                name: "Yogurt Batido",
                presentationName: "Lúcuma",
                imageUrl: "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-1.webp"
            },
            {
                id: "41",
                name: "Yogurt Batido",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "44",
                name: "Yogurt Batido",
                presentationName: "Vainilla",
                imageUrl: "/images/products/yogurt/batido/vainilla/yogurt-batido-vainilla-1.webp"
            },
        ]
    },
    {
        id: "47",
        name: "Yogurt Batido",
        presentationName: "Durazno",
        meditionUnit: "950 gr",
        description: "Yogurt Batido Durazno de 950 gr",
        imagesUrls: [
            "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-1.webp",
            "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-2.webp",
            "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Batido"
            },
            {
                name: "Contenido",
                value: "950 gr"
            },
            {
                name: "Formato",
                value: "Botella de 950 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "46",
                name: "Yogurt Batido",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/batido/fresa/yogurt-batido-fresa-1.webp"
            },
            {
                id: "49",
                name: "Yogurt Batido",
                presentationName: "Guanábana",
                imageUrl: "/images/products/yogurt/batido/guanabana/yogurt-batido-guanabana-1.webp"
            },
            {
                id: "45",
                name: "Yogurt Batido",
                presentationName: "Lúcuma",
                imageUrl: "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-1.webp"
            },
            {
                id: "41",
                name: "Yogurt Batido",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "44",
                name: "Yogurt Batido",
                presentationName: "Vainilla",
                imageUrl: "/images/products/yogurt/batido/vainilla/yogurt-batido-vainilla-1.webp"
            },
        ]
    },
    {
        id: "48",
        name: "Yogurt Batido",
        presentationName: "Higo",
        meditionUnit: "950 gr",
        description: "Yogurt Batido Higo de 950 gr",
        imagesUrls: [
            "/images/products/yogurt/batido/higo/yogurt-batido-higo-1.webp",
            "/images/products/yogurt/batido/higo/yogurt-batido-higo-2.webp",
            "/images/products/yogurt/batido/higo/yogurt-batido-higo-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Batido"
            },
            {
                name: "Contenido",
                value: "950 gr"
            },
            {
                name: "Formato",
                value: "Botella de 950 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "43",
                name: "Yogurt Batido",
                presentationName: "Piña",
                imageUrl: "/images/products/yogurt/batido/pinia/yogurt-batido-pinia-1.webp"
            },
            {
                id: "49",
                name: "Yogurt Batido",
                presentationName: "Guanábana",
                imageUrl: "/images/products/yogurt/batido/guanabana/yogurt-batido-guanabana-1.webp"
            },
            {
                id: "45",
                name: "Yogurt Batido",
                presentationName: "Lúcuma",
                imageUrl: "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-1.webp"
            },
            {
                id: "41",
                name: "Yogurt Batido",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "47",
                name: "Yogurt Batido",
                presentationName: "Durazno",
                imageUrl: "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-1.webp"
            }
        ]
    },
    {
        id: "49",
        name: "Yogurt Batido",
        presentationName: "Guanábana",
        meditionUnit: "950 gr",
        description: "Yogurt Batido Guanábana de 950 gr",
        imagesUrls: [
            "/images/products/yogurt/batido/guanabana/yogurt-batido-guanabana-1.webp",
            "/images/products/yogurt/batido/guanabana/yogurt-batido-guanabana-2.webp",
            "/images/products/yogurt/batido/guanabana/yogurt-batido-guanabana-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Batido"
            },
            {
                name: "Contenido",
                value: "950 gr"
            },
            {
                name: "Formato",
                value: "Botella de 950 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "47",
                name: "Yogurt Batido",
                presentationName: "Durazno",
                imageUrl: "/images/products/yogurt/batido/durazno/yogurt-batido-durazno-1.webp"
            },
            {
                id: "46",
                name: "Yogurt Batido",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/batido/fresa/yogurt-batido-fresa-1.webp"
            },
            {
                id: "45",
                name: "Yogurt Batido",
                presentationName: "Lúcuma",
                imageUrl: "/images/products/yogurt/batido/lucuma/yogurt-batido-lucuma-1.webp"
            },
            {
                id: "41",
                name: "Yogurt Batido",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "44",
                name: "Yogurt Batido",
                presentationName: "Vainilla",
                imageUrl: "/images/products/yogurt/batido/vainilla/yogurt-batido-vainilla-1.webp"
            },
        ]
    },
    {
        id: "50",
        name: "Yogurt Frutado",
        presentationName: "Higo",
        meditionUnit: "900 gr",
        description: "Yogurt Frutado Higo de 900 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/grande/higo/yogurt-frutado-grande-higo-1.webp",
            "/images/products/yogurt/frutado/grande/higo/yogurt-frutado-grande-higo-2.webp",
            "/images/products/yogurt/frutado/grande/higo/yogurt-frutado-grande-higo-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado"
            },
            {
                name: "Contenido",
                value: "900 gr"
            },
            {
                name: "Formato",
                value: "Botella de 900 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "51",
                name: "Yogurt Frutado Higo",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/higo/yogurt-frutado-pequeno-higo-1.webp"
            },
            {
                id: "52",
                name: "Yogurt Frutado Cuchareable",
                presentationName: "Higo",
                imageUrl: "/images/products/yogurt/frutado/cuchareable/higo/yogurt-frutado-cuchareable-higo-1.webp"
            },
            {
                id: "56",
                name: "Yogurt Frutado",
                presentationName: "Arándano",
                imageUrl: "/images/products/yogurt/frutado/grande/arandano/yogurt-frutado-grande-arandano-1.webp"
            },
            {
                id: "59",
                name: "Yogurt Frutado",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/frutado/grande/fresa/yogurt-frutado-grande-fresa-1.webp"
            },
            {
                id: "53",
                name: "Yogurt Frutado",
                presentationName: "Mango",
                imageUrl: "/images/products/yogurt/frutado/grande/mango/yogurt-frutado-grande-mango-1.webp"
            }
        ]
    },
    {
        id: "51",
        name: "Yogurt Frutado",
        presentationName: "Higo",
        meditionUnit: "450 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/pequeno/higo/yogurt-frutado-pequeno-higo-1.webp",
            "/images/products/yogurt/frutado/pequeno/higo/yogurt-frutado-pequeno-higo-2.webp",
            "/images/products/yogurt/frutado/pequeno/higo/yogurt-frutado-pequeno-higo-3.webp",
            "/images/products/yogurt/frutado/pequeno/yogurt-frutado-pequeno-back.webp"
        ],
        description: "Yogurt Frutado Higo de 450 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado"
            },
            {
                name: "Contenido",
                value: "450 gr"
            },
            {
                name: "Formato",
                value: "Botella de 450 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "50",
                name: "Yogurt Frutado Higo",
                presentationName: "Grande",
                imageUrl: "/images/products/yogurt/frutado/grande/higo/yogurt-frutado-grande-higo-1.webp"
            },
            {
                id: "52",
                name: "Yogurt Frutado Cuchareable",
                presentationName: "Higo",
                imageUrl: "/images/products/yogurt/frutado/cuchareable/higo/yogurt-frutado-cuchareable-higo-1.webp"
            },
            {
                id: "57",
                name: "Yogurt Frutado Arándano",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/arandano/yogurt-frutado-pequeno-arandano-1.webp"
            },
            {
                id: "60",
                name: "Yogurt Frutado Fresa",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/fresa/yogurt-frutado-pequeno-fresa-1.webp"
            },
            {
                id: "54",
                name: "Yogurt Frutado Mango",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/mango/yogurt-frutado-pequeno-mango-1.webp"
            }
        ]
    },
    {
        id: "52",
        name: "Yogurt Frutado Cuchareable",
        presentationName: "Higo",
        meditionUnit: "200 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/cuchareable/higo/yogurt-frutado-cuchareable-higo-1.webp",
            "/images/products/yogurt/frutado/cuchareable/higo/yogurt-frutado-cuchareable-higo-2.webp",
        ],
        description: "Yogurt Frutado Cuchareable Higo de 200 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Vaso de Cartón"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado Cuchareable"
            },
            {
                name: "Contenido",
                value: "200 gr"
            },
            {
                name: "Formato",
                value: "Vaso de Cartón de 200 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: []
    },
    {
        id: "53",
        name: "Yogurt Frutado",
        presentationName: "Mango",
        meditionUnit: "900 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/grande/mango/yogurt-frutado-grande-mango-1.webp",
            "/images/products/yogurt/frutado/grande/mango/yogurt-frutado-grande-mango-2.webp",
            "/images/products/yogurt/frutado/grande/mango/yogurt-frutado-grande-mango-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        description: "Yogurt Frutado Mango de 900 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado"
            },
            {
                name: "Contenido",
                value: "900 gr"
            },
            {
                name: "Formato",
                value: "Botella de 900 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "54",
                name: "Yogurt Frutado Mango",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/mango/yogurt-frutado-pequeno-mango-1.webp"
            },
            {
                id: "55",
                name: "Yogurt Frutado Cuchareable",
                presentationName: "Mango",
                imageUrl: "/images/products/yogurt/frutado/cuchareable/mango/yogurt-frutado-cuchareable-mango-1.webp"
            },
            {
                id: "56",
                name: "Yogurt Frutado",
                presentationName: "Arándano",
                imageUrl: "/images/products/yogurt/frutado/grande/arandano/yogurt-frutado-grande-arandano-1.webp"
            },
            {
                id: "59",
                name: "Yogurt Frutado",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/frutado/grande/fresa/yogurt-frutado-grande-fresa-1.webp"
            },
            {
                id: "50",
                name: "Yogurt Frutado",
                presentationName: "Higo",
                imageUrl: "/images/products/yogurt/frutado/grande/higo/yogurt-frutado-grande-higo-1.webp"
            }
        ]
    },
    {
        id: "54",
        name: "Yogurt Frutado",
        presentationName: "Mango",
        meditionUnit: "450 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/pequeno/mango/yogurt-frutado-pequeno-mango-1.webp",
            "/images/products/yogurt/frutado/pequeno/mango/yogurt-frutado-pequeno-mango-2.webp",
            "/images/products/yogurt/frutado/pequeno/mango/yogurt-frutado-pequeno-mango-3.webp",
            "/images/products/yogurt/frutado/pequeno/yogurt-frutado-pequeno-back.webp"
        ],
        description: "Yogurt Frutado Mango de 450 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado"
            },
            {
                name: "Contenido",
                value: "450 gr"
            },
            {
                name: "Formato",
                value: "Botella de 450 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "53",
                name: "Yogurt Frutado Mango",
                presentationName: "Grande",
                imageUrl: "/images/products/yogurt/frutado/grande/mango/yogurt-frutado-grande-mango-1.webp"
            },
            {
                id: "52",
                name: "Yogurt Frutado Cuchareable",
                presentationName: "Higo",
                imageUrl: "/images/products/yogurt/frutado/cuchareable/higo/yogurt-frutado-cuchareable-higo-1.webp"
            },
            {
                id: "57",
                name: "Yogurt Frutado Arándano",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/arandano/yogurt-frutado-pequeno-arandano-1.webp"
            },
            {
                id: "60",
                name: "Yogurt Frutado Fresa",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/fresa/yogurt-frutado-pequeno-fresa-1.webp"
            },
            {
                id: "51",
                name: "Yogurt Frutado Higo",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/higo/yogurt-frutado-pequeno-higo-1.webp"
            }
        ]
    },
    {
        id: "55",
        name: "Yogurt Frutado Cuchareable",
        presentationName: "Mango",
        meditionUnit: "200 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/cuchareable/mango/yogurt-frutado-cuchareable-mango-1.webp",
            "/images/products/yogurt/frutado/cuchareable/mango/yogurt-frutado-cuchareable-mango-2.webp",
        ],
        description: "Yogurt Frutado Cuchareable Mango de 200 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Vaso de Cartón"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado Cuchareable"
            },
            {
                name: "Contenido",
                value: "200 gr"
            },
            {
                name: "Formato",
                value: "Vaso de Cartón de 200 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: []
    },
    {
        id: "56",
        name: "Yogurt Frutado",
        presentationName: "Arándano",
        meditionUnit: "900 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/grande/arandano/yogurt-frutado-grande-arandano-1.webp",
            "/images/products/yogurt/frutado/grande/arandano/yogurt-frutado-grande-arandano-2.webp",
            "/images/products/yogurt/frutado/grande/arandano/yogurt-frutado-grande-arandano-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        description: "Yogurt Frutado Arándano de 900 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado"
            },
            {
                name: "Contenido",
                value: "900 gr"
            },
            {
                name: "Formato",
                value: "Botella de 900 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "57",
                name: "Yogurt Frutado Arándano",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/arandano/yogurt-frutado-pequeno-arandano-1.webp"
            },
            {
                id: "58",
                name: "Yogurt Frutado Cuchareable",
                presentationName: "Arándano",
                imageUrl: "/images/products/yogurt/frutado/cuchareable/arandano/yogurt-frutado-cuchareable-arandano-1.webp"
            },
            {
                id: "50",
                name: "Yogurt Frutado",
                presentationName: "Higo",
                imageUrl: "/images/products/yogurt/frutado/grande/higo/yogurt-frutado-grande-higo-1.webp"
            },
            {
                id: "59",
                name: "Yogurt Frutado",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/frutado/grande/fresa/yogurt-frutado-grande-fresa-1.webp"
            },
            {
                id: "53",
                name: "Yogurt Frutado",
                presentationName: "Mango",
                imageUrl: "/images/products/yogurt/frutado/grande/mango/yogurt-frutado-grande-mango-1.webp"
            }
        ]
    },
    {
        id: "57",
        name: "Yogurt Frutado",
        presentationName: "Arándano",
        meditionUnit: "450 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/pequeno/arandano/yogurt-frutado-pequeno-arandano-1.webp",
            "/images/products/yogurt/frutado/pequeno/arandano/yogurt-frutado-pequeno-arandano-2.webp",
            "/images/products/yogurt/frutado/pequeno/arandano/yogurt-frutado-pequeno-arandano-3.webp",
            "/images/products/yogurt/frutado/pequeno/yogurt-frutado-pequeno-back.webp"
        ],
        description: "Yogurt Frutado Arándano de 450 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado"
            },
            {
                name: "Contenido",
                value: "450 gr"
            },
            {
                name: "Formato",
                value: "Botella de 450 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "56",
                name: "Yogurt Frutado Arándano",
                presentationName: "Grande",
                imageUrl: "/images/products/yogurt/frutado/grande/arandano/yogurt-frutado-grande-arandano-1.webp"
            },
            {
                id: "58",
                name: "Yogurt Frutado Cuchareable",
                presentationName: "Arándano",
                imageUrl: "/images/products/yogurt/frutado/cuchareable/arandano/yogurt-frutado-cuchareable-arandano-1.webp"
            },
            {
                id: "51",
                name: "Yogurt Frutado Higo",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/higo/yogurt-frutado-pequeno-higo-1.webp"
            },
            {
                id: "60",
                name: "Yogurt Frutado Fresa",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/fresa/yogurt-frutado-pequeno-fresa-1.webp"
            },
            {
                id: "54",
                name: "Yogurt Frutado Mango",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/mango/yogurt-frutado-pequeno-mango-1.webp"
            }
        ]
    },
    {
        id: "58",
        name: "Yogurt Frutado Cuchareable",
        presentationName: "Arándano",
        meditionUnit: "200 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/cuchareable/arandano/yogurt-frutado-cuchareable-arandano-1.webp",
            "/images/products/yogurt/frutado/cuchareable/arandano/yogurt-frutado-cuchareable-arandano-2.webp",
        ],
        description: "Yogurt Frutado Cuchareable Arándano de 200 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Vaso de Cartón"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado Cuchareable"
            },
            {
                name: "Contenido",
                value: "200 gr"
            },
            {
                name: "Formato",
                value: "Vaso de Cartón de 200 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: []
    },
    {
        id: "59",
        name: "Yogurt Frutado",
        presentationName: "Fresa",
        meditionUnit: "900 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/grande/fresa/yogurt-frutado-grande-fresa-1.webp",
            "/images/products/yogurt/frutado/grande/fresa/yogurt-frutado-grande-fresa-2.webp",
            "/images/products/yogurt/frutado/grande/fresa/yogurt-frutado-grande-fresa-3.webp",
            "/images/products/yogurt/batido/natural/yogurt-batido-natural-4.webp"
        ],
        description: "Yogurt Frutado Fresa de 900 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado"
            },
            {
                name: "Contenido",
                value: "900 gr"
            },
            {
                name: "Formato",
                value: "Botella de 900 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "60",
                name: "Yogurt Frutado Fresa",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/fresa/yogurt-frutado-pequeno-fresa-1.webp"
            },
            {
                id: "61",
                name: "Yogurt Frutado Cuchareable",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/frutado/cuchareable/fresa/yogurt-frutado-cuchareable-fresa-1.webp"
            },
            {
                id: "56",
                name: "Yogurt Frutado",
                presentationName: "Arándano",
                imageUrl: "/images/products/yogurt/frutado/grande/arandano/yogurt-frutado-grande-arandano-1.webp"
            },
            {
                id: "50",
                name: "Yogurt Frutado",
                presentationName: "Higo",
                imageUrl: "/images/products/yogurt/frutado/grande/higo/yogurt-frutado-grande-higo-1.webp"
            },
            {
                id: "53",
                name: "Yogurt Frutado",
                presentationName: "Mango",
                imageUrl: "/images/products/yogurt/frutado/grande/mango/yogurt-frutado-grande-mango-1.webp"
            }
        ]
    },
    {
        id: "60",
        name: "Yogurt Frutado",
        presentationName: "Fresa",
        meditionUnit: "450 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/pequeno/fresa/yogurt-frutado-pequeno-fresa-1.webp",
            "/images/products/yogurt/frutado/pequeno/fresa/yogurt-frutado-pequeno-fresa-2.webp",
            "/images/products/yogurt/frutado/pequeno/fresa/yogurt-frutado-pequeno-fresa-3.webp",
            "/images/products/yogurt/frutado/pequeno/yogurt-frutado-pequeno-back.webp"
        ],
        description: "Yogurt Frutado Fresa de 450 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado"
            },
            {
                name: "Contenido",
                value: "450 gr"
            },
            {
                name: "Formato",
                value: "Botella de 450 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: [
            {
                id: "59",
                name: "Yogurt Frutado Fresa",
                presentationName: "Grande",
                imageUrl: "/images/products/yogurt/frutado/grande/fresa/yogurt-frutado-grande-fresa-1.webp"
            },
            {
                id: "61",
                name: "Yogurt Frutado Cuchareable",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/frutado/cuchareable/fresa/yogurt-frutado-cuchareable-fresa-1.webp"
            },
            {
                id: "57",
                name: "Yogurt Frutado Arándano",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/arandano/yogurt-frutado-pequeno-arandano-1.webp"
            },
            {
                id: "51",
                name: "Yogurt Frutado Higo",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/higo/yogurt-frutado-pequeno-higo-1.webp"
            },
            {
                id: "54",
                name: "Yogurt Frutado Mango",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/frutado/pequeno/mango/yogurt-frutado-pequeno-mango-1.webp"
            }
        ]
    },
    {
        id: "61",
        name: "Yogurt Frutado Cuchareable",
        presentationName: "Fresa",
        meditionUnit: "200 gr",
        imagesUrls: [
            "/images/products/yogurt/frutado/cuchareable/fresa/yogurt-frutado-cuchareable-fresa-1.webp",
            "/images/products/yogurt/frutado/cuchareable/fresa/yogurt-frutado-cuchareable-fresa-2.webp",
        ],
        description: "Yogurt Frutado Cuchareable Fresa de 200 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Vaso de Cartón"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Frutado Cuchareable"
            },
            {
                name: "Contenido",
                value: "200 gr"
            },
            {
                name: "Formato",
                value: "Vaso de Cartón de 200 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "30 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        featuresDetails: `Posee un sabor cremoso, ligeramente ácido y refrescante.
            Se obtiene mediante la fermentación de la leche con bacterias ácido-lácticas beneficiosas para la digestión.
            Es rico en calcio, proteínas y probióticos, que ayudan a mantener una flora intestinal saludable.
        `,
        uses: [
            {
                title: "Consumo Directo",
                content: "Ideal como snack o desayuno rápido."
            }, 
            {
                title: "Acompañamiento",
                content: "Perfecto para mezclar con frutas, cereales, granola o miel."
            },
            {
                title: "En batidos y smoothies",
                content: "Agrega cremosidad y nutrición a tus bebidas favoritas."
            },
            {
                title: "En postres y repostería",
                content: "Se usa para preparar helados, pasteles o tortas más cremosas y suaves."
            }
        ],
        relatedProducts: []
    },
    {
        id: "62",
        name: "Yogurt Griego",
        presentationName: "Natural",
        meditionUnit: "1 kg",
        imagesUrls: [
            "/images/products/yogurt/griego/natural/1kg/yogurt-griego-natural-1kg-1.webp",
            "/images/products/yogurt/griego/natural/1kg/yogurt-griego-natural-1kg-2.webp",
        ],
        description: "Yogurt Griego Natural de 1 kg",
        specifications: [
            {
                name: "Envasado",
                value: "Taper de Plástico"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Griego"
            },
            {
                name: "Contenido",
                value: "1 kg"
            },
            {
                name: "Formato",
                value: "Taper de plástico de 1 kg"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "15 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Tiene una textura espesa, suave y cremosa.
            Presenta un sabor intenso y lácteo, con un toque ligeramente ácido.
            Es rico en proteínas y calcio, pero también puede tener un mayor contenido de grasa saturada.
            Aporta saciedad y es ideal dentro de dietas equilibradas.
            Debe mantenerse refrigerado para conservar su frescura y propiedades.
        `,
        uses: [
            {
                title: "Acompañamiento en Desayunos",
                content: "Se puede consumir solo o con frutas, miel, granola o frutos secos."
            },
            {
                title: "En tostadas y ensaladas",
                content: "Como topping o como base cremosa."
            },
            {
                title: "En postres y helados",
                content: "Ideal para preparar helado de yogurt griego o cheescakes más ligeros."
            },
            {
                title: "En cocina saludable",
                content: "Se usa como alternativa a la mayonesas o crema agria"
            }
        ],
        relatedProducts: [
            {
                id: "63",
                name: "Yogurt Griego",
                presentationName: "Mediano",
                imageUrl: "/images/products/yogurt/griego/natural/500gr/yogurt-griego-natural-500gr-1.webp"
            },
            {
                id: "64",
                name: "Yogurt Griego",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/griego/natural/250gr/yogurt-griego-natural-250gr-1.webp"
            },
            {
                id: "65",
                name: "Yogurt Griego",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/griego/frutado/fresa/yogurt-griego-fresa-1.webp"
            },
            {
                id: "66",
                name: "Yogurt Griego",
                presentationName: "Arándano",
                imageUrl: "/images/products/yogurt/griego/frutado/arandano/yogurt-griego-arandano-1.webp"
            },
            {
                id: "67",
                name: "Yogurt Griego",
                presentationName: "Aguaymanto",
                imageUrl: "/images/products/yogurt/griego/frutado/aguaymanto/yogurt-griego-aguaymanto-1.webp"
            }
        ]
    },
    {
        id: "63",
        name: "Yogurt Griego",
        presentationName: "Natural",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/yogurt/griego/natural/500gr/yogurt-griego-natural-500gr-1.webp",
            "/images/products/yogurt/griego/natural/500gr/yogurt-griego-natural-500gr-2.webp",
        ],
        description: "Yogurt Griego Natural de 500 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Taper de Plástico"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Griego"
            },
            {
                name: "Contenido",
                value: "500 gr"
            },
            {
                name: "Formato",
                value: "Taper de plástico de 500 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "15 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Tiene una textura espesa, suave y cremosa.
            Presenta un sabor intenso y lácteo, con un toque ligeramente ácido.
            Es rico en proteínas y calcio, pero también puede tener un mayor contenido de grasa saturada.
            Aporta saciedad y es ideal dentro de dietas equilibradas.
            Debe mantenerse refrigerado para conservar su frescura y propiedades.
        `,
        uses: [
            {
                title: "Acompañamiento en Desayunos",
                content: "Se puede consumir solo o con frutas, miel, granola o frutos secos."
            },
            {
                title: "En tostadas y ensaladas",
                content: "Como topping o como base cremosa."
            },
            {
                title: "En postres y helados",
                content: "Ideal para preparar helado de yogurt griego o cheescakes más ligeros."
            },
            {
                title: "En cocina saludable",
                content: "Se usa como alternativa a la mayonesas o crema agria"
            }
        ],
        relatedProducts: [
            {
                id: "62",
                name: "Yogurt Griego",
                presentationName: "Grande",
                imageUrl: "/images/products/yogurt/griego/natural/1kg/yogurt-griego-natural-1kg-1.webp"
            },
            {
                id: "64",
                name: "Yogurt Griego",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/griego/natural/250gr/yogurt-griego-natural-250gr-1.webp"
            },
            {
                id: "65",
                name: "Yogurt Griego",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/griego/frutado/fresa/yogurt-griego-fresa-1.webp"
            },
            {
                id: "66",
                name: "Yogurt Griego",
                presentationName: "Arándano",
                imageUrl: "/images/products/yogurt/griego/frutado/arandano/yogurt-griego-arandano-1.webp"
            },
            {
                id: "67",
                name: "Yogurt Griego",
                presentationName: "Aguaymanto",
                imageUrl: "/images/products/yogurt/griego/frutado/aguaymanto/yogurt-griego-aguaymanto-1.webp"
            }
        ]
    },
    {
        id: "64",
        name: "Yogurt Griego",
        presentationName: "Natural",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/yogurt/griego/natural/250gr/yogurt-griego-natural-250gr-1.webp",
            "/images/products/yogurt/griego/natural/250gr/yogurt-griego-natural-250gr-2.webp",
        ],
        description: "Yogurt Griego Natural de 250 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Taper de Plástico"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Griego"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Taper de plástico de 250 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "15 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Tiene una textura espesa, suave y cremosa.
            Presenta un sabor intenso y lácteo, con un toque ligeramente ácido.
            Es rico en proteínas y calcio, pero también puede tener un mayor contenido de grasa saturada.
            Aporta saciedad y es ideal dentro de dietas equilibradas.
            Debe mantenerse refrigerado para conservar su frescura y propiedades.
        `,
        uses: [
            {
                title: "Acompañamiento en Desayunos",
                content: "Se puede consumir solo o con frutas, miel, granola o frutos secos."
            },
            {
                title: "En tostadas y ensaladas",
                content: "Como topping o como base cremosa."
            },
            {
                title: "En postres y helados",
                content: "Ideal para preparar helado de yogurt griego o cheescakes más ligeros."
            },
            {
                title: "En cocina saludable",
                content: "Se usa como alternativa a la mayonesas o crema agria"
            }
        ],
        relatedProducts: [
            {
                id: "63",
                name: "Yogurt Griego",
                presentationName: "Mediano",
                imageUrl: "/images/products/yogurt/griego/natural/500gr/yogurt-griego-natural-500gr-1.webp"
            },
            {
                id: "62",
                name: "Yogurt Griego",
                presentationName: "Grande",
                imageUrl: "/images/products/yogurt/griego/natural/1kg/yogurt-griego-natural-1kg-1.webp"
            },
            {
                id: "65",
                name: "Yogurt Griego",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/griego/frutado/fresa/yogurt-griego-fresa-1.webp"
            },
            {
                id: "66",
                name: "Yogurt Griego",
                presentationName: "Arándano",
                imageUrl: "/images/products/yogurt/griego/frutado/arandano/yogurt-griego-arandano-1.webp"
            },
            {
                id: "67",
                name: "Yogurt Griego",
                presentationName: "Aguaymanto",
                imageUrl: "/images/products/yogurt/griego/frutado/aguaymanto/yogurt-griego-aguaymanto-1.webp"
            }
        ]
    },
    {
        id: "65",
        name: "Yogurt Griego",
        presentationName: "Fresa",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/yogurt/griego/frutado/fresa/yogurt-griego-fresa-1.webp",
            "/images/products/yogurt/griego/frutado/fresa/yogurt-griego-fresa-2.webp",
            "/images/products/yogurt/griego/frutado/fresa/yogurt-griego-fresa-3.webp",
        ],
        description: "Yogurt Griego Fresa de 250 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Taper de Plástico"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Griego"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Taper de plástico de 250 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "15 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Tiene una textura espesa, suave y cremosa.
            Presenta un sabor intenso y lácteo, con un toque ligeramente ácido.
            Es rico en proteínas y calcio, pero también puede tener un mayor contenido de grasa saturada.
            Aporta saciedad y es ideal dentro de dietas equilibradas.
            Debe mantenerse refrigerado para conservar su frescura y propiedades.
        `,
        uses: [
            {
                title: "Acompañamiento en Desayunos",
                content: "Se puede consumir solo o con frutas, miel, granola o frutos secos."
            },
            {
                title: "En tostadas y ensaladas",
                content: "Como topping o como base cremosa."
            },
            {
                title: "En postres y helados",
                content: "Ideal para preparar helado de yogurt griego o cheescakes más ligeros."
            },
            {
                title: "En cocina saludable",
                content: "Se usa como alternativa a la mayonesas o crema agria"
            }
        ],
        relatedProducts: [
            {
                id: "62",
                name: "Yogurt Griego",
                presentationName: "Grande",
                imageUrl: "/images/products/yogurt/griego/natural/1kg/yogurt-griego-natural-1kg-1.webp"
            },
            {
                id: "63",
                name: "Yogurt Griego",
                presentationName: "Mediano",
                imageUrl: "/images/products/yogurt/griego/natural/500gr/yogurt-griego-natural-500gr-1.webp"
            },
            {
                id: "64",
                name: "Yogurt Griego",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/griego/natural/250gr/yogurt-griego-natural-250gr-1.webp"
            },
            {
                id: "66",
                name: "Yogurt Griego",
                presentationName: "Arándano",
                imageUrl: "/images/products/yogurt/griego/frutado/arandano/yogurt-griego-arandano-1.webp"
            },
            {
                id: "67",
                name: "Yogurt Griego",
                presentationName: "Aguaymanto",
                imageUrl: "/images/products/yogurt/griego/frutado/aguaymanto/yogurt-griego-aguaymanto-1.webp"
            }
        ]
    },
    {
        id: "66",
        name: "Yogurt Griego",
        presentationName: "Arándano",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/yogurt/griego/frutado/arandano/yogurt-griego-arandano-1.webp",
            "/images/products/yogurt/griego/frutado/arandano/yogurt-griego-arandano-2.webp",
            "/images/products/yogurt/griego/frutado/arandano/yogurt-griego-arandano-3.webp",
        ],
        description: "Yogurt Griego Arándano de 250 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Taper de Plástico"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Griego"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Taper de plástico de 250 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "15 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Tiene una textura espesa, suave y cremosa.
            Presenta un sabor intenso y lácteo, con un toque ligeramente ácido.
            Es rico en proteínas y calcio, pero también puede tener un mayor contenido de grasa saturada.
            Aporta saciedad y es ideal dentro de dietas equilibradas.
            Debe mantenerse refrigerado para conservar su frescura y propiedades.
        `,
        uses: [
            {
                title: "Acompañamiento en Desayunos",
                content: "Se puede consumir solo o con frutas, miel, granola o frutos secos."
            },
            {
                title: "En tostadas y ensaladas",
                content: "Como topping o como base cremosa."
            },
            {
                title: "En postres y helados",
                content: "Ideal para preparar helado de yogurt griego o cheescakes más ligeros."
            },
            {
                title: "En cocina saludable",
                content: "Se usa como alternativa a la mayonesas o crema agria"
            }
        ],
        relatedProducts: [
            {
                id: "62",
                name: "Yogurt Griego",
                presentationName: "Grande",
                imageUrl: "/images/products/yogurt/griego/natural/1kg/yogurt-griego-natural-1kg-1.webp"
            },
            {
                id: "63",
                name: "Yogurt Griego",
                presentationName: "Mediano",
                imageUrl: "/images/products/yogurt/griego/natural/500gr/yogurt-griego-natural-500gr-1.webp"
            },
            {
                id: "64",
                name: "Yogurt Griego",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/griego/natural/250gr/yogurt-griego-natural-250gr-1.webp"
            },
            {
                id: "65",
                name: "Yogurt Griego",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/griego/frutado/fresa/yogurt-griego-fresa-1.webp"
            },
            {
                id: "67",
                name: "Yogurt Griego",
                presentationName: "Aguaymanto",
                imageUrl: "/images/products/yogurt/griego/frutado/aguaymanto/yogurt-griego-aguaymanto-1.webp"
            }
        ]
    },
    {
        id: "67",
        name: "Yogurt Griego",
        presentationName: "Aguaymanto",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/yogurt/griego/frutado/aguaymanto/yogurt-griego-aguaymanto-1.webp",
            "/images/products/yogurt/griego/frutado/aguaymanto/yogurt-griego-aguaymanto-2.webp",
            "/images/products/yogurt/griego/frutado/aguaymanto/yogurt-griego-aguaymanto-3.webp",
        ],
        description: "Yogurt Griego Aguaymanto de 250 gr",
        specifications: [
            {
                name: "Envasado",
                value: "Taper de Plástico"
            },
            {
                name: "Tipo de Producto",
                value: "Yogurt Griego"
            },
            {
                name: "Contenido",
                value: "250 gr"
            },
            {
                name: "Formato",
                value: "Taper de plástico de 250 gr"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "15 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        featuresDetails: `Tiene una textura espesa, suave y cremosa.
            Presenta un sabor intenso y lácteo, con un toque ligeramente ácido.
            Es rico en proteínas y calcio, pero también puede tener un mayor contenido de grasa saturada.
            Aporta saciedad y es ideal dentro de dietas equilibradas.
            Debe mantenerse refrigerado para conservar su frescura y propiedades.
        `,
        uses: [
            {
                title: "Acompañamiento en Desayunos",
                content: "Se puede consumir solo o con frutas, miel, granola o frutos secos."
            },
            {
                title: "En tostadas y ensaladas",
                content: "Como topping o como base cremosa."
            },
            {
                title: "En postres y helados",
                content: "Ideal para preparar helado de yogurt griego o cheescakes más ligeros."
            },
            {
                title: "En cocina saludable",
                content: "Se usa como alternativa a la mayonesas o crema agria"
            }
        ],
        relatedProducts: [
            {
                id: "62",
                name: "Yogurt Griego",
                presentationName: "Grande",
                imageUrl: "/images/products/yogurt/griego/natural/1kg/yogurt-griego-natural-1kg-1.webp"
            },
            {
                id: "63",
                name: "Yogurt Griego",
                presentationName: "Mediano",
                imageUrl: "/images/products/yogurt/griego/natural/500gr/yogurt-griego-natural-500gr-1.webp"
            },
            {
                id: "64",
                name: "Yogurt Griego",
                presentationName: "Pequeño",
                imageUrl: "/images/products/yogurt/griego/natural/250gr/yogurt-griego-natural-250gr-1.webp"
            },
            {
                id: "65",
                name: "Yogurt Griego",
                presentationName: "Fresa",
                imageUrl: "/images/products/yogurt/griego/frutado/fresa/yogurt-griego-fresa-1.webp"
            },
            {
                id: "66",
                name: "Yogurt Griego",
                presentationName: "Arándano",
                imageUrl: "/images/products/yogurt/griego/frutado/arandano/yogurt-griego-arandano-1.webp"
            },
        ]
    },
    {
        id: "68",
        name: "Mantequilla",
        meditionUnit: "500 gr",
        imagesUrls: [
            "/images/products/mantequilla/500gr/mantequilla-500gr-1.webp",
            "/images/products/mantequilla/500gr/mantequilla-500gr-2.webp",
            "/images/products/mantequilla/500gr/mantequilla-500gr-3.webp",
            "/images/products/mantequilla/500gr/mantequilla-500gr-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Taper"
            },
            {
                name: "Tipo de Producto",
                value: "Mantequilla"
            },
            {
                name: "Contenido",
                value: "500 gramos"
            },
            {
                name: "Formato",
                value: "Taper de 500 gramos"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "15 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        description: "Mantequilla de 500 gr",
        featuresDetails: `Producto graso obtenido al batir la crema de leche.
            De color amarillo pálido o blanco, según la alimentación de la vaca.
            Tiene textura sólida y cremosa a temperatura fría.
            Aporta vitaminas A, D y E, además de energía.
        `,
        uses: [
            {
                title: "Cocina y repostería",
                content: "Base para tortas, galletas, panes y masas."
            },
            {
                title: "Para cocinar",
                content: "Ideal para saltear, freír o dorar alimentos por su sabor y aroma."
            },
            {
                title: "Como acompañamiento",
                content: "Untada en panes, tostadas o panqueques."
            },
            {
                title: "En salsas",
                content: "Como la mantequilla derretida o la salsa a la holandesa."
            },
            {
                title: "En purés y verduras",
                content:"Para dar brillo, sabor y suavidad."
            }
        ],
        relatedProducts: [
            {
                id: "69",
                name: "Mantequilla",
                presentationName: "250 gr",
                imageUrl: "/images/products/mantequilla/250gr/mantequilla-250gr-1.webp"
            },
            {
                id: "70",
                name: "Leche Fresca",
                presentationName: "Pasteurizada",
                imageUrl: "/images/products/leche/fresca/pasteurizada/1lt/leche-fresca-pasteurizada-1lt-1.webp"
            },
            {
                id: "71",
                name: "Crema de Leche",
                presentationName: "50% Grasa",
                imageUrl: "/images/products/crema-de-leche/50/crema-de-leche-50-1.webp"
            },
            {
                id: "72",
                name: "Crema de Leche",
                presentationName: "35% Grasa",
                imageUrl: "/images/products/crema-de-leche/35/crema-de-leche-35-1.webp"
            },
            {
                id: "42",
                name: "Yogurt",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural-sin-azucar/yogurt-batido-natural-sin-azucar-1.webp"
            }
        ]
    },
    {
        id: "69",
        name: "Mantequilla",
        meditionUnit: "250 gr",
        imagesUrls: [
            "/images/products/mantequilla/250gr/mantequilla-250gr-1.webp",
            "/images/products/mantequilla/250gr/mantequilla-250gr-2.webp",
            "/images/products/mantequilla/250gr/mantequilla-250gr-3.webp",
            "/images/products/mantequilla/250gr/mantequilla-250gr-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Taper"
            },
            {
                name: "Tipo de Producto",
                value: "Mantequilla"
            },
            {
                name: "Contenido",
                value: "250 gramos"
            },
            {
                name: "Formato",
                value: "Taper de 250 gramos"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "15 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        description: "Mantequilla de 250 gr",
        featuresDetails: `Producto graso obtenido al batir la crema de leche.
            De color amarillo pálido o blanco, según la alimentación de la vaca.
            Tiene textura sólida y cremosa a temperatura fría.
            Aporta vitaminas A, D y E, además de energía.
        `,
        uses: [
            {
                title: "Cocina y repostería",
                content: "Base para tortas, galletas, panes y masas."
            },
            {
                title: "Para cocinar",
                content: "Ideal para saltear, freír o dorar alimentos por su sabor y aroma."
            },
            {
                title: "Como acompañamiento",
                content: "Untada en panes, tostadas o panqueques."
            },
            {
                title: "En salsas",
                content: "Como la mantequilla derretida o la salsa a la holandesa."
            },
            {
                title: "En purés y verduras",
                content:"Para dar brillo, sabor y suavidad."
            }
        ],
        relatedProducts: [
            {
                id: "68",
                name: "Mantequilla",
                presentationName: "500 gr",
                imageUrl: "/images/products/mantequilla/500gr/mantequilla-500gr-1.webp"
            },
            {
                id: "70",
                name: "Leche Fresca",
                presentationName: "Pasteurizada",
                imageUrl: "/images/products/leche/fresca/pasteurizada/1lt/leche-fresca-pasteurizada-1lt-1.webp"
            },
            {
                id: "71",
                name: "Crema de Leche",
                presentationName: "50% Grasa",
                imageUrl: "/images/products/crema-de-leche/50/crema-de-leche-50-1.webp"
            },
            {
                id: "72",
                name: "Crema de Leche",
                presentationName: "35% Grasa",
                imageUrl: "/images/products/crema-de-leche/35/crema-de-leche-35-1.webp"
            },
            {
                id: "42",
                name: "Yogurt",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural-sin-azucar/yogurt-batido-natural-sin-azucar-1.webp"
            }
        ]
    },
    {
        id: "70",
        name: "Leche Fresca",
        presentationName: "Pasteurizada",
        meditionUnit: "1 litro",
        imagesUrls: [
            "/images/products/leche/fresca/pasteurizada/1lt/leche-fresca-pasteurizada-1lt-1.webp",
            "/images/products/leche/fresca/pasteurizada/1lt/leche-fresca-pasteurizada-1lt-2.webp",
            "/images/products/leche/fresca/pasteurizada/1lt/leche-fresca-pasteurizada-1lt-3.webp",
            "/images/products/leche/fresca/pasteurizada/1lt/leche-fresca-pasteurizada-1lt-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Botella"
            },
            {
                name: "Tipo de Producto",
                value: "Leche Fresca Pasteurizada"
            },
            {
                name: "Contenido",
                value: "1 Litro"
            },
            {
                name: "Formato",
                value: "Botella de 1 litro"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "10 a 12 días"
            },
            {
                name: "Advertencias",
                value: "---"
            }
        ],
        description: "Leche Fresca Pasteurizada de 1 litro",
        featuresDetails: `Contiene aproximadamente 3 a 3.5% de grasa, lo que le da su sabor cremoso y textura suave.
            Es rica en calcio, proteínas y vitaminas (A, D y B12).
            Debe mantenerse refrigerada para conservar su frescura y evitar su descomposición.`,
        uses: [
            {
                title: "Bebidas frías o calientes",
                content: "Ideal para desayunos y cenas."
            },
            {
                title: "Postres",
                content: "Base para preparar flanes, natillas, arroz con leche, y otros dulces."
            },
            {
                title: "Bebidas con café o cacao",
                content: "Se usa en cafés con leche, lattes, capuchinos y chocolates calientes."
            },
            {
                title: "Cocina general",
                content: "En salsas, cremas o purés para dar textura y sabor."
            },
            {
                title: "Batidos o licuados",
                content: "Combinada con frutas o avenas para bebidas nutritivas."
            }
        ],
        relatedProducts: [
            {
                id: "71",
                name: "Crema de Leche",
                presentationName: "50% Grasa",
                imageUrl: "/images/products/crema-de-leche/50/crema-de-leche-50-1.webp"
            },
            {
                id: "72",
                name: "Crema de Leche",
                presentationName: "35% Grasa",
                imageUrl: "/images/products/crema-de-leche/35/crema-de-leche-35-1.webp"
            },
            {
                id: "41",
                name: "Yogurt natural",
                presentationName: "Sin azúcar",
                imageUrl: "/images/products/yogurt/batido/natural-sin-azucar/yogurt-batido-natural-sin-azucar-1.webp"
            },
            {
                id: "42",
                name: "Yogurt",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "68",
                name: "Mantequilla",
                presentationName: "500 gr",
                imageUrl: "/images/products/mantequilla/500gr/mantequilla-500gr-1.webp"
            }
        ]
    },
    {
        id: "71",
        name: "Crema de Leche",
        presentationName: "50% Grasa",
        meditionUnit: "1 litro",
        imagesUrls: [
            "/images/products/crema-de-leche/50/crema-de-leche-50-1.webp",
            "/images/products/crema-de-leche/50/crema-de-leche-50-2.webp",
            "/images/products/crema-de-leche/50/crema-de-leche-50-3.webp",
            "/images/products/crema-de-leche/50/crema-de-leche-50-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Bolsa"
            },
            {
                name: "Tipo de Producto",
                value: "Crema de Leche"
            },
            {
                name: "Contenido",
                value: "1 Litro"
            },
            {
                name: "Formato",
                value: "Bolsa de 1 litro"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "15 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        description: "Crema de Leche 50% Grasa de 1 litro",
        featuresDetails: "Es la parte grasa que se separa de la leche. Tiene textura espesa y sabor suave. Aporta vitamina A, calcio y energía. Su color es blanco o ligeramente amarillento. Se puede batir o cocinar sin que se corte fácilmente.",
        uses: [
            {
                title: "En postres",
                content: "Chantilly, mousses, helados y tortas."
            },
            {
                title: "En salsas",
                content: "Para pastas, carnes y guisos."
            },
            {
                title: "En sopas y cremas",
                content: "Aporta suavidad y espesor."
            },
            {
                title: "En bebidas",
                content: "Café, chocolate caliente o batidos."
            },
            {
                title: "En cocina general",
                content: "Para dar textura cremosa y sabor más rico a los platos."
            }
        ],
        relatedProducts: [
            {
                id: "72",
                name: "Crema de Leche",
                presentationName: "35% Grasa",
                imageUrl: "/images/products/crema-de-leche/35/crema-de-leche-35-1.webp"
            },
            {
                id: "41",
                name: "Yogurt natural",
                presentationName: "Sin azúcar",
                imageUrl: "/images/products/yogurt/batido/natural-sin-azucar/yogurt-batido-natural-sin-azucar-1.webp"
            },
            {
                id: "42",
                name: "Yogurt",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "70",
                name: "Leche Fresca",
                presentationName: "Pasteurizada",
                imageUrl: "/images/products/leche/fresca/pasteurizada/1lt/leche-fresca-pasteurizada-1lt-1.webp"
            },
            {
                id: "68",
                name: "Mantequilla",
                presentationName: "500 gr",
                imageUrl: "/images/products/mantequilla/500gr/mantequilla-500gr-1.webp"
            }
        ]
    },
    {
        id: "72",
        name: "Crema de Leche",
        presentationName: "35% Grasa",
        meditionUnit: "1 litro",
        imagesUrls: [
            "/images/products/crema-de-leche/50/crema-de-leche-50-1.webp",
            "/images/products/crema-de-leche/50/crema-de-leche-50-2.webp",
            "/images/products/crema-de-leche/50/crema-de-leche-50-3.webp",
            "/images/products/crema-de-leche/50/crema-de-leche-50-4.webp"
        ],
        specifications: [
            {
                name: "Envasado",
                value: "Bolsa"
            },
            {
                name: "Tipo de Producto",
                value: "Crema de Leche"
            },
            {
                name: "Contenido",
                value: "1 Litro"
            },
            {
                name: "Formato",
                value: "Bolsa de 1 litro"
            },
            {
                name: "Conservación",
                value: "De 2°C a 6°C"
            },
            {
                name: "Vida Útil",
                value: "15 días"
            },
            {
                name: "Advertencias",
                value: "Alto en grasas saturadas"
            }
        ],
        description: "Crema de Leche 35% Grasa de 1 litro",
        featuresDetails: "Es la parte grasa que se separa de la leche. Tiene textura espesa y sabor suave. Aporta vitamina A, calcio y energía. Su color es blanco o ligeramente amarillento. Se puede batir o cocinar sin que se corte fácilmente.",
        uses: [
            {
                title: "En postres",
                content: "Chantilly, mousses, helados y tortas."
            },
            {
                title: "En salsas",
                content: "Para pastas, carnes y guisos."
            },
            {
                title: "En sopas y cremas",
                content: "Aporta suavidad y espesor."
            },
            {
                title: "En bebidas",
                content: "Café, chocolate caliente o batidos."
            },
            {
                title: "En cocina general",
                content: "Para dar textura cremosa y sabor más rico a los platos."
            }
        ],
        relatedProducts: [
            {
                id: "71",
                name: "Crema de Leche",
                presentationName: "50% Grasa",
                imageUrl: "/images/products/crema-de-leche/50/crema-de-leche-50-1.webp"
            },
            {
                id: "41",
                name: "Yogurt natural",
                presentationName: "Sin azúcar",
                imageUrl: "/images/products/yogurt/batido/natural-sin-azucar/yogurt-batido-natural-sin-azucar-1.webp"
            },
            {
                id: "42",
                name: "Yogurt",
                presentationName: "Natural",
                imageUrl: "/images/products/yogurt/batido/natural/yogurt-batido-natural-1.webp"
            },
            {
                id: "70",
                name: "Leche Fresca",
                presentationName: "Pasteurizada",
                imageUrl: "/images/products/leche/fresca/pasteurizada/1lt/leche-fresca-pasteurizada-1lt-1.webp"
            },
            {
                id: "68",
                name: "Mantequilla",
                presentationName: "500 gr",
                imageUrl: "/images/products/mantequilla/500gr/mantequilla-500gr-1.webp"
            }
        ]
    }
];