import * as functions from 'firebase-functions';
const axios = require('axios');
const qs = require('querystring');
// The Firebase Admin SDK to access Firestore.
// const admin = require('firebase-admin');
// admin.initializeApp();

function guilds (guild: any) { // devolver un array[{guild},{guild1}]
    const toReturn = [];
    for (const x of guild) {
        toReturn.push({
            name: x.name,
            id: x.id,
            permissions: x.permissions
        });
    }
    return toReturn;
}

function getAvatar (user: any) {
    if (user.avatar) {
        if (user.avatar.startsWith('a_')) {
            return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif?size=2048`;
        } else {
            return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg?size=2048`;
        }
    } else {
        return `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png?size=2048`;
    }
}

function nitro(user: any) {
    if (!user.premium_type || user.premium_type === 0) {
        return 'No';
    } else if (user.premium_type === 1) {
        return 'Nitro Classic';
    }
    return 'Nitro';
}

export const discordRequest = functions.https.onRequest((request, response) => {
    console.log("discordRequest! request: ", request.query);
    axios.post(`https://discord.com/api/oauth2/token`, qs.stringify({
        'scope': 'identify',
        'code': request.query.code,
        'client_id': '908033603190013952',
        'client_secret': '3aqFbKCfG8C-AMO4i1J6-N76dps24Jv-',
        'redirect_uri': 'https://starhorizonsdemo.web.app/callback',
        'grant_type': 'authorization_code'
    }), {
        validateStatus: () => true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((axiosResponse: any) => {
        console.log("toke call: ", axiosResponse.data);
        axios.get('https://discord.com/api/users/@me', {
            headers: {
                Authorization: `${axiosResponse.data.token_type} ${axiosResponse.data.access_token}`
            }
        }).then((response2: any) => {
            console.log("users/@me call: ", response2.data);
            const userObject = {
                nickname: response2.data.username, //string
                tag: response2.data.discriminator, //string
                id: response2.data.id, //string? or number
                locale: response2.data.locale, //string
                email: response2.data.email, //string
                avatar: getAvatar(response2.data), //string
                nitroStatus: nitro(response2.data)  //string
                // guilds: guilds(response3.data), //[]
            };
            console.log("guild call, userObject to send: ", userObject);
            response.status(200).json(userObject);
            // axios.get('https://discord.com/api/users/@me/guilds', {
            //     headers: {
            //         Authorization: `${axiosResponse.data.token_type} ${axiosResponse.data.access_token}`
            //     }
            // }).then((response3: any) => { //.data.guilds
            //     const userObject = {
            //         nickname: response2.data.username, //string
            //         tag: response2.data.discriminator, //string
            //         id: response2.data.id, //string? or number
            //         locale: response2.data.locale, //string
            //         email: response2.data.email, //string
            //         avatar: getAvatar(response2.data), //string
            //         nitroStatus: nitro(response2.data)  //string
            //         // guilds: guilds(response3.data), //[]
            //     };
            //     console.log("guild call, userObject to send: ", userObject);
            //     response.status(200).json(userObject);
            // });
        });
    });
});
