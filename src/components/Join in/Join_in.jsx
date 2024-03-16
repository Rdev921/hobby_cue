const Join_in = () => {
  return (
    <div>
    <div >
        <button className="btn "><i class="fa-brands fa-google mx-3 "></i>Continue with Google</button>
    </div>
    <div>
        <button className="btn "><i class="fa-brands fa-facebook-f mx-3 "></i>Continue with Facebook</button>
    </div>
    <div className="connect-with">
        <p className="text-center fw-bolder ">or connect with</p>
    </div>
    <form>
        <div className="mb-3 w-75  ">

            <input type="email" className="form-control"
                placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 w-75">

            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label fw-bolder" htmlFor="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="btn">Continue</button>
    </form>

</div>
  )
}
export default Join_in