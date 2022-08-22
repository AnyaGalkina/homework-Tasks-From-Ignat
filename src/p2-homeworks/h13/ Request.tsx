import React, {ChangeEvent, useState} from "react";
import Checkbox from "./Checkbox/Checkbox";
import Button from "./Button/Button";
import {RequestsAPI} from "./api/ RequestsAPI";
import styles from "./Request.module.css";

const Request = () => {

    const [resText, setResText] = useState("");
    const [resDetails, setResDetails] = useState("");
    const [error, setError] = useState(false);
    const [checkedStatus, setCheckedStatus] = useState(false);

    const updateData = (text: string, details: string, error: boolean) => {
        setResText(text);
        setResDetails(details);
        setError(error);
    }

    const onButtonClickHandler = () => {
        RequestsAPI.createRequest(checkedStatus)
            .then((res) => {
                let {errorText, info} = res.data;
                console.log(errorText);
                updateData(errorText, info, false);
            })
            .catch((error) => {
                let {errorText, info} = error.response.data;
                console.log(error.response ? errorText : error.message);
                updateData(errorText, info, true);
            })
    };

    const onCheckboxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckedStatus(e.currentTarget.checked);
    }

    return (
        <div className={styles.main}>
            <Button onClick={onButtonClickHandler}/>
            <Checkbox onChange={onCheckboxChangeHandler}/>
            <div className={`${error && styles.error}`}>
                <h4 className={styles.h}>{resText}</h4>
                <span>{resDetails}</span>
            </div>
        </div>
    );

}

export default Request;