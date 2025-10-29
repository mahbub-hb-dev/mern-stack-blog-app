import bcrypt from "bcryptjs";

export const encryptPassword = async (password : string) => {
    return await bcrypt.hashSync(password, 10);
}
