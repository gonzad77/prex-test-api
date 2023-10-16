import { Response, Request } from 'express';
import { Film } from '../models/film.model';

const getFilms = async (req: Request, res: Response) => {
  try {
    
    const films = await Film.find({}).sort({title: -1}).exec()
    if (films.length == 0) {
      return res.status(400).json({
        message: 'No films',
        films: []
      })
    }
    
    res.json(films);

  } catch (error) {
    res.status(500).json({
      message: (error instanceof Error) ? error.message : 'Error getting films'
    });
    
  }
}

const editFilmById = async (req: Request, res: Response) => {
  try {
    const film = req.body;
    await Film.findByIdAndUpdate({_id: film._id}, film);
    res.json(film)

  } catch (error) {
    res.status(500).json({
      message: (error instanceof Error) ? error.message : 'Error getting films'
    });
    
  }
}

const deleteFilmById = async (req: Request, res: Response) => {
  try {
    const _id = req.body;
    const filmDeleted = await Film.findByIdAndRemove(_id)
    
    if(!filmDeleted) {
      return res.status(400).json({
        message: 'The film does not exist'
      })
    }
    res.json({
      message: 'Film deleted!'
    })

  } catch (error) {
    res.status(500).json({
      message: (error instanceof Error) ? error.message : 'Error deleting films'
    });
    
  }
}

export { getFilms, editFilmById, deleteFilmById };