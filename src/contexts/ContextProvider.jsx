import { AuthContext } from './AuthContext';

const ContextProvider = ({ children }) => {
  return (
    <AuthContext>
        {children}
    </AuthContext>
  );
};

export default ContextProvider;
