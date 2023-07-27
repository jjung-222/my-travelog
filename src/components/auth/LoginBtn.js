export default function LoginBtn () {

  const REST_API_KEY = 'd71bff5e5e69e929c3f684f3f1666bbf';
  const REDIRECT_URI = 'http://localhost:3000/api/auth/callback/kakao';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <button type='button' onClick={loginHandler}>
      로그인 하기
    </button>
  );
};
