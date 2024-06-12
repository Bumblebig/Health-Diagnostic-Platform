import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TextInput from "../../../components/ui/Input"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import Button from "../../../components/ui/Button"
import { faLock } from "@fortawesome/free-solid-svg-icons"

const LoginForm = ({ email, setEmail, password, setPassword }) => {

  return (
    <div>
      <div className="email">
        <FontAwesomeIcon icon={faEnvelope} className="mailbox" />
        <TextInput id={'email'} name={"email"} onChange={setEmail} placeholder={"Enter your email"} value={email} type="email" variant="default" />
      </div>
      <div className="password">
        <FontAwesomeIcon icon={faLock} className="password-box" />
        <TextInput id={'password'} name={"password"} onChange={setPassword} placeholder={"Enter your password"} value={password} type="password" variant="default" />
      </div>
      
      <Button onClick={(e) => e.preventDefault()} size={'lg'} variant={'btn-primary'} >Continue</Button>
    </div>
  )
}

export default LoginForm