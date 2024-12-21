const Register = () => {
  return (
    <>
    <h1 className="text-center font-4xl text-black">Register</h1>
    <div className="items-center justify-center flex ">
      <input type="text"placeholder="Enter yout Name" />
      <input type="text"placeholder="enter your username" />
      <input type="password" placeholder="enter your password" />
      <button className="px-4 py-2 rounded-md bg-blue-500 bg-2">Register</button>

    </div>
    </>
  )
}
export default Register