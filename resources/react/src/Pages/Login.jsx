import React from "react";
import Footer from "../Components/Footer";
import loginImg from "../Assists/img/loginphoto.png";
import { Link } from "react-router-dom";



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nid: "",
        }
    }

    submit() {
        fetch('http://127.0.0.1:8000/api/login', {
            method: 'post',
            body: JSON.stringify(
                this.state
            ),
            headers: {
                'accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(function (response) {
                response.json().then(function (resp) {
                    if(resp === "done"){
                        window.location="http://localhost:3000/"
                    }else{
                        alert(resp)
                        window.location.reload();
                    }
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
                            <form className="login-form">
                                <input type="number" placeholder="رقم الكارنيه" onChange={(item) => {
                                    this.setState({id: item.target.value})
                                }}/>
                                <input type="number" placeholder="الرقم القومي" onChange={(item) => {
                                    this.setState({nid: item.target.value})
                                }}/>
                                <input type={"button"} value={"تسجيل الدخول"}  onClick={() => {this.submit()}}></input>
                                <p style={{color: "white"}}>
                                    ليس لديك حساب؟{" "}
                                    <Link style={{color: "white"}} to={"/signup"}>
                                        انشاء حساب
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
}

 export default Login;
