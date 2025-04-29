import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { HttpResult } from "../models/httpResult";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AuthData, ChangeData } from "../types/types";
import { Utils } from "../utils/utils";

const SECRET_KEY = process.env.SECRET_KEY;
const prisma = new PrismaClient();

if (!SECRET_KEY) {
    throw new Error("SECRET_KEY is missing from the .env file");
}

export const authentication = async (req: Request, res: Response): Promise<void> => {
    const { fullName, email, password, operationType } = req.body as AuthData;

    if (!operationType) {
        res.status(400).json(HttpResult.Fail("None", "Operation Type was not provided."));
    }
    
    if (!email) {
        res.status(400).json(HttpResult.Fail("E-mail", "E-mail was not provided."));
        return;
    } else if (!Utils.IsValidEmail(email)) {
        res.status(400).json(HttpResult.Fail("E-mail", "E-mail is invalid or not formatted correctly."));
        return;
    };

    if (!password) {
        res.status(400).json(HttpResult.Fail("Password", "Password was not provided."));
        return;
    } else if (!Utils.IsValidPassword(password)) {
        res.status(400).json(HttpResult.Fail("Password", "Password is invalid or not formatted correctly."));
        return;
    };

    if (operationType == "SignIn") {
        try {
            const userData = await prisma.tb_user.findUnique({
                where: {
                    email: email,
                }
            });
        
            if (!userData) {
                res.status(400).json(HttpResult.Fail("Both", "Incorrect E-mail or Password."));
                return;
            }
        
            const passwordValidation = await bcrypt.compare(password, userData.password);
        
            if (!passwordValidation) {
                res.status(400).json(HttpResult.Fail("Both", "Incorrect E-mail or Password"));
                return;
            }
        
            const userId = userData.id.toString();
        
            const token = jwt.sign(
                { userId },
                SECRET_KEY!,
                { expiresIn: '1h' }
            );
        
            res.status(200).json(HttpResult.Success(token));
        } catch (error: any) {
            console.error(error);
            res.status(500).json(HttpResult.Fail("None", "An unexpected error occurred during authentication."));
        }
    } else {

        if (!fullName) {
            res.status(400).json(HttpResult.Fail("Full Name", "Full Name was not provided."));
            return;
        } else if (!Utils.IsValidFullName(fullName)) {
            res.status(400).json(HttpResult.Fail("Full Name", "Full Name is invalid or not formatted correctly."));
            return;
        };

        const doesUserExist = await prisma.tb_user.count({
            where: {
                email: email
            }
        }) > 0 ? true : false;
    
        if (doesUserExist) {
            res.status(400).json(HttpResult.Fail("E-mail", "ready a user with this E-mail."));
            return;
        }

        try {
            const passwordHashed = await bcrypt.hash(password, 10);
    
            await prisma.tb_user.create({
                data: {
                    fullName: fullName,
                    email: email,
                    password: passwordHashed
                }
            });
    
            res.status(200).json(HttpResult.Success("Account Created Successfully"));
        } catch (error: any) {
            console.error(error);
            res.status(500).json(HttpResult.Fail("None", "An unexpected error occurred during account creation"));
        }
    };
}

export const updateInfo = async (req: Request, res: Response): Promise<void> => {
    const { fullName, email, password, newPassword, operationType } = req.body as ChangeData;
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (operationType == "Profile") {
        
        if (!token) {
            res.status(401).json(HttpResult.Fail("None", "Token was not provided."));
            return;
        }

        const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };
        const userId = decoded.userId;

        if (fullName && !Utils.IsValidFullName(fullName)) {
            res.status(400).json(HttpResult.Fail("Full Name", "Full Name is invalid or not formatted correctly."));
            return;
        };
    
        if (email && !Utils.IsValidEmail(email)) {
            res.status(400).json(HttpResult.Fail("E-mail", "E-mail is invalid or not formatted correctly."));
            return;
        };

        const doesEmailExist = await prisma.tb_user.findUnique({
            where: {
                email: email
            }
        }) > 0 ? true : false;

        if (doesEmailExist) {
            res.status(400).json(HttpResult.Fail("E-mail", "There is already a user with this E-mail."));
            return;
        }

        await prisma.tb_user.update({
            data: {
                fullName: fullName,
                email: email,
            },
            where: {
                id: userId
            }
        });

        res.status(200).json(HttpResult.Success("Info account updated successfully"));

    } else {

        if (!email) {
            res.status(400).json(HttpResult.Fail("E-mail", "E-mail was not provided."));
            return;
        } else if (!Utils.IsValidEmail(email)) {
            res.status(400).json(HttpResult.Fail("E-mail", "E-mail is invalid or not formatted correctly."));
            return;
        };

        if (!password) {
            res.status(400).json(HttpResult.Fail("Password", "Password was not provided."));
            return;
        } else if (!Utils.IsValidPassword(password)) {
            res.status(400).json(HttpResult.Fail("Password", "Password is invalid or not formatted correctly."));
            return;
        };

        const userData = await prisma.tb_user.findUnique({
            where: {
                email: email,
            }
        });
    
        if (!userData) {
            res.status(400).json(HttpResult.Fail("Both", "Incorrect E-mail or Password."));
            return;
        }
    
        const passwordValidation = await bcrypt.compare(password, userData.password);
    
        if (!passwordValidation) {
            res.status(400).json(HttpResult.Fail("Both", "Incorrect E-mail or Password"));
            return;
        }

        if (!newPassword) {
            res.status(400).json(HttpResult.Fail("New Password", "New Password was not provided."));
            return;
        } else if (password == newPassword) {
            res.status(400).json(HttpResult.Fail("New Password", "New password is equal to the old one."));
            return;
        } else if (!Utils.IsValidPassword(newPassword)) {
            res.status(400).json(HttpResult.Fail("New Password", "New Password is invalid or not formatted correctly."));
            return;
        };

        const newPasswordHashed = await bcrypt.hash(newPassword, 10);

        await prisma.tb_user.update({
            data: {
                password: newPasswordHashed
            },
            where: {
                id: userData.id
            }
        });

        res.status(200).json(HttpResult.Success("Password account updated successfully"));
    }
};

