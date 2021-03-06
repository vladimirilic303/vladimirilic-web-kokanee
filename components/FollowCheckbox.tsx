import { InputHTMLAttributes } from 'react'

interface FollowCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const FollowCheckbox: React.FC<FollowCheckboxProps> = ({ ...props }) => {
  return (
    <div className="notification_checkbox">
      <label htmlFor="follow">Follow</label>
      <input {...props} type="checkbox" id="follow" />
    </div>
  )
}

export default FollowCheckbox
