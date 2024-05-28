import { sequelize } from "../db";
import { Student, Teacher, Info, Subject, RSO, Group, Deadline } from "../index";

async function syncDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Використовуйте { force: true } для видалення існуючих таблиць перед створенням нових
        Teacher.sync()
        await sequelize.sync({ force: true });
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        await sequelize.close();
    }
}

syncDatabase();