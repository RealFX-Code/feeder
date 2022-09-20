import { writable } from "svelte/store";

export const user = writable({
    "username": "default",
    "nickname": "H0rsayEater",
    "token": "C4F42413475AEE774ADAD47DB3BD96867370D09C1DCBC3880240D7D577038203",
    "loggedIn": true
});

export const BannedTokens = {
    "token": "261949B892C628B14566EF281056803ECF8F69C4FEFE233602B0F3B479800EFD" + "-" +
             "C4F42413475AEE774ADAD47DB3BD96867370D09C1DCBC3880240D7D577038103"
}

/*

    -- This file contains user management --

    {   It'll keep track of banned tokens and default user properties.    }

*/