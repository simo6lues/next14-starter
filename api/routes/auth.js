const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")

//REGISTER
router.post("/register", async (req, res) =>{
    try {
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
        // const newUser = new User({
        //     username: req.body.username,
        //     email: req.body.email,
        //     password: hashedPassword,
            
        // })
        // const user = await newUser.save();
        // res.status(200).json(user);

        const { username, email, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hashSync(password, salt)
        const newUser = new User({ username, email, password: hashedPassword})
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user  =await User.findOne({ username: req.body.username })
        !user && res.status(400).json("Wrong Credentials!")

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json("Wrong credentials!")

        const {password, ...others } = user._doc;
        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;