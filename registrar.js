const usuarios = []

function registrar (email, senha) {
    console.log(`Olá! Você se registrou com o email ${email}`)
    const usuario = {
        email: email,
        senha: senha
    }
    usuarios.push(usuario)
}