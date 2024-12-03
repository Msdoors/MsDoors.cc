"use server";

import { auth, signOut } from "@/auth";

export async function userDiscordSignOut() {
    await signOut();
}

const allowed_users = ["896604349311115304"];
export async function isUserAllowedOnDashboard() {
    const session = await auth();

    if (!session || !session.user) {
        return false;
    }

    const user_id = session.user.id ?? "1"
    if (!allowed_users.includes(user_id)) {
        return false;
    }

    return true;
}
