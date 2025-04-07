export type Login = {
    email: string,
    password: string   
};

export type AccountInfo = Login & {
    fullName: string,
};

export type ChangeData = Partial<AccountInfo> & {
    newPassword?: string,
    updateType: string,
};

