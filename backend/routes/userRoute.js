import { loginUser , registerUser , adminLogin} from "../controller/userController.js";
import express from "express"

const userRouter = express.Router();


userRouter.post("/login" , loginUser);
userRouter.post("/register" , registerUser);
userRouter.post("/admin" , adminLogin);

export default userRouter;