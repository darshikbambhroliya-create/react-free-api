const form = document.getElementById("registerForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  let isValid = true;

  document.getElementById("emailError").innerText = "";
  document.getElementById("usernameError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Invalid email";
    isValid = false;
  }

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
    const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }

    alert("Registered Successfully!");
    console.log(data);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
});
