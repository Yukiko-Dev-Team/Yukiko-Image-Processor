const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        message: "Cards API V1",
        routes: {
            get: {
                "/": "this message.",
            },
            post: {
                "/rank": {
                    "usage": "This endpoint is used to generate rank cards used via the command /rank.",
                    "body": {
                        username: "The username of the user or it's nickname.",
                        avatar: "The link to the avatar of the user. MUST BE FROM DISCORD CDN!",
                        xp: "The amount of xp the user has.",
                        level: "The level of the user.",
                        rank: "The rank of the user in the local leaderboard.",
                    }
                },
                "/welcome": {
                    "usage": "This endpoint is used to generate welcome cards for when a user join a server.",
                    "body": {
                        username: "The username of the user or it's nickname.",
                        avatar: "The link to the avatar of the user. MUST BE FROM DISCORD CDN!",
                        guildName: "The name of the server.",
                        guildMemberCount: "The amount of members in the server.",
                    }
                },
                "/farewell": {
                    "usage": "This endpoint is used to generate farewell cards for when a user leave a server.",
                    "body": {
                        username: "The username of the user or it's nickname.",
                        avatar: "The link to the avatar of the user. MUST BE FROM DISCORD CDN!",
                        guildName: "The name of the server.",
                        guildMemberCount: "The amount of members in the server.",
                    }
                },
                "/levelUp": {
                    "usage": "This endpoint is used to generate level up cards for when a user level up.",
                    "body": {
                        username: "The username of the user or it's nickname.",
                        avatar: "The link to the avatar of the user. MUST BE FROM DISCORD CDN!",
                        xp: "The amount of xp the user has.",
                        level: "The level of the user.",
                        rank: "The rank of the user in the local leaderboard.",
                    }
                }
            }
        }
    });
});


    module.exports = router;