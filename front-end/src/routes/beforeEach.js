import userService from "../services/userService"

export default async (to, from, next) => {
    document.title = `${to.name} - Pro showroom`
    if (to.name !== 'Anúncios' && to.name !== 'Login' && to.name !== 'Criar conta') {
        try {
            const result = await userService.checkAuth({ jwt: localStorage.getItem('jwt') });
            next();
        } catch (err) {
            next({ name: 'Anúncios' })
        }
    } else {
        next();
    }
}