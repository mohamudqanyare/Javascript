async function getUser() {
  // Simulate waiting for a server
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    id: 1,
    name: "Mohamud",
    age: 25,
  };
}

async function showUser() {
  console.log("Getting user...");

  const user = await getUser();

  console.log("User received:");
  console.log(user);
}

showUser();