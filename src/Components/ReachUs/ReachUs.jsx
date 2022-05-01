//Import assets
import linkedInLogo from '../../assets/linkedin-logo.svg';
import githubLogo from '../../assets/github-logo.svg';
import instagramLogo from '../../assets/instagram-logo.svg';
import mailLogo from '../../assets/mail-logo.svg';
import telegramLogo from '../../assets/telegram-logo.svg';

function ReachUs() {
    return (
        <div style={{width: '100%'}}>
            <a href='https://www.linkedin.com/newsletters/the-unhappy-folk-6899718410507206656/'>
                <img src={linkedInLogo} style={{width: '5%'}}/>
            </a>
            {' '}
            <a href=' https://t.me/unhappyfolk'>
                <img src={telegramLogo} style={{width: '5%'}}/>
            </a>
            {' '}
            <a href=' https://www.instagram.com/unhappyfolk/'>
                <img src={instagramLogo} style={{width: '5%'}}/>
            </a>
            {' '} 
            <a href="mailto:msg@uhappyfolk.org">
                <img src={mailLogo} style={{width: '5%'}}/>
            </a>
            {' '} 
            <a href="https://github.com/unhappyfolk">
                <img src={githubLogo} style={{width: '5%'}}/>
            </a>
            <br/>
            <br/>
        </div>
        );
}

export default ReachUs;