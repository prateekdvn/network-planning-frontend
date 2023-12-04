import './SideBarBtn.css'; 
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
function SideBarBtn({isOpen,handleChange}) {
    return (
    <div onClick={handleChange} className={isOpen ? "slide-btn" : "slide-btn close"}>
        {isOpen ? <KeyboardDoubleArrowLeftIcon/> : <KeyboardDoubleArrowRightIcon/>}
    </div>
    );
}

export default SideBarBtn;