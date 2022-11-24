import './style.css'
import logo from '../../imagens/mangayakiLogo.png'
import styled from 'styled-components';


function Login(){
    return(
        <body>
            <img src={logo} alt='logo' className='Logo'></img>
            <section className='area-login'>
                    <div className='login'>
                        <form>
                            <h2>Login</h2>
                            <input type='text' name='nome' placeholder='Nome de usuario ou email' autoFocus></input>
                            <h2>Senha</h2>
                            <input type='password' name='senha' placeholder='Senha'></input><br></br>
                            <p align='right'><a href='#'>Esqueceu sua Conta</a></p>
                            <div class="ou"></div>
                            <p align='center'>OU</p>
                            <div class="twoou"></div>
                            <input type='submit' value='Entrar'></input>
                            <input type='submit' value='Criar uma nova conta'></input>
                        </form>
                    </div>
            </section>
        </body>
    )
}

export default Login