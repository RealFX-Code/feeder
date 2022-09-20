import { writable } from "svelte/store";

export const user = writable({
    "username": "default",
    "nickname": "H0rsayEater",
    "token": "261949B892C628B14566EF281056803ECF8F69C4FEFE233602B0F3B479800EFD",
    "loggedIn": true
});

export const BannedTokens = {
    "token": "261949B892C628B14566EF281056803ECF8F69C4FEFE233602B0F3B479800EFD"
}

/*

    -- This file contains user management --

    {   It'll keep track of banned tokens and default user properties.    }

*/