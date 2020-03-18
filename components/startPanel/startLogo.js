function StartLogo(props) {
    return(
        <div className="text-center">
            <img className="logo" src={props.image}></img>
            <style jsx>{`
                    .logo {
                        height: 283px;
                        width: 400px;
                    }

            `}</style>
        </div>
    )
}

export default StartLogo