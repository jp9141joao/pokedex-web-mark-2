export class Utils {
    public static IsValidFullName(name: any): boolean {
        try {
            const parts = name.trim().split(/\s+/);
            if (parts.length < 2) return false;

            const isValid = parts.every((part: any) => {
                if (part.length < 2) return false;
                return /^[a-zA-ZÀ-ÖØ-öø-ÿ'-]+$/.test(part);
            });

            return isValid && typeof name == 'string' && name.length < 30;
        } catch {
            return false;
        }
    }

    public static IsValidEmail(email: any): boolean {
        try {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailPattern.test(email) && typeof email == 'string' && email.length <= 255;
        } catch {
            return false;
        }
    }

    public static IsValidPassword(password: any): boolean {
        try {
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
            return passwordPattern.test(password) && typeof password == 'string' && password.length <= 255;
        } catch {
            return false;
        }
    }
}
