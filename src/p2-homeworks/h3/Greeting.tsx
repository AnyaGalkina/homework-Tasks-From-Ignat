import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDown} // деструктуризация пропсов
) => {
    const inputClass = name === "" ? s.error : s.noError
    const isDisabled = name === "" && true

    return (
        <div className={s.wrapperClass}>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyDown={onKeyDown}
                onBlur={setNameCallback}
            />

            <button onClick={addUser}
                    disabled={isDisabled}
                    className={s.button}
            >add
            </button>
            <span>{"Total users " + totalUsers}</span>
            <div>
                <span className={inputClass}>{error}</span>
            </div>

        </div>
    )
}

export default Greeting
