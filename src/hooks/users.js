export async function fetchUsers(token) {
    try {
        const res = await fetch("https://chatify-api.up.railway.app/users", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Failed to fetch users");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Fetch Users Error:", error);
        throw new Error(error.message || "Failed to fetch users");
    }
}

export async function fetchUserDetails(token, userId) {
    try {
        const res = await fetch(
            `https://chatify-api.up.railway.app/users/${userId}`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Failed to fetch user details");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error.message || "Failed to fetch user details");
    }
}

export async function updateUserDetails(token, userId, updatedData) {
    try {
        const res = await fetch(`https://chatify-api.up.railway.app/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                updatedData: updatedData,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Failed to update user details");
        }
    } catch (error) {
        throw new Error(error.message || "Failed to update user details");
    }
}

export async function deleteUser(token, userId) {
    try {
        const res = await fetch(`https://chatify-api.up.railway.app/users/${userId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(error.message || "Failed to delete user");
        }

        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error.message || "Failed to delete user");
    }
}
