function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ name, email }),
  })
    .then((res) => res.json())
    .then(function (user) {
      document.body.innerHTML = user.id
      console.log(user)
    })
    .catch(function (error) {
      document.body.innerHTML = 'Unauthorized Access'
      console.log(error.message)
    })
}
submitData('Sam', 'sam@sam.com')
