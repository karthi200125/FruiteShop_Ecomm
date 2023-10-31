import jwt from 'jsonwebtoken';
import { createError } from './errMidelware.js';

export const VerifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError(401, "you are Not Authenticated"))
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) return next(createError(401, "Token is Not Valid"))
        req.userId = decoded;
        next();
    });
};

export const VerifyUser = (req, res, next) => {
    VerifyToken(req, res, (err) => {
        if (err) {
            next(err);
        } else {
            if (req.userId.userId === req.params.userId || req.userId.isAdmin === true) {
                next();
            } else {
                return next(createError(403, "You are not authorized"));
            }
        }
    });
};

export const VerifyAdmin = (req, res, next) => {
    VerifyToken(req, res, (err) => {
        if (err) {
            next(err);
        } else {
            if (req.userId.isAdmin === true) {
                next();
            } else {
                return next(createError(401, "You are not an Admin"));
            }
        }
    });
};
