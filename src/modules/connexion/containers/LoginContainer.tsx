import LoginModal from "../components/LoginModal";
import LoginForm from "../components/LoginForm";
import { useLoginStore } from "../services/loginStore";
import { ClientOnly } from "@/shared/helpers/clientOnlyHelper";

const LoginContainer: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal } = useLoginStore();

  return (
    <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
      <ClientOnly fallback={<></>}>
        <LoginForm />
      </ClientOnly>
    </LoginModal>
  );
};

export default LoginContainer;
