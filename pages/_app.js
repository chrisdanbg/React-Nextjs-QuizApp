import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
        return (
            <div>
                <Component {...pageProps} />
                <style jsx global>{`
                    body {
                        background-color: #f2f2f7;
                        color: #FDA7DF;
                    }
                `}</style>
            </div>
        )
}

export default MyApp