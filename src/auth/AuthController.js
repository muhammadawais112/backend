const AuthModel = require("./AuthModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userRegister = async (req, res) => {
    const { name, email, password, password_confirm } = req.body;
    const user = await AuthModel.findOne({ email: email })
    if (user) {
        res.send({ "status": "failed", "message": "email have already exist" })
    } else {
        if (name && email && password && password_confirm) {
            if (password === password_confirm) {




                try {
                    const salt = await bcrypt.genSalt(10)
                    const hashpassword = await bcrypt.hash(password, salt)
                    const doc = new AuthModel({
                        name: name,
                        email: email,
                        password: hashpassword,

                    })

                    await doc.save()
                    const save_jwt = await AuthModel.findOne({ email: email })
                    //     gerenate token

                    const token = jwt.sign({ UserId: save_jwt._id }, process.env.SECRET_KEY, { expiresIn: "10d" })
                    res.status(201).send({ "status": "Sucessful", "message": "Register successful", "token": token, email })

                } catch (error) {
                    res.send({ "status": "failed", "message": "Unable to register" })

                }



            }
            else {
                res.send({ "status": "failed", "message": "password and confirm password not matcj" })

            }






        } else {
            res.send({ "status": "failed", "message": "email have already exist" })

        }
    }


}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email && password) {
            const user = await AuthModel.findOne({ email: email })
            if (user != null) {
                const isMatch = await bcrypt.compare(password, user.password)
                if ((email === user.email) && isMatch) {

                    const token = jwt.sign({ UserId: user._id }, process.env.SECRET_KEY, { expiresIn: "10d" })

                    res.send({ "status": "Sucessful", "message": "User login successful", "token": token, email })


                } else {
                    res.send({ "status": "failed", "message": "invalid email or password" })

                }





            } else {
                res.send({ "status": "failed", "message": "user not register" })

            }

        }
        else {
            res.send({ "status": "failed", "message": "all field filled" })

        }
    } catch (error) {

    }



}
















module.exports = { userRegister, userLogin }