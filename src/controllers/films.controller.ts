import { Response, Request } from 'express';

const getFilms = async (req: Request, res: Response) => {
  try {
    
    res.json([])

  } catch (error) {
    res.status(500).json({
      message: (error instanceof Error) ? error.message : 'Error getting films'
    });
    
  }
}

const getFilmById = async (req: Request, res: Response) => {
  try {
    
    res.json({})

  } catch (error) {
    res.status(500).json({
      message: (error instanceof Error) ? error.message : 'Error getting films'
    });
    
  }
}

const deleteFilmById = async (req: Request, res: Response) => {
  try {
    
    res.json({})

  } catch (error) {
    res.status(500).json({
      message: (error instanceof Error) ? error.message : 'Error getting films'
    });
    
  }
}

export { getFilms, getFilmById, deleteFilmById };