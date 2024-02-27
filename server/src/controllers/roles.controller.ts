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
        const datos = { sigla, nombre }
        const conn = await getConnection();
        const result = await conn.query("INSERT INTO roles SET ?", datos);
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}

export const updateRol: RequestHandler = async (req, res) => {
    try {
        const { id, sigla, nombre } = req.body
        const datos = { sigla, nombre }
        console.log(id);
        console.log(datos);

        const conn = await getConnection();
        const result = await conn.query("UPDATE roles SET ? WHERE id = ?", [datos, id]);
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}

export const deleteRol: RequestHandler = async (req, res) => {
    try {
        
        const { id } = req.params
        console.log('ID: ',id);
        const conn = await getConnection()
        const result = await conn.query("DELETE FROM roles WHERE id = ?", [id])
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}