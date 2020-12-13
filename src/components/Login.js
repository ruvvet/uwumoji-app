export default function login() {
  return <div><a href={`https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&permissions=1073744960&redirect_uri=${process.env.OAUTH_CALLBACK}&response_type=code&scope=identify%20email%20guilds%20bot`}>Login</a></div>;
}
