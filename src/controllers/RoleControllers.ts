import { Request, Response } from "express";
import Role from "../database/models/Role";

const GetRole = async (req: Request, res: Response):Promise<Response> => {
    try {
        const roles = await Role.findAll({
            where: {
                active: true
            }
        });

        return res.status(200).send({
            status: 200,
            message: 'OK',
            data: roles
        })
    } catch (error:any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        } 

        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            errors: error
        });
    }
}

const CreateRole = async(req: Request, res:Response):Promise<Response> => {
    try {
        const { roleName, active } = req.body;

        const create = await Role.create({
            roleName,
            active
        });

        return res.status(201).send({
            status: 201,
            message: 'Created',
            data: create
        })
    } catch (error:any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        } 

        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            errors: error
        });
    }
}

const GetRoleById = async (req: Request, res: Response):Promise<Response> => {  
    try {
        const { id } = req.params;

        const role = await Role.findByPk(id);

        if (!role) {
            return res.status(404).send({
                status: 404,
                message: "Data Not Found",
                data: null
            });
        }

        return res.status(200).send({
            status: 200,
            message: "Get Role By Id" + id,
            data: role
        });
    } catch (error:any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        } 

        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            errors: error
        });
    }
}

const UpdateRole = async (req: Request, res: Response):Promise<Response> => {
    try {
        const { id } = req.params;
        const { roleName, active } = req.body;

        const role = await Role.findByPk(id);

        if (!role) {
            return res.status(404).send({
                status: 404,
                message: "Data Not Found",
                data: null
            });
        }

        role.roleName = roleName;
        role.active = active;

        await role.save();

        return res.status(200).send({
            status: 200,
            message: "OK",
            data: role
        });
    } catch (error:any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        } 

        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            errors: error
        });
    }
}

const DeleteRole = async (req: Request, res: Response):Promise<Response> => {  
    try {
        const { id } = req.params;

        const role = await Role.findByPk(id);

        if (!role) {
            return res.status(404).send({
                status: 404,
                message: "Data Not Found",
                data: null
            });
        }

        await role.destroy();

        return res.status(200).send({
            status: 200,
            message: "Deleted",
            data: role
        });
    } catch (error:any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        } 

        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            errors: error
        });
    }
}

export default { GetRole, CreateRole,  GetRoleById, UpdateRole, DeleteRole }