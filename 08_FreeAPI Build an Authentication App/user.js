async function getMe() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "Login.html";
    return;
  }

  try {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/users/current-user",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    document.getElementById("username").innerText = data.data.username;
    document.getElementById("email").innerText = data.data.email;
  } catch (error) {
    console.error(error);

    localStorage.removeItem("token");
    window.location.href = "Login.html";
  }
}

async function logout() {
  const token = localStorage.getItem("token");

  try {
    await fetch("https://api.freeapi.app/api/v1/users/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.error("Logout API failed", err);
  }

  localStorage.removeItem("token");

  window.location.href = "Login.html";
}

getMe();
