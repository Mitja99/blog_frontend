import axios from "axios";
import React, {useEffect, useState} from "react";

const Welcome = () => {
    const [identity, setIdentity] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
        //dobi name pa priimek iz idja
        const fetchUser= async ( user_id ) => {
            try {
                const response = await axios.get(`http://localhost:3000/users/${ user_id }`,{ withCredentials: true });
                setUser(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        //dobi id iz jwt tokena
        const fetchIdentity= async () => {
            try {
                const response = await axios.get(`http://localhost:3000/auth/profile`,{ withCredentials: true });
                setIdentity(response.data);
                fetchUser(response.data.id);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchIdentity();
    }, []);
    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Album example</h1>
                        <p className="lead text-body-secondary">Pozdrav  : {(user) ? user.first_name + " " + user.last_name: ""}</p>
                        <p>
                            <a href="http://localhost:5173/create" className="btn btn-primary my-2">Prvi action</a>
                            <a href="http://localhost:5173/OneBlog" className="btn btn-secondary my-2">Drugi action</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome;
