import { Router } from 'express';
import  { getFilms, editFilmById, deleteFilmById } from '../controllers/films.controller';

const router = Router();

router.get('/', getFilms );
router.put('/edit', editFilmById );
router.delete('/delete/:id', deleteFilmById );

export default router;