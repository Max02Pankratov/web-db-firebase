import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../config";

export const Auth = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className=" flex flex-col justify-center gap-3 items-center">
            {/* <div className=" flex flex-col justify-center items-center gap-2 border-[2px] border-[white] rounded-lg p-2">
                <h1> Если нет аккаунта: </h1>
                <div className=" flex justify-center flex-wrap gap-5" >
                    <input
                        className=" p-1 rounded-lg border-[2px] border-[black]"
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <input
                        className=" p-1 rounded-lg border-[2px] border-[black]"
                        type='password'
                        placeholder="Пароль..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />
                </div>

                <button onClick={register} className="text-[white] border-[white] border rounded-lg p-1 m-2"> Создать пользователя </button>
            </div> */}

            <div className=" flex flex-col justify-center items-center gap-2 border-[2px] border-[white] rounded-lg p-2">
                <h1> Войдите: </h1>
                <div className=" flex justify-center flex-wrap gap-5">
                    <input
                        className=" p-1 rounded-lg border-[2px] border-[black]"
                        placeholder="Email..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                    />
                    <input
                        className=" p-1 rounded-lg border-[2px] border-[black]"
                        type='password'
                        placeholder="Пароль..."
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                    />
                </div>

                <button onClick={login} className="bg-slate-500 text-[white] border rounded-lg p-1 m-2"> Войти </button>
            </div>

            <h4> Привет: {user?.email} </h4>

            <button onClick={logout} className="bg-slate-500 text-[white] border rounded-lg p-1 m-2"> Выйти из аккаунта </button>
        </div>
    );
}