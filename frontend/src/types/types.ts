export type AuthData = {
    fullName?: string,
    email: string,
    password: string,
    operationType: 'SignUp' | 'SignIn' | 'Profile' | 'Password' 
}

export type ChangeData = Partial<AuthData> & {
    operationType: string,
    newPassword?: string,
};
