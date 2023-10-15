import { Router } from 'express';
import  { getFilms, getFilmById, deleteFilmById } from '../controllers/films.controller';

const router = Router();

router.get('/', getFilms );
router.get('/:id', getFilmById );
router.delete('/:id', deleteFilmById );

export default router;