

function StartLogo(props) {

    return(
        <div className="text-center">
            <img className="logo" src={props.image}></img>
            <style jsx>{`
                    .logo {
                        height: 300px;
                        width: 300px;
                    }

            `}</style>
        </div>
        
    )
}

export default StartLogo