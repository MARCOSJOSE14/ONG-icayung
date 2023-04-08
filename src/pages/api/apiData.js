import { pool } from 'config/db'

export default async function apiData (req, res) {
  if (req.method === 'GET') {
    try {
      const [resp] = await pool.query('CALL Sp_Data')
      return res.status(200).json({ nosotros: resp[0], actividades: resp[1], imageAct: resp[2], imageIni: resp[3], volunt: resp[4] })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ titulo: 'Error', message: 'Ha ocurrido un error al buscar la primera cuenta' })
    }
  } else {
    return res.status(405).end()
  }
}
