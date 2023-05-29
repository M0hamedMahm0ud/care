import React from "react";
import Footer from "../Components/Footer";
import loginImg from "../Assists/img/loginphoto.png";
import { Link } from "react-router-dom";

   class SignUp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                id: "",
                nid: "",
            }
        }

        submit() {
            console.log(this.state)
            fetch('http://127.0.0.1:8000/api/register', {
                method :'post',
                body:JSON.stringify(
                    this.state
                ),
                headers:{
                    'accept':'application/json',
                    'Content-type':'application/json'
                }
                })
                .then(function (response){
                    response.json().then(function (resp){
                        alert(resp)
                        window.location.reload();
                    })
                })
        }

        render() {
            return (
                <section className="main-screen">
                    <div className="container">
                        <div
                            className="d-flex justify-content-between "
                            style={{padding: "7% 0"}}
                        >
                            <div className="col-6">
                                <form action="" className="login-form">
                                    <input type="number" placeholder="رقم الكارنيه" onChange={(item) => {
                                        this.setState({id: item.target.value})
                                    }}/>
                                    <input type="number" placeholder="الرقم القومي" onChange={(item) => {
                                        this.setState({nid: item.target.value})
                                    }}/>
                                    <input type={"button"} value={"انشاء حساب"}  onClick={() => {this.submit()}}></input>
                                    <p style={{color: "white"}}>
                                        لديك حساب؟{" "}
                                        <Link style={{color: "white"}} to={"/login"}>
                                            تسجيل بالدخول
                                        </Link>
                                    </p>
                                </form>

                            </div>
                            <div className="col-6" style={{overflow: "hidden"}}>
                                <img src={loginImg} style={{width: "100%"}} alt=""/>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </section>
            )}
};

export default SignUp;
