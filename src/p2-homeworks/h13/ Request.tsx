import React, {ChangeEvent, useState} from "react";
import Checkbox from "./Checkbox/Checkbox";
import Button from "./Button/Button";
import {RequestsAPI} from "./api/ RequestsAPI";
import styles from "./Request.module.css";

const Request = () => {

    const [{resText, resDetails, error}, setState] = useState({resText: "", resDetails: "", error: false})
    // const [resText, setResText] = useState("");
    // const [resDetails, setResDetails] = useState("");
    // const [error, setError] = useState(false);
    const [checkedStatus, setCheckedStatus] = useState(false);


    const onButtonClickHandler = () => {
        RequestsAPI.createRequest(checkedStatus)
            .then((res) => {
                console.log(res.data.errorText);
                setState({resText: res.data.errorText, resDetails: res.data.info, error: false})
                // setResText(res.data.errorText);
                // setResDetails(res.data.info);
                // setError(false);
            })
            .catch((error) => {
                console.log(error.response ? error.response.data.errorText : error.message);
                setState({
                    resText: error.response.data.errorText,
                    resDetails: error.response.data.info,
                    error: true
                })
                // setResText(error.response.data.errorText);
                // setResDetails(error.response.data.info);
                // setError(true);
            })
    };

    const onCheckboxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckedStatus(e.currentTarget.checked)
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