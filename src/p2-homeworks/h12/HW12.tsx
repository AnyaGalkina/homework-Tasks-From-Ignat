import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ["dark", "red", "some", "crazy", "candy", "default"];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)

     const dispatch = useDispatch();
     const onChangeCallback = (theme: string) => {
         dispatch(changeTheme(theme));
     }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + "-text"]}>
                homeworks 12
            </span>
            <div>
                <SuperRadio options={themes}
                    onChangeOption={onChangeCallback}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
