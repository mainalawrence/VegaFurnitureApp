export interface Product {
    id: string,
    name: string
    price: number,
    color: string,
    type: string,
    quantity?: number | 1,
    subTotal?: number,
    size?: "large" | "medium" | "small",
    description: String,
}
