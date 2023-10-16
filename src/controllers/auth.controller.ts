import { Response, Request } from 'express';
import { User } from '../models/user.model';

const login = async (req: Request, res: Response) => {
  try {
    const { username , password } = req.body;
    console.log(username)
    const existsUser = await User.findOne({ username: String(username).toLowerCase() });
    if (!existsUser) {
      return res.status(400).json({
        message: 'Username or password are incorrect'
      })
    }

    const isValid = password === existsUser.password;
    if (!isValid) {
      return res.status(400).json({
        message: 'Username or password are incorrect'
      })
    }

    res.json(existsUser);

  } catch (error) {
    res.status(500).json({
      message: (error instanceof Error) ? error.message : 'Error getting films'
    });
    
  }
}

const register = async (req: Request, res: Response) => {
  try {

    const { username, password } = req.body;
   
    const existsUser = await User.findOne({ username: String(username).toLowerCase() });
    if (existsUser) {
      return res.status(400).json({
        message: 'Username or password are incorrect'
      })
    }

    const user = new User({
      username,
      password
    })
    
    await user.save();

    res.json(user);

  } catch (error) {
    res.status(500).json({
      message: (error instanceof Error) ? error.message : 'Error creating user'
    });
    
  }
}

export { login, register };