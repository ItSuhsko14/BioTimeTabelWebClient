import CircularProgressTimer from "../Loader/CircleProgres";
interface ButtonProps {
  onClick: () => void;
  buttonText?: string;
  time: number;
  remainingTime: number;
  progress: boolean;
}

export const ButtonX: React.FC<ButtonProps> = ({onClick, buttonText}) => {
  return (
    <button 
      style={buttonXStyle}
      onClick={onClick}  
    >
        <div
          
        >{buttonText}</div>
        <svg 
          style={svgCheckStyle} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
          </svg>
    </button>
    
  )
}

export const ButtonOk: React.FC<ButtonProps> = ({onClick, buttonText}) => {
  return (
    <button 
      style={buttonOkStyle}
      onClick={onClick}
    >
        <div>{buttonText}</div>
        <svg 
          style={svgXStyle} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg">
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>

        </svg>
    </button>
  )
}

export const ButtonAccept: React.FC<ButtonProps> = ({onClick, buttonText, time, remainingTime, progress}) => {
  return (
    <button 
      style={buttonOkStyle}
      onClick={onClick}
    >
        <div>{buttonText}</div>
        {progress
          ? <CircularProgressTimer time={time} remainingTime={remainingTime} />
          : <svg 
              style={svgXStyle} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
            </svg>
        }
        
    </button>
  )
}


const svgCheckStyle = {
  height: '20px',
  width: '20px',
  marginLeft: '10px',
  color: 'white',
};

const svgXStyle = {
  height: '20px',
  width: '20px',
  marginLeft: '10px',
  color: "white"
};

// Основний об'єкт зі спільними властивостями
const buttonBaseStyle = {
  border: '2px solid',
  borderRadius: '5px',
  padding: '10px',
  fontSize: '1.3rem',
  lineHeight: '1.3rem',
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: "20px 0px 20px 0px",
  width: '45%',
  height: '60px',
};

const buttonXStyle = {
  ...buttonBaseStyle, 
  border: '2px solid red',
  backgroundColor: 'red',
  
};

const buttonOkStyle = {
  ...buttonBaseStyle, 
  border: '2px solid #1f7a1f',
  backgroundColor: '#1f7a1f',
};


