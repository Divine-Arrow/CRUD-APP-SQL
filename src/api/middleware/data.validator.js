const Joi = require('joi');

/* const schema = Joi.object({
    userId: Joi.number().required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),

    access_token: [
        Joi.string(),
        Joi.number()
    ],

    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2013),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
.with('username', 'birth_year')
.xor('password', 'access_token')
.with('password', 'repeat_password'); */

module.exports.getUser = (data) => {
    return Joi.object({
        userId: Joi.number().required()
    }).validateAsync(data);

};

/* try {
    const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
}
catch (err) { } */