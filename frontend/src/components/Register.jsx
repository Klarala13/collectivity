import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ImageUpload from "./imageUpload/ImageUpload";

//ToDo: add passport
//ToDo: add local storage
export default props => {
  const [isRegister, setRegister] = useState(true);
  const [isHidden, setHidden] = useState(false);
  const [user, setUser] = useState({});
  const [valid, setValid] = useState({
    first_name: false,
    last_name: false,
    email: false,
    password: false,
    confirmPass: false,
    city: false,
    zip_code: false,
    image: true,
    check: false
  });
  //console.log("user, and is valid?", user, valid);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", e.target.elements["image"].files[0]);
    formData.append("first_name", e.target.elements["first_name"].value);
    formData.append("last_name", e.target.elements["last_name"].value);
    formData.append("email", e.target.elements["email"].value);
    formData.append("password", e.target.elements["password"].value);
    formData.append("city", e.target.elements["city"].value);
    formData.append("zip_code", e.target.elements["zip_code"].value);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    const url = "http://0.0.0.0:4001/users";
    try {
      fetch(url, {
        method: "POST",
        body: formData
      }).then(res => res.json())
        .then( res => {
          if (res.success) {
            console.log("Good job! U are registered!");
            props.history.push("/login");
            window.location.reload()
          } else {alert(res.message)}
        });
    } catch (error) {
      console.error("Uuuu, u fucked up! try again buddy", error);
    }
  };

  const handleFirstName = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length > 3 && e.target.value.length < 30) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleLastName = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length > 3 && e.target.value.length < 30) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleEmail = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length > 8 && e.target.value.length < 30) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handlePassword = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length > 7 && e.target.value.length < 20) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleConfirmPass = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user.password === user.confirmPass);
    if (user.password === user.confirmPass) {
      setValid({ ...valid, [e.target.name]: false });
    } else {
      setValid({ ...valid, [e.target.name]: true });
    }
  };
  const handleCity = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length > 3 && e.target.value.length < 30) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleZipCode = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.length > 4) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const handleCheckbox = e => {
    if (e.target.checked) {
      setValid({ ...valid, [e.target.name]: true });
    } else {
      setValid({ ...valid, [e.target.name]: false });
    }
  };
  const isDisabled = Object.values(valid).filter(v => !v).length !== 0;
  console.log("disabled", isDisabled);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="Register">
            <form
              onSubmit={handleSubmit}
              className="form-register"
              method="post"
            >
              <h2 className="mb-2">{isRegister ? "Register" : "Sign in"}</h2>
              <div className="container">
                <label htmlFor="first_name">First Name</label>
                <div className="mb-3">
                  <input
                    onChange={handleFirstName}
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={user.first_name}
                    className="form-control "
                    placeholder="First Name"
                    required
                    autoFocus
                    autoComplete="true"
                  />
                </div>
                <label htmlFor="last_name">Last Name</label>
                <div className="mb-3">
                  <input
                    onChange={handleLastName}
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={user.last_name}
                    className="form-control"
                    placeholder="Last Name"
                    required
                    autoFocus
                    autoComplete="true"
                  />
                </div>
                <label htmlFor="email">Email</label>
                <div className="mb-3">
                  <input
                    onChange={handleEmail}
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    className="form-control"
                    placeholder="example@example.com"
                    required
                    autoFocus
                    autoComplete="true"
                  />
                </div>
                <label htmlFor="password">Password</label>
                <div className="mb-3">
                  <input
                    onChange={handlePassword}
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    className="form-control"
                    placeholder="********"
                    required
                    autoFocus
                  />
                </div>
                <label htmlFor="password">Re-Enter Password please</label>
                <div className="mb-3">
                  <input
                    onChange={handleConfirmPass}
                    type="password"
                    id="confirmPass"
                    name="confirmPass"
                    value={user.confirmPass}
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                    autoFocus
                  />
                </div>
                <label htmlFor="city">City</label>
                <div className="mb-3">
                  <input
                    onChange={handleCity}
                    type="city"
                    id="city"
                    name="city"
                    value={user.city}
                    className="form-control"
                    placeholder="city"
                    required
                    autoFocus
                    autoComplete="true"
                  />
                </div>
                <label htmlFor="zip_code">ZipCode</label>
                <div className="mb-3">
                  <input
                    onChange={handleZipCode}
                    type="number"
                    id="zip_code"
                    name="zip_code"
                    value={user.zip_code}
                    className="form-control"
                    placeholder="zip code"
                    required
                    autoFocus
                  />
                </div>
                <ImageUpload />
                <div className="form-check">
                  <h4>Agree to Terms and Conditions</h4>
                  <div className="mb-3">
                    <a
                      href=" #"
                      className="text-primary"
                      onClick={() => setHidden(!isHidden)}
                    >
                      Click HERE to see terms
                    </a>
                  </div>
                  <div className={isHidden === false ? "d-none" : ""}>
                    <div>
                      <div>
                        <b>COLLECTIVITY TERMS AND CONDITIONS</b>
                        These terms and conditions are an agreement between the
                        Collectivity platform and you, the user. This agreement
                        sets forth the general terms and conditions of your use
                        of the collectivity.de website and any of its products
                        or services (collectively, "Website" or "Services").
                      </div>
                      <div>
                        <b>Data Usage</b> We have asked you for your email but
                        you will <b>never</b> receive newsletters or other info
                        from us. Your email will be used by other users to
                        contact you in regards to the items/skills you share.
                      </div>
                      <div>
                        <b>Accounts and membership</b> If you create an account
                        on the website, you are responsible for maintaining the
                        security of your account and you are fully responsible
                        for all activities that occur under the account and any
                        other actions taken in connection with it. Providing
                        false contact information of any kind may result in the
                        termination of your account. You must immediately notify
                        us of any unauthorized uses of your account or any other
                        breaches of security. We will not be liable for any acts
                        or omissions by you, including any damages of any kind
                        incurred as a result of such acts or omissions. We may
                        suspend, disable, or delete your account (or any part
                        thereof) if we determine that you have violated any
                        provision of this Agreement or that your conduct or
                        content would tend to damage our reputation and goodwill
                        or might damage any other user. If we delete your
                        account for the foregoing reasons, you may not re-
                        register for our Services. We may block your email
                        address and Internet protocol address to prevent further
                        registration.
                      </div>
                      <div>
                        <b>User content</b> We do not own any data, information
                        or material ("Content") that you submit on the Website
                        in the course of using the Service. You shall have sole
                        responsibility for the accuracy, quality, integrity,
                        legality, reliability, appropriateness, and intellectual
                        property ownership or right to use of all submitted
                        content. We may, but have no obligation to, monitor
                        content on the website submitted or created using our
                        services by you. Unless specifically permitted by you,
                        your use of the website does not grant us the license to
                        use, reproduce, adapt, modify, publish or distribute the
                        content created by you or stored in your user account
                        for commercial, marketing or any similar purpose. But
                        you grant us permission to access, copy, distribute,
                        store, transmit, reformat, display and perform the
                        content of your user account solely as required for the
                        purpose of providing the services to you. Backups We
                        perform regular backups of the website and content,
                        however, these backups are for our own administrative
                        purposes only and are in no way guaranteed. You are
                        responsible for maintaining your own backups of your
                        data. We do not provide any sort of compensation for
                        lost or incomplete data in the event that backups do not
                        function properly. We will do our best to ensure
                        complete and accurate backups, but assume no
                        responsibility for this duty.Changes and amendments We
                        reserve the right to modify this agreement or its
                        policies relating to the website or services at any
                        time, effective upon posting of an updated version of
                        this agreement on the website. When we do, we will send
                        you an email to notify you. Continued use of the website
                        after any such changes shall constitute your consent to
                        such changes.
                      </div>
                      <div>
                        <b>
                          {" "}
                          Policy was created with WebsitePolicies.com.
                          Acceptance of these terms You acknowledge that you
                          have read this agreement and agree to all its terms
                          and conditions.
                        </b>
                        By using the website or its services you agree to be
                        bound by this agreement. If you do not agree to abide by
                        the terms of this agreement, you are not authorized to
                        use or access the website and its services. Please
                        contact us if you have any questions regarding this
                        agreement. May 20, 2019{" "}
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="checkbox form-check-input"
                      id="check"
                      name="check"
                      onChange={handleCheckbox}
                    />
                  </div>
                  <label className="form-check-label" htmlFor="accept">
                    Check to accept
                  </label>
                </div>
                <div className="mb-3 p-3 m-1">
                  <button
                    className="btn btn-secondary"
                    id="submit"
                    type="submit"
                    disabled={isDisabled}
                    onClick={setRegister}
                  >
                    Register
                  </button>
                </div>
                <div className="mb-3">
                  <NavLink
                    to="/login"
                    activeClassName="active"
                    className="navbar-brand"
                  >
                    "Already got an account? Login"
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
