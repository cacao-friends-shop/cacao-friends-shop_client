import { css } from '@emotion/react'

export interface InputProps {
  /** Input 타입 */
  type: string
  /** Input id, name */
  title: string
  /** Input 레이블 */
  label?: string
  /** Input 클라스네임 */
  className?: string
}

const Input = ({ type, title, label, className, ...restProps }: InputProps) => {
  return (
    <div css={subtitleStyle} className={className}>
      <label htmlFor={title}>{label}</label>
      <input type={type} id={title} name={title} {...restProps} />
    </div>
  )
}

const subtitleStyle = css`
  box-sizing: border-box;
`

export default Input
