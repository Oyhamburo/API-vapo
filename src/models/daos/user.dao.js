import { UserSchema } from "../schemas/index.schema.js"

class DaoMongoDb {

    ID_FIELD = "_id"
    MAIL_FIELD = 'email'

    constructor() {
    }

    async createUser(object) {
        try {
            return await UserSchema.create(object);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async loginUser(object) {
        try {
            const user = await UserSchema.findOne({
                [this.MAIL_FIELD]: object.email
            });

            if (!user) {
                console.info(`User '${object.mail}' does not exist`)
                return null;
            }

            let compare = await user.comparePassword(object.password);

            if (compare) {
                return user
            } else {
                return false
            }

        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getIdByUser(mail) {
        try {
            const user = await UserSchema.findOne({
                [this.MAIL_FIELD]: mail
            })
            return user._id

        } catch (error) {
            console.error(error);
            return null;
        }
    }

}

export { DaoMongoDb as UserDAO }