import './form.css'
function Form(){
    return(
        <div className="container">
        <h2>Registration Form</h2>

        <form>
            <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your full name"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    required
                />
            </div>

            <div className="form-group">
                <label>Gender</label>

                <div className="gender">
                    <label>
                        <input type="radio" name="gender" value="Male" required />
                        Male
                    </label>

                    <label>
                        <input type="radio" name="gender" value="Female" />
                        Female
                    </label>

                    <label>
                        <input type="radio" name="gender" value="Other" />
                        Other
                    </label>
                </div>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
    );
}

export default Form