# starhorizonsdemo
demo login star horizons

# Working demo: https://starhorizonsdemo.web.app

R. — Today at 1:28 PM
Mira, lo que necesito es simple
estamos con el tema de que el user conecte la wallet y verifique con discord
y firme una transacción
si eres capaz de dejar el front con 1 boton al centro de verificar discord, al verificar y tener la wallet conectada, aparece el de firmar la transacción
...
R. — Today at 1:45 PM
escucha, voy a full y se te ve competente
serias capaz de llevarlo? a mi me llevará semanas con todo lo que llevo a la vez
les hablo de ti al resto, si lo consigues me pasas el git, y lo instalo en los servers
con los botones me basta, nosotros le damos forma
...


# simil
- https://www.youtube.com/watch?v=9jUgin-Q56Q
- https://verify.staratlas.club/

#todo
- install https://github.com/solana-labs/wallet-adapter
- install https://discord.com/developers/docs/topics/oauth2


# flow guide
- https://discordjs.guide/oauth2/#implicit-grant-flow

# go to discord app pannel
- https://discord.com/developers/applications
- # redirect url
- https://starhorizonsdemo.web.app/callback // or https://your_url/callback
- paste in /functions/src/index.ts line 56
- 
- copy settings > oauth2 > general > CLIENT ID
- paste in /functions/src/index.ts line 54
- 
- copy settings > oauth2 > general > CLIENT SECRET
- paste in /functions/src/index.ts line 55
- 
- # application scopes authorization 
- goto settings > oauth2 > url generator 
- - choose scopes, ex. identify, email
- select redirect
- copy generated url
- replace in ./src/Navigation.tsx line 122

# deploy
- firebase login
- firebase init
- - hosting
- - functions

# to deploy functions
- firebase deploy --only functions

- - on deploy will get function url
- - copy & paste on ./src/Callback.ts line 14
- ADD to the end the param ?code=${code} // this is used to pass code token to function 

# to deploy hosting
- yarn prebuild
- yarn hosting // includes building and firebase deploy





# how to test:
- yarn // for node_modules installation
- yarn prebuild // for tailwind prebuild
- yarn start // localtest

# notes:
- DISCORD_PROFILE localstorage key hold the callback json from discord.com/api/users/@me
- - possible object depending on request https://discord.com/developers/docs/resources/user#user-object

# routes
- '/' component Navigation
- '/callback' component Callback
-  - callback is for discord auth callback flow, it provide 'code' token from discord, and is used to call a cloudfunction 

# functions (cloud functions gcp)
- discordRequest = functions.https.onRequest // it handle a private request with client_id & client_secret provided by discord app pannel
