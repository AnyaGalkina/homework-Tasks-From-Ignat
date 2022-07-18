import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, MouseEventHandler, useState} from "react"
import styles from "./SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {


    const mappedOptions: any[] = options ? options.map((o, i) =>
        <option key={i}
                value={o}
        >{o}</option>
    ) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value);
        }
    }

    return (
        <select
            className={styles.select}
                onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
