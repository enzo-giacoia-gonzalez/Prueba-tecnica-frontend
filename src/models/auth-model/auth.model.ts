export interface AuthResponse {
        token: string;
        user: {
            email: string,
            role: string,
            id: string
        }
}