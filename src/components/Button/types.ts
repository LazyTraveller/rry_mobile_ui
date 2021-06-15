import { HTMLAttributes, MouseEvent } from 'react'

type ButtonType = 'default' | 'primary' | 'danger' | 'link'
type ButtonHTMLType = 'submit' | 'button' | 'reset'

interface BaseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className: string
  disabled: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  type: ButtonHTMLType
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType
  plain?: boolean
  mini?: boolean
  block?: boolean
  noRound?: boolean
  loading?: boolean
  /**仅web， 原生用type */
  htmlType?: ButtonHTMLType
  /**仅小程序 */
  formType?: string
  openType?: string
  /**返回Promise才有loading */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export type { BaseButtonProps, ButtonProps }