export interface User {
    firstName: string
    lastName: string
    username: string
    email: string
    password: string
    telephone: number
    address: Address
}

interface Address {
    addressLine1: string
    addressLine2: string
    city: string
    country: string
    postalCode: number
}