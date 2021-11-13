import * as functions from "firebase-functions";
const axios = require('axios');
const qs = require('querystring');
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
//
function trueOrFalse (input: boolean, yes: string, no: string) {
    if (input) {
        return yes;
    } else {
        return no;
    }
}

function guilds (guild: any) {
    var toReturn = '';
    for (var x of guild) {
        toReturn += `<strong>${x.name}</strong>Guild id: ${x.id}, Autorizacion: ${x.permissions})<br><br>`;
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

function nitro(user: any, image: boolean) {
    if (image == true) {
        if (user.premium_type && user.premium_type > 0) {
            return '<img src="https://cdn.discordapp.com/emojis/686131200242352184.png?v=1">'; 
        } else {
            return '';
        }
    } else {
        if (!user.premium_type || user.premium_type == 0) {
            return 'No';
        } else if (user.premium_type == 1) {
            return 'Nitro Classic';
        } else if (user.premium_type == 2) {
            return 'Nitro';
        }
    }
}

export const discordRequest = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  axios.post(`https://discordapp.com/api/oauth2/token`, qs.stringify({
    'scope': 'identify',
    'code': request.query.code,
    'client_id': 908033603190013952,
    'client_secret': '3aqFbKCfG8C-AMO4i1J6-N76dps24Jv-',
    'redirect_uri': 'https://starhorizonsdemo.web.app/callback',
    'grant_type': 'authorization_code'
}), {
    validateStatus: () => true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then((axiosResponse: any) => {
    axios.get('https://discordapp.com/api/v6/users/@me', {
        headers: {
            Authorization: `${axiosResponse.data.token_type} ${axiosResponse.data.access_token}`
        }
    }).then((response2: any) => {
        axios.get('https://discordapp.com/api/v6/users/@me/guilds', {
            headers: {
                Authorization: `${axiosResponse.data.token_type} ${axiosResponse.data.access_token}`
            }
        }).then((response3: any) => { //.data.guilds
            axios.put(`https://discordapp.com/api/v6/guilds/${process.env.GUILD_ID}/members/${response2.data.id}`, {
                roles: [
                    process.env.ROLE_ID
                ],
                'access_token': `${axiosResponse.data.access_token}`
            }, {
                headers: {
                    Authorization: `Bot ${process.env.BOT_TOKEN}`
                },
                validateStatus: () => true
            }).then((response4: any) => {
                if (response4.status == 201) {
                    axios.post(`https://discordapp.com/api/v6/webhooks/${process.env.WEBHOOK_ID}/${process.env.WEBHOOK_TOKEN}`, {
                    content: `<@${response2.data.id}>님 환영합니다!\n이 서버에 어떻게 들어오게 되었는지 궁금하다면 <@647736678815105037>님에게 디엠을 보내주세요. `,
                    username: '웹훅',
                    avatar_url: 'https://cdn.discordapp.com/icons/688681923698229294/2f878e92253b3249c1848596c560e83e.jpg?size=2048'
                });
                }
            });
        });
    });
});
  response.send("Hello from Firebase!");
});
