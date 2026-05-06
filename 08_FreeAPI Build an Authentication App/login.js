const form = document.getElementById("loginForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  let isValid = true;
  document.getElementById("usernameError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  if (username.length < 3) {
    document.getElementById("usernameError").innerText =
      "Username must be at least 3 characters";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    isValid = false;
  }

  if (!isValid) return;

  try {
    const res = await fetch("https://api.freeapi.app/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "login failed");
    }

    alert("Login Successfully!");
    console.log(data);
    if (res.ok) {
      localStorage.setItem("token", data.data.accessToken);
      window.location.href = "user.html";
    }
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
