import { useState, useEffect } from "react";
import { db } from "../config";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import React from "react";

export const Card = () => {

    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [dateIn, setDateIn] = useState('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState(0)
    const [pledge, setPledge] = useState(0)
    const [storage, setStorage] = useState('')
    const [reception, setReception] = useState('')
    const [returnprod, setReturnprod] = useState('')
    const [sale, setSale] = useState(0)

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(usersCollectionRef,
            {
                name: newName, age: Number(newAge), datein: dateIn, productname: productName,
                price: Number(price), pledge: Number(pledge), storage: storage, reception: reception,
                returnprod: returnprod, sale: sale
            });
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    return (
        <div className=" p-5 flex flex-col items-center justify-center ">

            <div className=" flex gap-5 flex-wrap max-w-[1260px] justify-center">
                <input
                    className=" border px-2 py-1 rounded-[6px] w-[300px]"
                    placeholder="ФИО клиента"
                    onChange={(event) => {
                        setNewName(event.target.value);
                    }}
                />

                <input
                    className=" border px-2 py-1 rounded-[6px] w-[300px]"
                    type="number"
                    placeholder="Возраст"
                    onChange={(event) => {
                        setNewAge(event.target.value);
                    }}
                />

                <input
                    className=" border px-2 py-1 rounded-[6px] w-[300px]"
                    placeholder="Наименование товара"
                    onChange={(event) => {
                        setProductName(event.target.value);
                    }}
                />

                <input
                    className=" border px-2 py-1 rounded-[6px] w-[300px]"
                    type="number"
                    placeholder="оценочная стоимость..."
                    onChange={(event) => {
                        setPrice(event.target.value);
                    }}
                />

                <input
                    className=" border px-2 py-1 rounded-[6px] w-[300px]"
                    placeholder="дата сдачи"
                    onChange={(event) => {
                        setDateIn(event.target.value);
                    }}
                />

                <input
                    className=" border px-2 py-1 rounded-[6px] w-[300px]"
                    type="number"
                    placeholder="Выдан залог"
                    onChange={(event) => {
                        setPledge(event.target.value);
                    }}
                />

                <input
                    className=" border px-2 py-1 rounded-[6px] w-[300px]"
                    placeholder="Срок хранения"
                    onChange={(event) => {
                        setStorage(event.target.value);
                    }}
                />

                <input
                    className=" border px-2 py-1 rounded-[6px] w-[300px]"
                    placeholder="Операции приема товара"
                    onChange={(event) => {
                        setReception(event.target.value);
                    }}
                />

                <input
                    className=" border px-2 py-1 rounded-[6px] w-[300px]"
                    placeholder="Возврат товара"
                    onChange={(event) => {
                        setReturnprod(event.target.value);
                    }}
                />

                <input
                    className=" border px-2 py-1 rounded-[6px] w-[300px]"
                    type="number"
                    placeholder="Продажа по истечении срока хранения"
                    onChange={(event) => {
                        setSale(event.target.value);
                    }}
                />


            </div>
            <br />
            <button onClick={createUser} className="p-5 bg-slate-500 text-[white] rounded-lg hover:bg-slate-600"> Создать карточку </button>

            <div className="flex mt-5 gap-5 flex-wrap max-w-[1300px]">
                {users.map((user) => {
                    return (

                        <div className=" border w-[310px] p-2 flex flex-col justify-center items-center">

                            <h3>ФИО: {user.name}</h3>

                            <h3>Возраст: {user.age}</h3>

                            <h3>Наименование товара: {user.productname}</h3>

                            <h3>Оценочная стоимость: {user.price} р </h3>

                            <h3>Дата сдачи: {user.datein}</h3>

                            <h3>Выдан залог: {user.pledge} р </h3>

                            <h3>Срок хранения: {user.storage}</h3>

                            <h3>Операции приема товара: {user.reception} </h3>

                            <h3>Возврат товара: {user.returnprod} </h3>

                            <h3>Продажа по истечении срока хранения: {user.sale} p </h3>

                            <button onClick={() => { deleteUser(user.id) }} className="p-3 mt-2 bg-slate-500 text-[white] rounded-lg hover:bg-slate-600"> Удалить карточку</button>

                        </div>

                    );
                })}
            </div>
        </div>
    );
}