import React, { FC, useState, MouseEvent} from 'react';
import classNames from 'classnames'
import _ from 'lodash'

import BaseButton from './base'
import type { ButtonProps } from './types'

const Button: FC<ButtonProps>= ({
   disabled,
  onClick = _.noop,
  loading, 
  children,
  htmlType = 'button', 
  className, 
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loadFlag: boolean = loading || isLoading

  const handleClick = (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => {
    if (loadFlag) {
      return
    }
     const result = onClick(e)
     
    //  if (!is.promise(result)) {
    //    result
    //  }

     setIsLoading(true)
     Promise.resolve(result).then(() => {
       return setIsLoading(false)
     }).catch(() => [
       setIsLoading(false)
     ])
  }
  return (
    <BaseButton 
      {...rest} 
      type={htmlType} 
      className={classNames(`m`)}
      disabled={!!(loadFlag || disabled)}  
      onClick={handleClick}
     >
      { children}
    </BaseButton>
  )
}

export default Button