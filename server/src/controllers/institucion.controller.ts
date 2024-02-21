import { RequestHandler } from "express"
import { getConnection } from "./../database"

export const getDataInstitucionById: RequestHandler = async (req, res) => {
    try {
        const id = req.params.id;
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM institucion WHERE id = ?",[id])
        // console.log(result);
        return res.json(result[0])
    } catch (error) {
        return res.json(error)
    }
}
export const getDataInstitucion: RequestHandler = async (req, res) => {
    try {
        const id = req.params.id;
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM institucion")
        // console.log(result);
        return res.json(result[0])
    } catch (error) {
        return res.json(error)
    }
}

export const addDataInstitucion: RequestHandler = async (req, res) => {
    try {
        console.log(req.body);
        const { nombre_institucion, razon_social, ruc, telefono_fijo, celular,direccion,tipo_institucion,regimen_tributario } = req.body
        const datos = {nombre_institucion, razon_social, ruc, telefono_fijo, celular,direccion,tipo_institucion,regimen_tributario}
        const conn = await getConnection();
        const result = await conn.query("INSERT INTO institucion SET ?",datos);
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}
export const updateDataInstitucion: RequestHandler = async (req, res) => {
    try {
        console.log(req.body);
        const id = req.params.id;
        console.log('ID: ',id);
        
        const { nombre_institucion, razon_social, ruc, telefono_fijo, celular,direccion,tipo_institucion,regimen_tributario } = req.body
        const datos = {nombre_institucion, razon_social, ruc, telefono_fijo, celular,direccion,tipo_institucion,regimen_tributario}
        const conn = await getConnection();
        const result = await conn.query("UPDATE institucion SET ? WHERE id = ?",[req.body,id]);
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}