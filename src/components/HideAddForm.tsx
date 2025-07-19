import React from "react";

export default function HideAddForm({showForm}) {
    const hideFormStyle = {
        '--add-form': showForm === 'visible' ? 'block' : 'none',
        '--add-btn' : showForm === 'highlighted' ? 'blue' : 'white',
    };
        

return (
    <div style={hideFormStyle}>
        <button style={{display: 'var(--add-form', color: 'var(--add-btn'}}></button>
    </div>
)    
}