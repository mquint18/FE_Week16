//Creates a Toolbar Button Prop


type ToolbarButtonProps = {
    text: string, onClick: () => void
}

export default function ToolbarButton({text, onClick}: ToolbarButtonProps) {
    return(
        <button 
        className="btn btn-primary"
        onClick={onClick}
        >
            <p> {text} </p>  
        </button>
    )
}