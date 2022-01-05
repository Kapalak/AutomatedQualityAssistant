export default {
    loginPage:{
        title:"//h1[text()='Se connecter']",
        password: "//input[@name='password']",
        signInButton: "//button[text()='Se connecter']",
        alertText: "//span[text()='Nom d'utilisateur ou mot de passe invalide.']"
    },
    homePage: {
        anonymousHiText: "//div[text()='Bienvenue :)']",
        userHiText: "//div[text()='Bonjour, Aymen :)']",
        connectMenuButton: "//span[text()='Me connecter']"
    }
}