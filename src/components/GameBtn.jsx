import React, {forwardRef} from 'react';

const GameBtn = forwardRef(({ border, bg, onClick, color }, ref) => (
<button className={`${border} ${bg} w-[175px] sm:w-[200px] h-[175px] sm:h-[200px] m-2 duration-200 hover:scale-105`} 
onClick={onClick}
color={color}
ref={ref} />
));

export default GameBtn;