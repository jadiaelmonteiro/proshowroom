import userService from "../services/userService"

export default async (to, from, next) => {
    document.title = `${to.name} - Pro showroom`
    console.log(to.name);
    console.log(to.path);
    if (to.name !== 'Anúncios' && to.name !== 'Login' && to.name !== 'Criar conta') {
        try {
            const result = await userService.checkAuth({ jwt: localStorage.getItem('jwt') });
            console.log(result);
            next();
        } catch (err) {
            console.log(err);
            next({ name: 'Anúncios' })
        }
    } else {
        console.log('oi');
        next();
    }
}