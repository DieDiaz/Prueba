import { pool } from "../db.js";

export const getexams = async(req, res) => {
    try{
    const [result] = await pool.query('select * from examenes order by fecha_creacion ASC');
    res.json(result);
    }catch (error){
        return res.status(500).json({message:error.message});
    }
}

export const getexam = async(req, res) => {
    try{
    const [result] = await pool.query('select * from examenes where codigo = ?',[req.params.id]);

    if (result.length === 0)
        return res.status(404).json({message: "examen no encontrado"});
    


    res.json(result[0]);
    }catch (error){
        return res.status(500).json({message:error.message});
    }
}

export const createxams = async(req, res) => {
    try{
    const {Name} =req.body
   const [result] = await pool.query('insert into  examenes(nombre) values (?)',
[
    Name
]
);
res.json({
    id: result.insertId,
    Name,
});
}catch (error){
    return res.status(500).json({message:error.message});
}
}

export const updateexams = async(req, res) => {
    try{
    const result = await pool.query('update examenes set ? where id = ?', [req.body, req.params.id]);

    res.json(result);
    }catch (error){
        return res.status(500).json({message:error.message});
    }
}

export const deleteexams = async(req, res) => {
    try{
   const[result] = await pool.query('delete from examenes where codigo = ?',[req.params.id]);
   
   if(result.affectedRows === 0)
   return res.status(404).json({message: "examen no encontrado"});

   return res.sendStatus(204);
}catch (error){
    return res.status(500).json({message:error.message});
}
}