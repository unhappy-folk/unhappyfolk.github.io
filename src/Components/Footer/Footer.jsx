//Improt other components
import ReachUs from "../ReachUs/ReachUs";

function Footer(props) {
    return (
        <div style={{
                backgroundColor: '#110c11',
                padding: '1rem',
                height: '1%',
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0'
            }}
        >
            <ReachUs/>
        </div>
    )
}

export default Footer;