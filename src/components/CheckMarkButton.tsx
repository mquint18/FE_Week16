import React, { useState } from "react";


function CheckMarkButton() {
            const [isChecked, setChecked] = useState(false);
            const handleChecked = () => {
                setChecked(prevIsChecked => !prevIsChecked);
            };
        return (
            <button onClick = {handleChecked}>
                {isChecked ? '✅' : '☐'}
            </button>
        );
    }

    export default CheckMarkButton;