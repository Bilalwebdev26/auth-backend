import { User } from "../models/user.model.js";

const registerUser =asyncHandler( async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    throw new ApiError(404, "Data Not found");
  }
  const checkEmailDublication = await User.findOne({ email });
  if (checkEmailDublication) {
    throw new ApiError(400, "Email Already Exist");
  }
  const user = await User.create({
    firstName,
    lastName,
    email,
    password
  });
  const createUser = await User.findById(user._id).select("password")
  if(!createUser){
    throw new ApiError(500,"Server Error while creating User")
  }
  return res.status(201).json(new ApiResponse(201,"User Created Successfully",createUser))
});
