const User = require("../models/User");

const UserController = {
  create: async (req, res) => {
    try {
      const { nome, senha, email } = req.body;
      console.log({ nome, senha, email });

      const userCreated = await User.create({ nome, senha, email });

      return res.status(200).json({
        msg: "Usuario criado com sucesso!",
        user: userCreated
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  update: async (req, res) => {
    try {
 
        const { id } = req.params;
        const {  nome, senha, email } = req.body;
        const usuarioEditado = await User.findByPk(id);

        if(usuarioEditado === null){
            res.status(404).json({
                msg:"Usuario inexistente"  
            })
        }

        usuarioEditado.nome = nome;
        usuarioEditado.senha = senha;
        usuarioEditado.email = email;

        usuarioEditado.save();
         
       
        return res.status(200).json({
            msg:"USUARIO EDITADO"  
    }
)    
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:"Contate o Roger"
        })
    }
  },
  getAll: async (req, res) => {
    try {
      const usuarios = await User.findAll();
      return res.status(200).json({
        msg: "Usuarios encontrados com sucesso!",
        usuarios: usuarios,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  getOne: async (req, res) =>{
    try {
        const { id } = req.params;
        const usuarioEncontrado = await User.findByPk(id);
        if(usuarioEncontrado == null) {
            return res.status(400).json ({
            msg: 'usuario nao encontrado!'
            })
        }

        res.status(200).json({
            msg: 'Usuario encontrado!',
            user: usuarioEncontrado
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Acione o suporte' });
       
    }
},
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const userFinded = await User.findByPk(id);
      if (userFinded == null) {
        return res.status(404).json({
          msg: "user não encontrado",
        });
      }
      await userFinded.destroy();
      return res.status(200).json({
        msg: "Usuario deletado com sucesso!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
};
module.exports = UserController;
