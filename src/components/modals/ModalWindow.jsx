import ModalCloseButton from './ModalCloseButton';
import './ModalWindow.scss';
 
// eslint-disable-next-line react/prop-types
function ModalWindow({ children }) {
    return (
    <>
        <div className="modal-wrapper" aria-modal="true"
            role="dialog" tabIndex="-1">
            <div className="inner">
            <ModalCloseButton />
                {/* Insert Child Modal Here */}
                {children}
            </div>
        </div>
    </>
    )
  }
  
  export default ModalWindow