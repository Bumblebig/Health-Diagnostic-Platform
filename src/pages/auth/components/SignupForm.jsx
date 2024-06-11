import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import TextInput from "../../../components/ui/Input"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import Button from "../../../components/ui/Button"

const SignupForm = ({ email, setEmail }) => {

  return (
    <div>
      <div className="email">
        <FontAwesomeIcon icon={faEnvelope} className="mailbox" />
        <TextInput id={'email'} name={"email"} onChange={setEmail} placeholder={"Enter your email"} value={email} type="email" variant="default" />
      </div>
      <Button onClick={(e) => e.preventDefault()} size={'lg'} variant={'btn-primary'}>Sign Up</Button>
    </div>
  )
}

export default SignupForm