const Admin = require("../models/adminModel");
const User = require("../models/user");
const Home = require("../models/homeModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const adminSignUp = async (req, res) =>{
  try {
    const checkAdmin = await Admin.findOne({email: req.body.email})
    if (checkAdmin) {
      res.send({msg: "email already in use"})
      return
    }
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, async function(err, hash) {
        const admin = { email: req.body.email, password: hash}
        const createdAdmin = await Admin.create(admin);
          const token = jwt.sign({id: createdAdmin._id}, "legacy")
          res.send({token})       
      });
  });
  } catch (error) {
    console.log("Error:", error);
  }
}


const adminLogin = async (req, res) =>{
  try {
    const admin = await Admin.findOne({email: req.body.email})
    if (admin) {
      bcrypt.compare(req.body.password, admin.password, function(err, result) {
        if (result) {
          let token = jwt.sign({id:admin._id }, "legacy")
          res.send({token})
        } else {
          res.send({msg:'Invalid Password'})
        }
      })
    } else {
      res.send({msg:"Admin not found!"});
    }
  } catch (error) {
    console.log('login Error:', error);
  }
}

const verifyAdmin = async (req, res) =>{
  if (!req.body.token) {
    res.send({msg:false});
    return
  }
  try {
    const payload = jwt.verify(req.body.token, "legacy")
    if (payload) {
      const admin = await Admin.findOne({_id: payload.id})
      if (admin) {
        const token = jwt.sign({id: admin._id}, "legacy")
        res.send(admin)

      } else {
        res.send({message: 'Invalid token'});
      }
    } else {
      res.send({ msg: "Token expired or invalid"});
    }
  } catch (error) {
    res.send({'Invalid Token': error})
  }
}

// Delete User
const deleteUser = async(req, res) =>{
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.send({msg: "user deleted"})
  } catch (error) {
   res.send({error: "cannot delete user"})
  }
}

// Add admin
const addAdmin = async(req, res) =>{
  const { username, password } = req.body;
  try {
    const newAdmin = await Admin.create({ username, password });
    res.send(newAdmin)
  } catch (error) {
    res.send({error: "An error occurred while adding an admin"})
  }
}

// Delete Admin
const deleteAdmin = async(req, res) =>{
  const { adminId } = req.params;;
  try {
    await User.findByIdAndDelete(adminId);
    res.send({msg: "Admin deleted"})
  } catch (error) {
   res.send({error: "cannot delete Admin"})
  }
}

const updateHome = async (req, res) => {
  await HomeModel.findByIdAndUpdate({_id: req.params.id}, req.body)
  res.send({msg: "Home updated successfully"})
};

const deleteHome = async (req, res) => {
  await HomeModel.deleteOne({_id: req.params.id});
  res.send({msg: "Home deleted successfully"})
};

const getAllUserHomes = async (req, res)=> {
  try {
    const homes = await HomeModel.find({userId: req.params.userId});
    console.log(homes)
    res.send(homes);
  } catch (error) {
    console.log("Error in getting user's all home", error);
  }
 
}



module.exports = {
  adminSignUp,
  adminLogin,
  verifyAdmin,
  deleteUser,
  addAdmin,
  deleteAdmin,
  updateHome,
  deleteHome,
  getAllUserHomes
}