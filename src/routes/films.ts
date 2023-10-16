import { Router } from 'express';
import  { getFilms, editFilmById, deleteFilmById } from '../controllers/films.controller';

const router = Router();

router.get('/', getFilms );
router.put('/edit', editFilmById );
router.post('/delete', deleteFilmById );

export default router;