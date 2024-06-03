import jwt, {sign} from "jsonwebtoken";
import {JwtPayloadModel, TeacherModel} from '../models';
import {teacherService} from ".";

export const tokenService = {
    generateTokens(userId: number) : { accessToken: string, refreshToken: string } {
        const accessToken = sign(
            { userId: userId },
            process.env.JWT_ACCESS_SECRET as jwt.Secret,
            { expiresIn: '30m' }
        );

        const refreshToken = sign(
            { userId: userId },
            process.env.JWT_REFRESH_SECRET as jwt.Secret,
            { expiresIn: '30d' }
        );
        return { accessToken, refreshToken };
    },

    async saveToken(userId: number, refreshToken: string) : Promise<TeacherModel | null> {
        await teacherService.update(userId, { refreshToken: refreshToken });
        return teacherService.getById(userId);
    },

    async removeToken(userId: number) : Promise<TeacherModel | null> {
        await teacherService.update(userId, { refreshToken: null });
        return teacherService.getById(userId);
    },

    async getToken(userId: number) : Promise<string | null> {
        const teacher: TeacherModel | null = await teacherService.getById(userId);
        return teacher ? teacher.refreshToken : null;
    },

    validateAccessToken(token: string) : number | null {
        try {
            const user = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string) as JwtPayloadModel;
            return user.userId;
        } catch (error) {
            return null;
        }
    },

    validateRefreshToken(token: string) : number | null {
        try {
            const user = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string) as JwtPayloadModel;
            return user.userId;
        } catch (error) {
            return null;
        }
    }
};