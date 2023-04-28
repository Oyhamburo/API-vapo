import { UserService } from '../services/index.service.js';

const Service = UserService.getInstance();
const controller = {}


controller.isLogin = async (req, res) => {
    let logger = req.session.login
    console.log(logger)
    if (req.session.login) {
        let name = req.session.name
        let email = req.session.email
        let lastName = req.session.email
        res.status(200).json({ name: name, email: email })
    }else{
        res.status(400).json()
    }
}

controller.signUp = async (req, res) => {
    const { body } = req;
    const newUser = await Service.createUser(body);

    if (newUser) {
        res.status(200).json({ "success": "User added with ID " + newUser._id })
    } else {
        res.status(400).json({ "error": "there was an error, please verify the body content match the schema" })
    }

}

controller.signIn = async (req, res) => {
    const { email, password } = req.body;
    const loggedUser = await Service.loginUser({
        email: email,
        password: password
    })

    // guardo en session 
    if (loggedUser) {
        const { name, lastName, _id, email } = loggedUser
        req.session.login = true;
        req.session.idUser = _id
        req.session.email = email
        req.session.name = name
        req.session.lastName = lastName
        res.status(200).json({ name: name, email: email})
    } else {
        req.session.login = false;
        res.status(400).json()
    }
}

controller.logOutView = async (req, res) => {
    if (!req.session.login) {
        // no esta logeado
        res.send({ logi: 'no esta logeado' })
    } else {
        req.session.destroy((err) => {
            if (err) {
                res.json(err);
            } else {
                res.send({ status: true });
            }
        })
    }
}

controller.getUser = async (req, res) => {
    res.send(req.session)
}

export { controller as userController }