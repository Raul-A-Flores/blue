import React from 'react'




const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
    {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (<a  
    key={ item+ index}
    href={`#${item}`}
    className='app__navigation-dot'
    style={ active === item ? { backgroundColor : '#15202b'}: {}}
    />
    ))}
    </div>) 

}

export default NavigationDots