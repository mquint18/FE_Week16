import  { useState } from "react";
import { Button } from "react-bootstrap";
import '../index.css'


function CheckMarkButton() {
            const [isChecked, setChecked] = useState(false);
            const handleChecked = () => {
                setChecked(prevIsChecked => !prevIsChecked);
            };
        return (
            <Button className='check-mark-button' variant="success" onClick = {handleChecked}>
                {isChecked ? '✅' : '☐'} Check
            </Button>
        );
    }

    export default CheckMarkButton;

