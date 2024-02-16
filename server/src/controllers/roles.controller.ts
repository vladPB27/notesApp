import { RequestHandler } from "express"
import { getConnection } from "./../database"

export const getRoles: RequestHandler = async (req, res) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM roles")
        // console.log(result);
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}

export const addRol: RequestHandler = async (req, res) => {
    try {
        // console.log(req.body);
        const { sigla, nombre } = req.body
        const datos = {sigla,nombre}
        const conn = await getConnection();
        const result = await conn.query("INSERT INTO roles SET ?",datos);
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}