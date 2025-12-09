export interface Process {
    title: string;
    description: string;
    imagePath: string;
}

export const OUR_PROCESSES: Process[] = [
    {
        title: "Recepción y control de calidad",
        description: "La leche fresca llega de ganaderos locales y pasa por un estricto control de pureza y frescura.",
        imagePath: "/images/processes/reception.webp"
    },
    {
        title: "Pasteurización y preparación",
        description: "La leche se pasteuriza cuidadosamente para conservar su valor nutricional. Se ajusta su temperatura y grasa según el producto a elaborar.",
        imagePath: "/images/processes/pasteurization.webp"
    },
    {
        title: "Elaboración de quesos",
        description: "Aquí la leche se convierte en queso mediante procesos de coagulación, moldeo y prensado.",
        imagePath: "/images/processes/cheese-making.webp"
    },
    {
        title: "Elaboración de yogurt",
        description: "El yogurt se produce con leche pasteurizada y fermentación natural, logrando una textura cremosa y sabor único. Después se enfría y se bate para mantener su frescura.",
        imagePath: "/images/processes/yogurt-making.webp"
    },
    {
        title: "Área de maduración",
        description: "Quesos como el suizo y el parmesano reposan en cámaras controladas de temperatura y humedad.",
        imagePath: "/images/processes/maturation.webp"
    },
    {
        title: "Envasado y almacenamiento",
        description: "Cada producto se envasa y conserva en frío, asegurando su frescura y calidad hasta llegar al consumidor.",
        imagePath: "/images/processes/packaging.webp"
    }
]